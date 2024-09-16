/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "Poppins":["Poppins","sans-serif"],
        "Open Sans":["Open Sans","sans-serif"]
      },
      colors:{
        "light-cyan":"hsl(193, 100%, 96%)",
        "pink":"hsl(322, 100%, 66%)",
        "grayish-blue":" hsl(208, 11%, 55%)",
        "Dark-cyan":"hsl(192, 100%, 9%)"
      },
      boxShadow:{
        "black-shadow":"0px 0px 6px 3px #00000024;",
      },
      screens:{
        "media1032":"1032px",
        "media768":"768px",
        "media319":"319px",
        "media375":"375px",
        "media416":"416px",
      },
      gridRow:{
        "row":"1",
      }
    },
  },
  plugins: [],
}

