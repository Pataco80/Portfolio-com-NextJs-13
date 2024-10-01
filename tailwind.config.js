/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-inter)', 'sans-serif']
    },
    extend: {
      colors: {
        'blue-ribbon': {
          DEFAULT: '#0055FF',
          50: '#E0EBFF',
          100: '#CCDDFF',
          200: '#A3C2FF',
          300: '#7AA7FF',
          400: '#528BFF',
          500: '#2970FF',
          600: '#0055FF',
          700: '#0042C7',
          800: '#00308F',
          900: '#001D57',
          950: '#00143B'
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
          950: '#121315'
        }
      },
      backgroundImage: {
        'hero-image': "url('/images/bg-portfolio-hero.webp')"
      },
      fontFamily: {
        mono: ['var(--font-plex-mono)', 'monospace']
      },
      boxShadow: {
        button: '0px 0px 68px 7px rgba(0,85,255,0.4)',
        image: '0px 0px 68px 7px rgba(0,85,255,0.4)',
        knowteckscard: '0px 0px 15px 0px rgba(0,85,255,0.4)'
      }
    }
  },
  plugins: []
}
