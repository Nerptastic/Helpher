/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ffeff5',
          100: '#fedbe4',
          200: '#febfd0',
          300: '#fd93a5',
          400: '#fa608e',
          500: '#f63b6d',
          600: '#eb2571',
          700: '#EE3763',
          800: '#af1e45',
          900: '#8a1e35',
        },
      },
    },
  },
  plugins: [],
};
