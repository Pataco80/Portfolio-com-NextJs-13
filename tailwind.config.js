/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			sans: ['var(--font-inter)', 'sans-serif'],
		},
		extend: {
			colors: {
				'blue-ribbon': {
					DEFAULT: '#0034FE',
					50: '#DFE6FF',
					100: '#CBD6FF',
					200: '#A2B5FF',
					300: '#7995FF',
					400: '#5174FF',
					500: '#2854FF',
					600: '#0034FE',
					700: '#0029C6',
					800: '#001D8E',
					900: '#001256',
					950: '#000C3A',
				},
				'pale-sky': {
					DEFAULT: '#6B7280',
					50: '#E3E5E8',
					100: '#D8DADF',
					200: '#C2C5CC',
					300: '#ACB0BA',
					400: '#969BA7',
					500: '#7F8694',
					600: '#6B7280',
					700: '#515761',
					800: '#383C43',
					900: '#1E2024',
					950: '#121315',
				},
			},
			backgroundImage: {
				'hero-image': "url('/images/hero-bg.png')",
			},
			fontFamily: {
				mono: ['var(--font-plex-mono)', 'monospace'],
			},
			boxShadow: {
				button: '0px 0px 68px 7px rgba(40,84,255, 0.4)',
				image: '0px 0px 68px 7px rgba(40,84,255, 0.4)',
				knowteckscard: '0px 0px 15px 0px rgba(40,84,255, 0.4)',
			},
		},
	},
	plugins: [],
}
