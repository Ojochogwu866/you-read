/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.vue", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      sx: { max: "767px" },
      mx: { max: "868px" },
      lx: { max: "1023px" },
      gx: { max: "1535px" },
      "2xl": { max: "1535px" },
    },
    fontFamily: {
      display: ["Gilroy", "sans-serif"],
      body: ["Graphik", "sans-serif"],
    },
    extend: {
      gridTemplateColumns: {
        'columns': 'repeat(auto-fill, minmax(175px, 1fr))',
        'sx-column': 'repeat(auto-fill, minmax(150px, 1fr))'
      },
      boxShadow: {
        nav: "4px 0 10px -3px #010101",
        rc: " rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;",
      },
      animation : {
        imageFadeIn : 'imageFadeIn 0.5s ease-in forwards',
        mouseOver : 'mouseOver 0.3s ease-in forwards',
        mouseOut : 'mouseOut 0.3s ease-in'
      },
      keyframes:{
        imageFadeIn : {
          '0%': { opacity: '0'},
          '50%' : {opacity: '0.1'},
          '100%' : {opacity: '1'}
        },
        mouseOver : {
          '0%': {top: '0'},
          '100%': { top: '-5px'}
        },
        mouseOut: {
        '0%' : {top: '-5px'},
        '100%' : {top: '0'}
      }
  },
      colors: {
        home: "#EFFAFD",
        profile: "#f8fafb",
        bgc: "rgb(0, 2, 18)",
        parentText: "#060640",
        boxColor: "#A0006D",
        boxbg: "#E5E5E5",
        girgb: "linear gradient(328deg, rgba(160, 0, 109, 0.521) 0%, rgba(255, 255, 255, 0.493) 50%, rgba(252, 176, 69, 0.493) 100%)",
        user: "radial gradient(circle, rgba(248,250,251,1) 0%, rgba(160,0,109,1) 900%);"
      },
      backgroundImage: (theme) => ({
       "patternBg":"url('@/assets/Images/Rectangle.svg')",
      }),
    },
  },
};
