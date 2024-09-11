/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    fontFamily: {
      manrope: '"Manrope", sans-serif',
    },
    extend: {
      colors: {
        gray_font: "#777",
        font_black: "#1C1C1C",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(270deg, #F00 0%, #FF8938 100%)",
        "tea-gradient": "linear-gradient(180deg, #F4F4F4 0%, rgba(244, 244, 244, 0.00) 100%)",
      },
    },
  },
  plugins: [require("daisyui")],
};
