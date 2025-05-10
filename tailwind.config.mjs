/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'ivory': '#fdfaf6',
        'soft-black': '#1a1a1a',
        'ochre': '#c2a97e',
        'terracotta': '#a3745c',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'serif'],
        'cormorant': ['Cormorant', 'serif'],
        'inter': ['Inter', 'sans-serif'],
        'opensans': ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 