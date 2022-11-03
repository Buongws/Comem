module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
      gridTemplateColumns: {
        footer: "300px minmax(900px, 1fr) 100px",
      },
    },
  },
  plugins: [],
};
