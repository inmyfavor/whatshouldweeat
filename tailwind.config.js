/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#0085ca',
        'gray': '#e3e3e3'
      }
    },
  },
  plugins: [],
}
