const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const multer = require('multer');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

// Load env only from project root .env (outside server folder).
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const app = express();
const port = Number(process.env.SERVER_PORT || 8787);
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 12 * 1024 * 1024,
    files: 5
  }
});

const requiredSmtpKeys = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS'];

const hasSmtpConfig = () => requiredSmtpKeys.every((key) => Boolean(process.env[key]));

const createTransporter = () => {
  const secure = String(process.env.SMTP_SECURE || '').toLowerCase() === 'true';

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
};

let mailer = hasSmtpConfig() ? createTransporter() : null;

app.use(cors());
app.use(express.json({ limit: '4mb' }));
app.use(express.urlencoded({ extended: true, limit: '4mb' }));

const normalizeFieldValue = (value) => {
  if (Array.isArray(value)) {
    return value.join(', ');
  }

  if (value === null || typeof value === 'undefined') {
    return '';
  }

  return String(value).trim();
};

const isIgnoredField = (key) => {
  const ignoredFields = new Set(['_captcha', '_template', '_next']);
  return ignoredFields.has(key);
};

const htmlEscape = (input) =>
  String(input)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const buildMailPayload = (req) => {
  const body = req.body || {};
  const source = normalizeFieldValue(body._source || body.Source || 'Website Form');
  const page = normalizeFieldValue(body._page || body.Page || req.get('referer') || 'Unknown page');
  const subject = normalizeFieldValue(body._subject || body.subject || `${source} Submission`);
  const submittedAt = new Date().toISOString();

  const fields = Object.entries(body)
    .filter(([key, value]) => {
      if (!key || isIgnoredField(key)) {
        return false;
      }

      if (key.startsWith('_')) {
        return false;
      }

      return normalizeFieldValue(value) !== '';
    })
    .map(([key, value]) => ({ key, value: normalizeFieldValue(value) }));

  const attachments = (req.files || []).map((file) => ({
    filename: file.originalname,
    content: file.buffer,
    contentType: file.mimetype
  }));

  const htmlRows = fields
    .map(({ key, value }) => {
      return `<tr><td style="padding:8px 10px;border:1px solid #d8e3f4;font-weight:700;background:#f5f9ff">${htmlEscape(
        key
      )}</td><td style="padding:8px 10px;border:1px solid #d8e3f4">${htmlEscape(value)}</td></tr>`;
    })
    .join('');

  const html = `
    <div style="font-family:Arial,sans-serif;color:#143355;line-height:1.5">
      <h2 style="margin:0 0 12px;color:#0a3f75">New Website Enquiry</h2>
      <p style="margin:0 0 12px"><strong>Source:</strong> ${htmlEscape(source)}</p>
      <p style="margin:0 0 12px"><strong>Page:</strong> ${htmlEscape(page)}</p>
      <p style="margin:0 0 18px"><strong>Submitted:</strong> ${htmlEscape(submittedAt)}</p>
      <table style="border-collapse:collapse;width:100%;max-width:760px;border:1px solid #d8e3f4">${htmlRows || '<tr><td style="padding:10px">No fields submitted.</td></tr>'}</table>
    </div>
  `;

  const text = [
    `Source: ${source}`,
    `Page: ${page}`,
    `Submitted: ${submittedAt}`,
    '',
    ...fields.map(({ key, value }) => `${key}: ${value}`)
  ].join('\n');

  return {
    subject,
    source,
    attachments,
    html,
    text
  };
};

app.get('/api/health', (_req, res) => {
  const smtpReady = hasSmtpConfig();

  if (smtpReady && !mailer) {
    mailer = createTransporter();
  }

  res.json({ ok: true, smtpReady });
});

app.post('/api/forms/submit', upload.any(), async (req, res) => {
  try {
    if (!hasSmtpConfig()) {
      return res.status(500).json({
        ok: false,
        message:
          'SMTP is not configured. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in project root .env.'
      });
    }

    if (!mailer) {
      mailer = createTransporter();
    }

    const payload = buildMailPayload(req);
    const to = process.env.MAIL_TO || 'services@avanceepro.in';
    const from = process.env.SMTP_FROM || process.env.SMTP_USER;
    const replyTo =
      normalizeFieldValue(req.body.Email) ||
      normalizeFieldValue(req.body.email) ||
      normalizeFieldValue(req.body['Email address']) ||
      undefined;

    await mailer.sendMail({
      from,
      to,
      replyTo,
      subject: `[AvanceePro] ${payload.subject}`,
      text: payload.text,
      html: payload.html,
      attachments: payload.attachments
    });

    return res.json({
      ok: true,
      message: 'Thanks, we will contact you within 24 hours.'
    });
  } catch (error) {
    console.error('Mail send error:', error);
    return res.status(500).json({
      ok: false,
      message: 'Unable to send your request right now. Please try again.'
    });
  }
});

if (process.env.NODE_ENV === 'production') {
  const distPath = path.resolve(__dirname, '..', 'client', 'dist');
  if (fs.existsSync(distPath)) {
    app.use(express.static(distPath));
    app.get(/.*/, (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }
}

app.listen(port, () => {
  const smtpStatus = hasSmtpConfig() ? 'configured' : 'missing SMTP env values';
  console.log(`Mail server listening on http://localhost:${port} (${smtpStatus})`);
});
