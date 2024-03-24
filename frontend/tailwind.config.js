/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage:{
      'section3' : "url('/src/Assests/1341419.png')",
      'gradient-black' : "linear-gradient( to top,black, transparent)"
    }
  },
  plugins: [],
}