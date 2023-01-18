module.exports = {
  // variants: {
  //     borderWidth: ["responsive", "last", "hover", "focus", "group-hover"],
  // },
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    borderWidth: ["responsive", "last", "hover", "focus"],
    backgroundColor: ["responsive", "odd", "even", "hover", "focus"],
    backgroundOpacity: ["responsive", "odd", "even", "hover", "focus"],
    padding: ["responsive"],
    textAlign: ["responsive", "first", "last"],
    divideColor: ["responsive", "hover", "focus"],
  },
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      display: ["Gilroy", "sans-serif"],
      body: ["Graphik", "sans-serif"],
    },

    extend: {
      boxShadow: {
        typeBox:
          "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;",
        form: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
        reader:
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;",
      },
      colors: {
        home: "#EFFAFD",
        parentText: "#060640",
        boxColor: "#A0006D",
      },
      spacing: {
        7: "1.6rem",
        13: "3.5rem",
        18: "4.2rem",
        90: "20rem",
        96: "24rem",
        98: "28rem",
        100: "30rem",
        128: "32rem",
      },
    },
  },
};
