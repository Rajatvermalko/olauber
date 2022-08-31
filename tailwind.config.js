/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      xs: "320px",
      md: "640px",
      lg: "1024px",
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      xl2: "1536px",
    },
    extend: {
      colors: {
        pribtn: "#4e98a0",
        pritext: "#275052",
        headbg: "#D6E4E6",
        bgcol: "#f7f7f5",
        tabhead: "#C0D7D6 ",
        nthmsg2: "#ECF5F6",
        msg1: "#FEF2E4",
        txtmsg: "#F4F6F6",
        winhead: "#323638 ",
        secthead: "#e9f3f5",
        main: "#F5F5F5",
      },
      fontFamily: {
        rale: ["Raleway"],
        monte: ["Montserrat"],
      },
      spacing: {
        px: "1px",
        11: "2.49rem",
        13: "3.15rem",
        15: "3.58rem",
        17: "3.9rem",
        19: "4.18rem",
        21: "5.2rem",
        22: "5.6rem",
        37: "9.39rem",
        100: "25rem",
        102: "33rem",
      },
    },
  },
  plugins:[
    plugin(function({addBase,theme}){
      const heading={
        'h1':{fontSize:theme('fontSize.2xl')},
        'h2':{fontSize:theme('fontSize.xl')},
        'h3':{fontSize:theme('fontSize.lg')},
        'h4':{fontSize:theme('fontSize.base')},
      }
      addBase(heading)
    })
  ],
};
