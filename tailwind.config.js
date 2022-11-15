/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "index.html"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1180px',
    },
    extend: {
      colors: {
        softOrange: 'hsl(35, 77%, 62%)',
        softRed: 'hsl(5, 85%, 63%)',
        offWhite: 'hsl(36, 100%, 99%)',
        grayishBlue: 'hsl(233, 8%, 79%)',
        darkGrayishBlue: 'hsl(236, 13%, 42%)',
        veryDarkBlue: 'hsl(240, 100%, 5%)'
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
