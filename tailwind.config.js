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
      backgroundImage:{
        slide1: "url('assets/images/slide1.jpg')",
        slide2: "url('assets/images/slide2.jpg')",
        slide3: "url('assets/images/slide3.jpg')",
        thumbnail1: "url('assets/images/thumbnail1.jpg')",
        thumbnail2: "url('assets/images/thumbnail2.jpg')",
        thumbnail3: "url('assets/images/thumbnail3.jpg')",
        thumbnail4: "url('assets/images/thumbnail4.jpg')",
        thumbnail5: "url('assets/images/thumbnail5.jpg')",
        thumbnail6: "url('assets/images/thumbnail6.jpg')",
        thumbnail7: "url('assets/images/thumbnail7.jpg')",
        thumbnail8: "url('assets/images/thumbnail8.jpg')",
        thumbnail9: "url('assets/images/thumbnail9.jpg')",
        thumbnail10: "url('assets/images/thumbnail10.jpg')",
        thumbnail11: "url('assets/images/thumbnail11.jpg')",
      },
      height: {
        '0.2': '0.05rem',
      }
    },
  },
  plugins: [],
}
