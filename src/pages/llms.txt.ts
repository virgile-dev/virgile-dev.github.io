import type { APIRoute } from 'astro';
import { t, postLang, postUrl } from '../i18n/ui';
import { author, getPublishedPosts } from '../site';

// https://llmstxt.org — a plain-text map of the site for AI assistants and answer engines.
export const GET: APIRoute = async ({ site }) => {
  const abs = (path: string) => new URL(path, site).href;
  const posts = (await getPublishedPosts()).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const list = (lang: 'en' | 'fr') =>
    posts
      .filter((post) => postLang(post) === lang)
      .map((post) => `- [${post.data.title}](${abs(postUrl(post))}): ${post.data.description}`)
      .join('\n');

  const body = `# oss.pm

> ${t('en', 'index.description')} Blog of ${author.name}, ${t('en', 'layout.description')}

${t('en', 'index.tagline')}

The site is bilingual: English at ${abs('/')}, French at ${abs('/fr/')}. Full text of every post: ${abs('/llms-full.txt')}.

## About

- [${author.name}](${abs(author.path)}): profile — current work on LaSuite Docs at DINUM, teaching at Sciences Po, past work on Decidim and Open Source Politics.
${author.sameAs.map((url) => `- ${url}`).join('\n')}

## Posts (English)

${list('en')}

## Articles (français)

${list('fr')}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
