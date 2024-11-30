/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        roboto: 'Roboto Condensed, serif',
        satisfy: 'Satisfy, serif',
        quattrocento: 'Quattrocento, serif',
        barlow: 'Barlow,serif',
      },
    },
    colors: {
      red: '#CE2829',
      white: '#FFFFFF',
      yellow: '#FDC913',
      lightGrey: '#5F5F5F',
      darkGrey: '#292929',
      beige: 'FAF7F2',
    },
  },
  plugins: [],
};
