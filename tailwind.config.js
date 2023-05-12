/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      'seagreen': '#005b7f',
      //  '#418f9d',
      'fuchsia': '#D81B60',
      'whitesmoke': '#FAFAFA',
      'deepsea': '#00698a',
      'white': '#FFFFFF',
      'prussianblue': '#00324b',
      'lightblue': '#a6e2ed',
      // '#95d0db',
      'darknavy': '#002030',
      'opacitycolor': '#00000022',
    },
    screens: {
      'sm': '640px',
      'md': '770px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
    },
  },
  plugins: [],
}
