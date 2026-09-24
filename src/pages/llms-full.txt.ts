import type { APIRoute } from 'astro';
import { postLang, postUrl } from '../i18n/ui';
import { author, getPublishedPosts } from '../site';

// Full Markdown text of every post, for AI assistants and answer engines (see /llms.txt).
export const GET: APIRoute = async ({ site }) => {
  const posts = (await getPublishedPosts()).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  const body = posts
    .map(
      (post) => `# ${post.data.title}

URL: ${new URL(postUrl(post), site).href}
Author: ${author.name}
Date: ${post.data.date.toISOString().slice(0, 10)}
Language: ${postLang(post)}

${post.body?.trim() ?? ''}
`
    )
    .join('\n---\n\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
