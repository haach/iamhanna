/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

const config = {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			colors: {
				/* remix: {
					black: '#121212',
					blue: '#3defe9',
				}, */
				y: colors.yellow[400], // yellow
				o: colors.amber[600], // orange
				gl: colors.neutral[200], // gray-light
				g: colors.neutral[300], // gray
				gd: colors.neutral[500], // gray-dark
				bl: colors.neutral[900], // black-light
			},
			/* textDecorationThickness: {
				3: '3px',
			},
			gridTemplateRows: {
				layout: 'auto 1fr auto',
			},
			textUnderlineOffset: {
				6: '6px',
			}, */
			fontFamily: {
				sans: ['Roboto Condensed', 'sans-serif'],
				serif: ['Cormorant Infant', 'serif'],
			},
		},
	},
	plugins: [],
	darkMode: 'class',
};

module.exports = config;
