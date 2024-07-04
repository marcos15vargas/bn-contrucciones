/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors:{
        "azul" : "#023355",
        "fondo" : "#f9fbf5",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

