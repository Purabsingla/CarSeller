/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

    },
  },
  plugins: [],
}
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Merriweather: ["Merriweather", "sans-serif"],
    },
    extend: {
      animation: {
        ["infinite-slider"]: "infiniteSlider 20s linear infinite",
      }, keyframes: {
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": {
            transform: "translateX(calc(-250px * 5))",
          },
        },
      },
    },
    colors: {
      'some': '#ebebeb'
    },
  },
  plugins: [],
});