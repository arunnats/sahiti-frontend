module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        ipadAir: { raw: "(min-width: 800px) and (max-width: 980px)" },
        smallHeight: { raw: "(max-height: 700px)" },
        medHeight: { raw: "(min-height: 701px) and (max-height: 750px)" },
        tallHeight: { raw: "(min-height: 751px)" },
        ...require("tailwindcss/defaultTheme").screens,
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
