/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ["./src/**/*.{html,js}", './src/index.html',],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#405D72",
          100: "#758694",

        },
        neutral: {
          1: "#F2F2F2",
          2: "#FFFFFF"
        }
      },
      screens: {
        'phone': { 'max': '448px' },
      },
    },
  },
  plugins: [plugin(function ({ addVariant }) {
    addVariant('affore', ['&:after', '&:before'])
  })],
}


