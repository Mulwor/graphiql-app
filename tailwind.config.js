/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      'mainblue': '#418f9d',
      'mainred': '#D81B60',
      'backgroundcolor': '#FAFAFA',
      'hoverblue': '#00698a',
      'white': '#FFFFFF',
      'darkblue': '#00324b',
      'lightblue': '#95d0db',
      'hoverlight': '#e3d8d8',
      'modaldark': '#002030',
      'opacitycolor': '#00000022'
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
    },
  },
  plugins: [],
}
