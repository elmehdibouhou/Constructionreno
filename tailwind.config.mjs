/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          900: '#0A1E2A',
          800: '#0F2633',
          700: '#1B3A4B',
          600: '#2D5F7C',
          500: '#3D7A9A',
          400: '#5B9BB8',
        },
        accent: {
          900: '#7A5C1E',
          700: '#A8802F',
          500: '#C8A96E',
          300: '#E0C992',
          100: '#F5EDDA',
        },
        'off-white': '#F7F5F0',
        dark: '#2C2926',
      },
      maxWidth: {
        site: '1280px',
      },
      spacing: {
        'section': 'clamp(4rem, 8vw, 7rem)',
      },
    },
  },
  plugins: [],
};
