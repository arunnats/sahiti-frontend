/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        julius: ["Julius Sans One", "sans-serif"],
      }
    },
  },
  plugins: [],
}
