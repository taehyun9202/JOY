module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#FFF9DE",
      text: "#333333",
    },
    extend: {
      fontFamily: {
        bodoni: ["Bodoni Moda"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
