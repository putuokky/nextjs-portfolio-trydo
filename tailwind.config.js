/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tema': '#010101',
        'primary': '#f9004d',
      },
      backgroundImage: {
        'hero-pattern': "url('/img/bg.jpg')",
      }
    },
  },
  plugins: [],
}
