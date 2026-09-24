// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Redirecciones de URLs heredadas.
// GitHub Pages no admite 301 de servidor: Astro genera una página con
// meta refresh inmediato, `noindex` y rel=canonical hacia el destino.
// Si el sitio migra a Cloudflare Pages, pasar esta lista a public/_redirects (301).
const redirects = {
  // 2026-09-22 · URL del sitio anterior enlazada desde un medio externo.
  '/carreras-turbo-racing': '/servicios/pro-liga/',
  // 2026-09-24 · Fichas de la tienda WooCommerce anterior con backlinks vivos (Ahrefs).
  '/producto/coche-de-control-remoto-rc-drift-car-escala-116-4wd-rc-car-con-luces-led-24-ghz-30-km-h-carcasa-dura-rtr-de-alta-velocidad-drift-racing-sport-toy-car-para-adultos-ninos-ninas-regalo-2-piezas-bateria':
    '/catalogo/carros-rc/',
  '/producto/carros-de-radio-control-turbo-racing-pura-emocion': '/catalogo/carros-rc/',
  '/producto/rc-drift-car-2-4ghz-124-escala-4wd-alta-velocidad-control-remoto-coches-vehiculo-con-luces-led-baterias-y-neumaticos-a-la-deriva-racing-sport-toy-cars-para-adultos-ninos-ninas-ninos-regalo':
    '/catalogo/carros-rc/',
  '/producto/turbo-racing-176-super-mini-rc-car-a-escala-real-mini-rc-car-de-escritorio-de-24-ghz-con-control-remoto-p31':
    '/catalogo/carros-rc/',
};

export default defineConfig({
  site: 'https://turbo-racing.mx',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  redirects,
  integrations: [
    mdx(),
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  markdown: {
    shikiConfig: { theme: 'github-dark' },
  },
});
