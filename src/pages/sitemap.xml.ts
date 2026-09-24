import type { APIRoute } from 'astro';
import { defaultLang } from '../i18n/ui';
import { sitePages } from '../feeds';

export const GET: APIRoute = async ({ site }) => {
  const abs = (path: string) => new URL(path, site).href;
  const urls = (await sitePages())
    .map(({ loc, lastmod, alternates }) => {
      const links = Object.entries(alternates).map(
        ([lang, href]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${abs(href)}" />`
      );
      if (alternates[defaultLang])
        links.push(`    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(alternates[defaultLang])}" />`);
      return `  <url>
    <loc>${abs(loc)}</loc>
${lastmod ? `    <lastmod>${lastmod.toISOString().slice(0, 10)}</lastmod>\n` : ''}${links.join('\n')}
  </url>`;
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
