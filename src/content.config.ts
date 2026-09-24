import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    draft: z.boolean().optional(),
    // Optional URL slug, e.g. a French slug for a French translation.
    // (Not `slug`: the glob loader would use it as the entry id and drop the lang folder.)
    urlSlug: z.string().optional(),
  }),
});

export const collections = { blog };
