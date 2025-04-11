const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './content/**/*.{mdx,md}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: '#7c3aed', // violet-600
        },
        gray: {
          ...require('tailwindcss/colors').zinc,
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}