/**
 * Fuente única de verdad (SSoT) de TURBO RACING.
 *
 * Todos los datos de negocio del sitio viven aquí. Los componentes solo
 * muestran un canal de contacto, una red social o una zona de servicio
 * cuando el campo tiene un valor real: un campo vacío NO se renderiza.
 *
 * Pendiente (Frank): completar `contacto`, `redes` y `legal` con datos reales.
 */

export const site = {
  nombre: 'Turbo Racing',
  nombreLegal: 'Turbo Racing México',
  url: 'https://turbo-racing.mx',
  idioma: 'es-MX',
  locale: 'es_MX',
  descripcion:
    'Eventos, experiencias y competencias de radio control y drones en México: team building corporativo, planes familiares y la Pro Liga de RC y FPV.',
  lema: 'Adrenalina radio controlada en México',
  ogImage: '/og-default.jpg',
  logo: '/favicon.svg',
  tema: '#0F172A',

  contacto: {
    /** Solo dígitos con lada de país, p. ej. '5215500000000'. Vacío = no se muestra. */
    whatsapp: '' as string,
    /** Correo en el dominio propio, p. ej. 'hola@turbo-racing.mx'. Vacío = no se muestra. */
    email: '' as string,
    /** Teléfono en formato internacional, p. ej. '+52 55 0000 0000'. Vacío = no se muestra. */
    telefono: '' as string,
    /** Endpoint que recibe el formulario (webhook de n8n o Brevo). Vacío = el formulario usa WhatsApp o correo. */
    formEndpoint: '' as string,
    /** Zonas de servicio confirmadas, p. ej. ['Ciudad de México', 'Estado de México']. */
    zonas: [] as string[],
    /** Horario de atención, p. ej. 'Lunes a sábado, 10:00 a 19:00'. */
    horario: '' as string,
  },

  redes: {
    instagram: '' as string,
    tiktok: '' as string,
    youtube: '' as string,
    facebook: '' as string,
  },

  legal: {
    /** Nombre o razón social del responsable de los datos personales. */
    responsable: '' as string,
    /** Domicilio del responsable (requerido por la LFPDPPP). */
    domicilio: '' as string,
    avisoActualizado: '2026-09-24',
  },

  nav: [
    { href: '/', label: 'Inicio' },
    { href: '/servicios/corporativo/', label: 'Corporativo' },
    { href: '/servicios/familias/', label: 'Familias' },
    { href: '/servicios/pro-liga/', label: 'Pro Liga' },
    { href: '/catalogo/carros-rc/', label: 'Carros RC' },
    { href: '/catalogo/drones-pro/', label: 'Drones' },
    { href: '/noticias/', label: 'Noticias' },
  ],
} as const;

export type Site = typeof site;

/** Enlace de WhatsApp con mensaje prellenado, o null si no hay número. */
export function whatsappUrl(mensaje = 'Hola, quiero información sobre Turbo Racing.'): string | null {
  const numero = site.contacto.whatsapp.replace(/\D/g, '');
  if (!numero) return null;
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}

/** Redes con URL definida, listas para renderizar. */
export function redesActivas(): { nombre: string; abreviatura: string; url: string }[] {
  const catalogo = [
    { clave: 'instagram', nombre: 'Instagram', abreviatura: 'IG' },
    { clave: 'tiktok', nombre: 'TikTok', abreviatura: 'TK' },
    { clave: 'youtube', nombre: 'YouTube', abreviatura: 'YT' },
    { clave: 'facebook', nombre: 'Facebook', abreviatura: 'FB' },
  ] as const;
  return catalogo
    .filter((r) => site.redes[r.clave])
    .map((r) => ({ nombre: r.nombre, abreviatura: r.abreviatura, url: site.redes[r.clave] }));
}

/** true si existe al menos un canal para recibir contactos. */
export function hayCanalDeContacto(): boolean {
  const c = site.contacto;
  return Boolean(c.formEndpoint || c.whatsapp || c.email || c.telefono);
}
