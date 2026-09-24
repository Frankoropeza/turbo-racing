import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { readdirSync } from 'node:fs';

/** true si la carpeta tiene al menos un .md/.mdx (evita el aviso del glob loader con colecciones vacías). */
const tieneMarkdown = (dir: string) => {
  try {
    return readdirSync(dir, { recursive: true }).some((f) => /\.mdx?$/.test(String(f)));
  } catch {
    return false;
  }
};

/* ───────────── Piezas reutilizables ───────────── */

const color = z.enum(['primary', 'accent', 'neutral']);

const boton = z.object({
  label: z.string(),
  href: z.string(),
  estilo: z.enum(['solido', 'contorno', 'claro']).default('solido'),
});

/** Encabezado de sección (SectionHeader). Los párrafos van en `parrafos`. */
const encabezado = z.object({
  badge: z.string(),
  title: z.string(),
  slogan: z.string().optional(),
  parrafos: z.array(z.string()).default([]),
  badgeColor: color.default('primary'),
});

const cta = z.object({
  titulo: z.string(),
  resaltado: z.string(),
  texto: z.string(),
  boton,
});

const itemIcono = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.string(),
});

/* ───────────── Colecciones ───────────── */

/** Páginas únicas: inicio, contacto, índice de noticias y textos legales. */
const paginas = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/paginas' }),
  schema: ({ image }) =>
    z.object({
      tipo: z.enum(['inicio', 'contacto', 'noticias', 'legal']),
      title: z.string().max(70),
      seoTitle: z.string().max(60).optional(),
      description: z.string().min(70).max(160),
      badge: z.string().optional(),
      hero: z
        .object({
          badge: z.string(),
          linea1: z.string(),
          linea2: z.string(),
          tagline: z.string(),
          imagen: image(),
          alt: z.string(),
          botones: z.array(boton).default([]),
        })
        .optional(),
      accesos: z.array(z.object({ title: z.string(), subtitle: z.string(), href: z.string() })).optional(),
      secciones: z.record(z.string(), encabezado).optional(),
      porque: z
        .object({
          titulo: z.string(),
          resaltado: z.string(),
          texto: z.string(),
          tarjeta: z.object({ titulo: z.string(), texto: z.string(), boton }),
        })
        .optional(),
      proceso: z
        .object({ badge: z.string(), titulo: z.string(), pasos: z.array(itemIcono) })
        .optional(),
      cta: cta.optional(),
      actualizado: z.coerce.date().optional(),
    }),
});

/** Líneas de servicio: corporativo, familias, pro liga. */
const servicios = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/servicios' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(70),
      seoTitle: z.string().max(60),
      description: z.string().min(70).max(160),
      orden: z.number().int(),
      icono: z.enum(['corporativo', 'familias', 'liga']),
      acento: z.enum(['primary', 'secondary']).default('primary'),
      hero: z.object({
        badge: z.string(),
        linea1: z.string(),
        linea2: z.string(),
        texto: z.string(),
        imagen: image(),
        alt: z.string(),
        botones: z.array(boton).default([]),
      }),
      /** Tarjeta resumen que aparece en el inicio. */
      resumen: z.object({
        nombre: z.string(),
        texto: z.string(),
        puntos: z.array(z.string()).max(4),
        enlace: z.string(),
      }),
      seccion: encabezado,
      caracteristicas: z.array(itemIcono).min(1),
      bloqueImagen: z
        .object({ imagen: image(), alt: z.string(), linea1: z.string(), linea2: z.string() })
        .optional(),
      cta,
    }),
});

/** Páginas de catálogo: carros RC y drones. */
const catalogo = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/catalogo' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(70),
      seoTitle: z.string().max(60),
      description: z.string().min(70).max(160),
      linea: z.enum(['carros-rc', 'drones-pro']),
      encabezado: encabezado,
      filtros: z.array(z.object({ id: z.string(), label: z.string() })).optional(),
      aviso: z
        .object({ titulo: z.string(), texto: z.string(), enlace: z.object({ label: z.string(), href: z.string() }) })
        .optional(),
      bloque: z
        .object({
          variante: z.enum(['naranja', 'imagen']),
          fondo: z.string().optional(),
          badge: z.string().optional(),
          titulo: z.string(),
          resaltado: z.string().optional(),
          parrafos: z.array(z.string()),
          imagen: image().optional(),
          alt: z.string().optional(),
          tarjeta: z
            .object({ etiqueta: z.string(), titulo: z.string(), lista: z.array(z.string()), nota: z.string() })
            .optional(),
          boton,
        })
        .optional(),
      cta,
    }),
});

/** Categorías de equipo (tarjetas del catálogo y del inicio). La descripción es el cuerpo del Markdown. */
const categorias = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/categorias' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      linea: z.enum(['carros-rc', 'drones-pro']),
      etiqueta: z.string(),
      escala: z.string(),
      tipo: z.string(),
      specs: z.array(z.string()).max(4),
      imagen: image(),
      alt: z.string(),
      orden: z.number().int(),
    }),
});

/** Blog de noticias. */
const noticias = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/noticias' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(90),
      seoTitle: z.string().max(60).optional(),
      description: z.string().min(70).max(160),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      author: z.string(),
      category: z.enum(['competicion', 'tecnologia', 'eventos', 'comunidad', 'general']),
      image: image().optional(),
      imageAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      servicio: reference('servicios').optional(),
      draft: z.boolean().default(false),
    }),
});

/** Calendario de eventos. Solo se muestran eventos con fecha futura y draft=false. */
const eventos = defineCollection({
  loader: tieneMarkdown('./src/content/eventos')
    ? glob({ pattern: '**/*.{md,mdx}', base: './src/content/eventos' })
    : () => [],
  schema: z.object({
    title: z.string().max(90),
    date: z.coerce.date(),
    ciudad: z.string(),
    sede: z.string(),
    description: z.string().max(200),
    registroUrl: z.url().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { paginas, servicios, catalogo, categorias, noticias, eventos };
