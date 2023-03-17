module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
      gridTemplateColumns: {
        footer: "200px minmax(900px, 1fr) 100px",
      },
      screens: {
        md: "990px",
        lg: "1190px",
      },
    },
  },
  plugins: [],
};
