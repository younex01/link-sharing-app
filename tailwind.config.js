/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily:{
        regular: ['Regular'],
        medium: ['Medium'],
        bold: ['Bold']
      },
      colors:{
        'blue': '#633CFF',
        purple:{
          100: '#EFEBFF',
          200: '#BEADFF'
        },
        gray:{
          100: '#FAFAFA',
          200: '#D9D9D9',
          300: '#737373'
        },
        'red' : '#FF3939'
      }
    },
  },
  plugins: [],
}

