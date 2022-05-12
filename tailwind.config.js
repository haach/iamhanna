const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        y: colors.yellow[400], // yellow
        o: colors.amber[600], // orange
        gl: colors.neutral[200], // gray-light
        g: colors.neutral[300], // gray
        gd: colors.neutral[400], // gray-dark
        bl: colors.neutral[900], // black-light
      },
      fontFamily: {
        sans: ['Roboto Condensed', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        title: ['Bebas Neue', 'cursive'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
