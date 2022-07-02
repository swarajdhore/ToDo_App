const colors = require("tailwindcss/colors");

module.exports = {
  // purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "profile-baground": "url('https://source.unsplash.com/1L71sPT5XKc')",
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: {
          DEFAULT: "#ffffff",
        },
        blue: {
          faint: "#69c9e9",
          dark: "rgba(0, 136, 169, 0.3)",
        },
        green: {
          light: "#6fcf97",
          dark: "#27AE60",
          DEFAULT: "#219653",
          darker: "#1e874b",
        },
        red: {
          light: "#FFEAEA",
          DEFAULT: "#EB5757",
          dark: "#C20D0D",
        },
        orange: {
          light: "#FFEBDA",
          DEFAULT: "#F66A0A",
          dark: "#A04100",
        },
        primary: {
          DEFAULT: "#24292E",
        },
        warning: {
          DEFAULT: "#D1711C",
        },
      },
      boxShadow: {
        default: "0px 10px 20px rgba(150, 150, 187, 0.1)",
      },
      fontSize: {
        "2rem": "2rem",
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
