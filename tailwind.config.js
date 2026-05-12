/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#000000',
        stone: '#E8E5E1',
        bordeaux: '#6E0F1D',
        gold: '#B89B72',
        bone: '#F8F6F2',
      },
      fontFamily: {
        display: ['"Archivo Black"', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        sans: ['Inter', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
      },
      letterSpacing: {
        tightest: '-0.06em',
        editorial: '-0.04em',
      },
      transitionTimingFunction: {
        luxe: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
