/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // Adição de cores no Tailwind:
      colors: {
        'red-lg': '#ff8d8d',
        'yellow-lg': '#f7fc0e',
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