import { t, localizePath, postLang, postUrl, findTranslation, languages, type Lang } from './i18n/ui';
import { SITE_NAME, author, getPublishedPosts, listedPosts } from './site';

export function escapeXml(s: string): string {
  return s.replace(/[<>&'"]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[c]!);
}

export async function rssFeed(lang: Lang, site: URL): Promise<Response> {
  const posts = listedPosts(lang, await getPublishedPosts());
  const self = new URL(localizePath(lang, '/rss.xml'), site).href;
  const items = posts
    .map((post) => {
      const url = new URL(postUrl(post), site).href;
      return `    <item>
      <title>${escapeXml(post.data.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.data.description)}</description>
      <pubDate>${post.data.date.toUTCString()}</pubDate>
      <dc:creator>${escapeXml(author.name)}</dc:creator>
      <dc:language>${postLang(post)}</dc:language>
    </item>`;
    })
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${SITE_NAME}</title>
    <link>${new URL(localizePath(lang, '/'), site).href}</link>
    <atom:link href="${self}" rel="self" type="application/rss+xml" />
    <description>${escapeXml(t(lang, 'index.description'))}</description>
    <language>${lang}</language>
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}

/** Every page on the site, grouped with its translations, for the sitemap. */
export async function sitePages(): Promise<{ loc: string; lastmod?: Date; alternates: Partial<Record<Lang, string>> }[]> {
  const langs = Object.keys(languages) as Lang[];
  const pages = [];
  for (const path of ['/', '/virgile-deville/']) {
    const alternates = Object.fromEntries(langs.map((l) => [l, localizePath(l, path)]));
    for (const l of langs) pages.push({ loc: localizePath(l, path), alternates });
  }
  const posts = await getPublishedPosts();
  for (const post of posts) {
    const translation = findTranslation(post, posts);
    const alternates: Partial<Record<Lang, string>> = { [postLang(post)]: postUrl(post) };
    if (translation) alternates[postLang(translation)] = postUrl(translation);
    pages.push({ loc: postUrl(post), lastmod: post.data.date, alternates });
  }
  return pages;
}
