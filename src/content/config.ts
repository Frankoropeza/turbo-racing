import { defineCollection, z } from 'astro:content';

const noticias = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(120),
    description: z.string().max(260),
    pubDate: z.coerce.date(),
    author: z.string(),
    category: z.enum(['competicion', 'tecnologia', 'equipo', 'comunidad', 'general']),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const eventos = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(120),
    date: z.coerce.date(),
    location: z.string(),
    description: z.string().max(260),
    registrationUrl: z.string().url().optional(),
  }),
});

const pilotos = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    nationality: z.string(),
    team: z.string(),
    number: z.number().int().positive(),
    bio: z.string(),
    image: z.string().optional(),
  }),
});

export const collections = { noticias, eventos, pilotos };
