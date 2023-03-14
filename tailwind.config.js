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
      },
      colors: {
        home: "#EFFAFD",
        profile: "#f8fafb",
        parentText: "#060640",
        boxColor: "#A0006D",
        boxbg: "#E5E5E5",
      },
    },
  },
};
