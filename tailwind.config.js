/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        width_input: "40.625rem",
        height_input: "6.25rem",
      },
      fontSize: {
        mini: "13px",
        xs: "16px",
        sm: "20px",
        lg: "28px",
        xl: "32px",
      },
      colors: {
        light_gray: "#e9e9f0",
        gray: "#b0aebc",
        dark_gray: "#808495",
        main_gray: "#4d4f5c",
      },
    },
  },

  plugins: [],
};
