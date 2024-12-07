/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      
       
      screens: {
        'bpoint1': '1330px', 
        'bpoint2': '1130px',// Custom breakpoint for 1000px
        'bpoint3': '964px',
        'bpoint4': '887px',
      },
      fontFamily: {
        julius: ["Julius Sans One", "sans-serif"],
        poppins: ['"Poppins"', "sans-serif"],
        caslon: ['"Caslon Antique"', "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
