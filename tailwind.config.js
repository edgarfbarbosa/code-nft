/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // Configurando fontes no Tailwind:
      fontFamily: {
      'jura': ['Jura', 'sans-serif']
    },
    },
  },
  plugins: [],
}