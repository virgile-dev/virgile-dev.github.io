import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    modalId: z.number(),
    date: z.coerce.date(),
    icon: z.string().optional(),
    img: z.string().optional(),
    alt: z.string(),
    projectDate: z.string(),
    website: z.string().optional(),
    link: z.string().optional(),
    location: z.string(),
    title: z.string(),
    description: z.string().nullable().optional(),
  }),
});

const press = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/press' }),
  schema: z.object({
    date: z.coerce.date(),
    img: z.string().nullable().optional(),
    alt: z.string(),
    link: z.string(),
    title: z.string(),
  }),
});

export const collections = { projects, press };
