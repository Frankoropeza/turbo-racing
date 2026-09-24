import { site, redesActivas } from '@config/site';

export type TipoPagina = 'inicio' | 'servicio' | 'catalogo' | 'contacto' | 'noticias' | 'articulo' | 'legal' | 'error';

export interface Migaja {
  nombre: string;
  url: string;
}

export interface SeoInput {
  tipo: TipoPagina;
  title: string;
  seoTitle?: string;
  description: string;
  path: string;
  image?: string;
  migas?: Migaja[];
  articulo?: { publicado: Date; actualizado?: Date; autor: string; seccion?: string };
  servicio?: { nombre: string; tipo: string };
  items?: { nombre: string; url: string }[];
  noindex?: boolean;
}

const ORG_ID = `${site.url}/#organization`;
const WEB_ID = `${site.url}/#website`;

/** Título final: evita duplicar la marca y respeta ~60 caracteres. */
export function tituloCompleto(title: string, seoTitle?: string): string {
  const base = (seoTitle ?? title).trim();
  if (base.toLowerCase().includes(site.nombre.toLowerCase())) return base;
  const conMarca = `${base} | ${site.nombre}`;
  return conMarca.length <= 60 ? conMarca : base;
}

export function urlAbsoluta(path: string): string {
  return new URL(path, site.url).toString();
}

function organizacion() {
  const c = site.contacto;
  const sameAs = redesActivas().map((r) => r.url);
  const contactPoint =
    c.telefono || c.email
      ? [
          {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            availableLanguage: ['es'],
            ...(c.telefono ? { telephone: c.telefono } : {}),
            ...(c.email ? { email: c.email } : {}),
          },
        ]
      : undefined;
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: site.nombre,
    url: `${site.url}/`,
    logo: urlAbsoluta(site.logo),
    description: site.descripcion,
    areaServed: c.zonas.length ? c.zonas : { '@type': 'Country', name: 'México' },
    ...(sameAs.length ? { sameAs } : {}),
    ...(contactPoint ? { contactPoint } : {}),
  };
}

function sitioWeb() {
  return {
    '@type': 'WebSite',
    '@id': WEB_ID,
    name: site.nombre,
    url: `${site.url}/`,
    inLanguage: site.idioma,
    publisher: { '@id': ORG_ID },
  };
}

function migasDePan(migas: Migaja[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: migas.map((m, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: m.nombre,
      item: urlAbsoluta(m.url),
    })),
  };
}

/** JSON-LD por tipo de página. Sin reseñas ni calificaciones: el sitio no tiene datos verificables de ese tipo. */
export function jsonLd(input: SeoInput) {
  const url = urlAbsoluta(input.path);
  const imagen = urlAbsoluta(input.image ?? site.ogImage);
  const graph: Record<string, unknown>[] = [organizacion(), sitioWeb()];

  const pagina: Record<string, unknown> = {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: tituloCompleto(input.title, input.seoTitle),
    description: input.description,
    inLanguage: site.idioma,
    isPartOf: { '@id': WEB_ID },
    primaryImageOfPage: imagen,
  };

  switch (input.tipo) {
    case 'contacto':
      pagina['@type'] = 'ContactPage';
      break;
    case 'catalogo':
    case 'noticias':
      pagina['@type'] = 'CollectionPage';
      if (input.items?.length) {
        pagina.mainEntity = {
          '@type': 'ItemList',
          itemListElement: input.items.map((it, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: it.nombre,
            url: urlAbsoluta(it.url),
          })),
        };
      }
      break;
    case 'servicio':
      if (input.servicio) {
        graph.push({
          '@type': 'Service',
          '@id': `${url}#service`,
          name: input.servicio.nombre,
          serviceType: input.servicio.tipo,
          description: input.description,
          provider: { '@id': ORG_ID },
          areaServed: site.contacto.zonas.length ? site.contacto.zonas : { '@type': 'Country', name: 'México' },
          url,
        });
      }
      break;
    case 'articulo':
      if (input.articulo) {
        graph.push({
          '@type': 'BlogPosting',
          '@id': `${url}#article`,
          headline: input.title,
          description: input.description,
          image: imagen,
          datePublished: input.articulo.publicado.toISOString(),
          dateModified: (input.articulo.actualizado ?? input.articulo.publicado).toISOString(),
          author: { '@type': 'Organization', name: input.articulo.autor },
          publisher: { '@id': ORG_ID },
          mainEntityOfPage: { '@id': `${url}#webpage` },
          inLanguage: site.idioma,
          ...(input.articulo.seccion ? { articleSection: input.articulo.seccion } : {}),
        });
      }
      break;
  }

  graph.push(pagina);
  if (input.migas && input.migas.length > 1) graph.push(migasDePan(input.migas));

  return { '@context': 'https://schema.org', '@graph': graph };
}

/** Formato de fecha para México. */
export function fechaMx(fecha: Date, estilo: 'long' | 'short' = 'long'): string {
  return fecha.toLocaleDateString('es-MX', {
    year: 'numeric',
    month: estilo,
    day: 'numeric',
    timeZone: 'America/Mexico_City',
  });
}

/** Etiquetas visibles de las categorías del blog. */
export const categoriasNoticias: Record<string, string> = {
  competicion: 'Competición',
  tecnologia: 'Tecnología',
  eventos: 'Eventos',
  comunidad: 'Comunidad',
  general: 'General',
};
