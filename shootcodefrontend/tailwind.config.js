/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
     "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      width:{
        quart: '80%',
      },
      blur:{
        small: '2px',
      },
      fontFamily: {
        poppins: ['Poppins'],
      },
      margin: {
        '1/10': '15%',
      },
      spacing: {
        '1/10': '10%',
        '1/4': '25%',
        '3/10': '30%',
        '1/2': '50%',
        '3/4': '75%',
      },
    },
  },
  plugins: [],
}

