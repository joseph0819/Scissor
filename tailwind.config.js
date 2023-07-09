/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
      mammoth: '2rem'
      },
      colors: {
        primary: '#FF6363',
        customBlue: '#0065FE',
        secondary:{
          100: '#E2E2D5',
          200: '#888883'
        }
      },
      fontFamily: {
        nunito: ['Nunito']
      }
    },
  },
  plugins: [],
}

