import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://turbo-racing.mx',
  // GitHub Pages no admite 301 de servidor: Astro genera una página con
  // meta refresh inmediato y rel=canonical hacia el destino.
  // 2026-09-22: URL del sitio anterior enlazada desde un medio externo.
  redirects: {
    '/carreras-turbo-racing': '/servicios/pro-liga/',
  },
  integrations: [mdx(), sitemap(), tailwind()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
