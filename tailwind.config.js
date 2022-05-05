module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#f2b11b',
        yellow: '#f2c608',
        gray: '#dcdcdc',
        'gray-dark': '#30383b',
      },
      fontFamily: {
        sans: ['Roboto Condensed', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
