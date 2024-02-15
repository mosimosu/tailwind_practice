/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: "#264e70",
          secondary: "#679186",
          "secondary-light": "#bbd4ce",
          pink: "#f9b4ab",
          beige: "#fdebd3",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
