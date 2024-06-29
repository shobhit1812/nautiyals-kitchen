/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Cedarville Cursive", "cursive"],
        card: ["Rubik Marker Hatch", "cursive"],
        navItem: ["sans-serif"],
        search: ["Grechen Fuemen", "cursive"],
        unique: ["Nabla", "system-ui"],
        help: ["Poppins", "sans-serif"],
        menu: ["Rosarivo", "cursive"],
      },
    },
    keyframes: {
      shimmer: {
        "0%": { left: "-150%" },
        "50%": { left: "150%" },
        "100%": { left: "-150%" },
      },
    },
    animation: {
      shimmer: "shimmer 2s infinite",
    },
  },
  plugins: [],
};
