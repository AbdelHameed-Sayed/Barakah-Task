/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './components/**/**/*.{js,jsx,ts,tsx}',
    './app/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lemon: '#cae44a',
        lightGreen: '#a2cfc7',
        lightGray: '#f0f1f2',
        white: '#ffffff',
        red: '#ee7672',
        black: '#000000',
        darkGray: '#a9acaf',
      },
    },
  },
  plugins: [],
};
