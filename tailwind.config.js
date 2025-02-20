/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        msm: '20rem',       // Mobile Small (320px)
        mmd: '23.4375rem',  // Mobile Medium (375px)
        mlg: '26.5625rem',  // Mobile Large (425px)
        small:'40em',       //(640px)
        medium:'48rem',     //(768px)
        large:'64rem',      //(1024px)
        elarge:'80rem',     //(1280px)
        xxlarge:'96rem',    //(1536px)
        '3xl': '120rem',    // 1920px (Full HD)
        '4xl': '160rem',    // 2560px (2K)
        '5xl': '240rem',    // 3840px (4K)
      },
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

        // Bigger Sizes for 2xl, 3xl, 4xl, 5xl Screens
      //  "h1-2xl": "4.5rem",
      //   "h1-3xl": "5rem",
      //   "h1-4xl": "5.5rem",
      //   "h1-5xl": "6rem",

      //   "h2-2xl": "4rem",
      //   "h2-3xl": "4.8rem",
      //   "h2-4xl": "5.5rem",
      //   "h2-5xl": "6.2rem",

      //   "h3-2xl": "3.5rem",
      //   "h3-3xl": "4.2rem",
      //   "h3-4xl": "5rem",
      //   "h3-5xl": "5.8rem",

      //   "h4-2xl": "3rem",
      //   "h4-3xl": "3.5rem",
      //   "h4-4xl": "4rem",
      //   "h4-5xl": "4.5rem",

      //   "h5-2xl": "2.5rem",
      //   "h5-3xl": "2.8rem",
      //   "h5-4xl": "3.2rem",
      //   "h5-5xl": "3.5rem",

      //   "h6-2xl": "1.8rem",
      //   "h6-3xl": "2rem",
      //   "h6-4xl": "2.3rem",
      //   "h6-5xl": "2.6rem",

      //   "p-2xl": "1.4rem",
      //   "p-3xl": "1.6rem",
      //   "p-4xl": "1.8rem",
      //   "p-5xl": "2rem",

      //   "sm-2xl": "1.1rem",
      //   "sm-3xl": "1.2rem",
      //   "sm-4xl": "1.3rem",
      //   "sm-5xl": "1.4rem",

      //   "vsm-2xl": "0.8rem",
      //   "vsm-3xl": "0.85rem",
      //   "vsm-4xl": "0.9rem",
      //   "vsm-5xl": "1rem",
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
