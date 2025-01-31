/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        h1: "3.815rem",
        h2: "3.052rem",
        h3: "2.441rem",
        h4: "1.953rem",
        h5: "1.563rem",
        h6: "1.25rem",
        p: "1rem",
        sm: "0.8rem",
        vsm: "0.64rem",
      },
      colors: {
        customGreen: "#009889",
        customCream: "#ebf1df",
        
      },
      fontFamily: {
        philosopher: ["Philosopher", "serif"],
        gillSans: ["GillSans", "serif"],
        centaur: ["Centaur", "serif"],
        timesnewroman: ["TimesNewRoman", "serif"],
      },
      height: {
        '0.2': '0.05rem',
      }
    },
  },
  plugins: [],
}

