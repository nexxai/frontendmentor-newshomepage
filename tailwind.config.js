/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,htm,vue}", "node_modules/preline/dist/*.js"],
  theme: {
    extend: {
      fontFamily: {
        main: "Inter",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("preline/plugin")],
};
