const fs = require('fs');
const path = require('path');

const appFilePath = path.join(__dirname, '..', 'App.jsx');
const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
const envFilePath = path.join(__dirname, '..', '.env');

const readEnvFile = () => {
  if (!fs.existsSync(envFilePath)) {
    return {};
  }

  const envText = fs.readFileSync(envFilePath, 'utf8');
  const envEntries = {};

  envText.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith('#')) {
      return;
    }

    const separatorIndex = trimmed.indexOf('=');

    if (separatorIndex === -1) {
      return;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim().replace(/^['"]|['"]$/g, '');

    if (key) {
      envEntries[key] = value;
    }
  });

  return envEntries;
};

const envFile = readEnvFile();
const SITE_URL = (
  process.env.SITE_URL ||
  process.env.VITE_SITE_URL ||
  envFile.SITE_URL ||
  envFile.VITE_SITE_URL ||
  'https://www.avanceepro.com'
).replace(/\/+$/, '');

const normalizePath = (value) => {
  if (!value) {
    return null;
  }

  let nextPath = value.trim();

  if (!nextPath.startsWith('/')) {
    nextPath = `/${nextPath}`;
  }

  nextPath = nextPath.replace(/\.html$/i, '');

  if (nextPath.length > 1 && nextPath.endsWith('/')) {
    nextPath = nextPath.slice(0, -1);
  }

  return nextPath || '/';
};

const readRoutesFromApp = () => {
  const appContents = fs.readFileSync(appFilePath, 'utf8');
  const matches = [...appContents.matchAll(/path="([^"]+)"/g)];
  const routes = new Set(['/']);

  matches.forEach((match) => {
    const normalized = normalizePath(match[1]);

    if (!normalized) {
      return;
    }

    routes.add(normalized);
  });

  return [...routes].sort((a, b) => {
    if (a === '/') return -1;
    if (b === '/') return 1;
    return a.localeCompare(b);
  });
};

const routes = readRoutesFromApp();
const lastmod = new Date().toISOString().split('T')[0];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((route) => {
    const loc = `${SITE_URL}${route === '/' ? '' : route}`;
    const priority = route === '/' ? '1.0' : '0.80';

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>
`;

fs.writeFileSync(outputPath, xml, 'utf8');
console.log(`Generated sitemap: ${outputPath}`);
