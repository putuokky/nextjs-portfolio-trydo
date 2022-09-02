/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'tema': '#010101',
        'tema-second': '#191919',
        'primary': '#f9004d',
        'secondary': '#ef0963',
        'more': '#c6c9d8bf',
      },
      backgroundImage: {
        'hero': "url('/img/bg.jpg')",
      }
    },
  },
  plugins: [],
}
