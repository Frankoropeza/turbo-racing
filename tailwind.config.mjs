import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#F97316', // Naranja Turbo (acentos y texto sobre fondo oscuro)
          strong: '#C2410C', // Fondo de botones y badges con texto blanco (contraste AA)
        },
        secondary: '#1E293B', // Azul pizarra
        accent: '#2563EB', // Azul racer
        dark: '#0F172A',
        light: '#F8FAFC',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['"Oswald Variable"', 'Oswald', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [typography],
};
