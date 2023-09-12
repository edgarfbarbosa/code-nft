/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // Adição de cores no Tailwind:
      colors: {
        'pink-lg': '#ff8d8d',
        'yellow-lg': '#f7fc0e',
        'bg-dark': '#030303',
        'pink-md': '#e025ce',
        'green-md': '#4aed52',
        'pink-strong': '#bd24e6',
      },
      // Configurando fontes no Tailwind:
      fontFamily: {
      'jura': ['Jura', 'sans-serif'],
      'inter': ['Inter', 'sans-serif'],
    },
    },
  },
  plugins: [],
}