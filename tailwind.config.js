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
      boxShadow: {
        nav: "4px 0 10px -3px #010101",
        rc: " rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;",
      },
      colors: {
        home: "#EFFAFD",
        profile: "#f8fafb",
        bgc: "rgb(0, 2, 18)",
        parentText: "#060640",
        boxColor: "#A0006D",
        boxbg: "#E5E5E5",
      },
    },
  },
};
