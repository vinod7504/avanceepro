const fs = require('fs');
const path = require('path');

const SITE_URL = process.env.SITE_URL || 'https://www.avanceepro.com';
const appFilePath = path.join(__dirname, '..', 'client', 'App.jsx');
const outputPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

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
