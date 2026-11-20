// Runs before `npm run build`. Always writes robots.txt.
// If SITE_URL (https://...) is set, also writes sitemap.xml and injects the canonical URL.
import { writeFileSync, readFileSync } from 'node:fs';
const url = (process.env.SITE_URL || '').replace(/\/$/, '');
let robots = 'User-agent: *\nAllow: /\n';
if (url) {
  if (!/^https:\/\//.test(url)) throw new Error('SITE_URL must start with https://');
  robots += `\nSitemap: ${url}/sitemap.xml\n`;
  writeFileSync('public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${url}/</loc></url>\n</urlset>\n`);
  const html = readFileSync('index.html', 'utf8').replace('<!--CANONICAL-->', `<link rel="canonical" href="${url}/" />`);
  writeFileSync('index.html', html);
  console.log('SEO: sitemap + canonical written for', url);
} else console.log('SEO: SITE_URL not set - robots.txt only (no sitemap/canonical).');
writeFileSync('public/robots.txt', robots);
