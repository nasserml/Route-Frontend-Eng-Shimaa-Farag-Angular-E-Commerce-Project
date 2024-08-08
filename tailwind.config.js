/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" 
  ],
  theme: {
    container:{
      center: true,
      padding: '10px',
    },
    extend: {
      colors:{
        "main-color-0aad0a": "#0aad0a",
        "light-color-f0f3f2": "#f0f3f2",
        "rating-color-ffc908": "#ffc908",
      }
    },
  },
  plugins: [
    require('flowbite/plugin') // add this line

  ],
  darkMode: 'class'
}

