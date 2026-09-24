import typography from '@tailwindcss/typography';

/**
 * Sistema visual TURBO RACING — minimalista, fondo blanco.
 * Regla: el naranja es solo acento (un punto, un subrayado, un detalle);
 * la jerarquía la dan la tipografía, el espacio y las líneas finas.
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111111', // texto principal y botón primario
        muted: '#5F5F5F', // texto secundario (AA sobre blanco y paper)
        line: '#E7E7E4', // bordes y divisores
        paper: '#F6F6F3', // superficies suaves
        primary: {
          DEFAULT: '#F97316', // acento naranja (puntos, detalles)
          strong: '#C2410C', // naranja para texto sobre blanco (AA)
        },
      },
      fontFamily: {
        sans: ['"Geist Variable"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      maxWidth: {
        site: '76rem',
      },
      letterSpacing: {
        display: '-0.035em',
      },
    },
  },
  plugins: [typography],
};
