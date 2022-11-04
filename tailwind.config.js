/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      "xl": {'max': "1240px"},
      "lg": {'max': "991px"},
      "md": {'max': "767px"},
      "sm": {'max': "480px"},
    },
    container: {
      center: true,
      padding: "32px",
    },
    extend: {},
  },
  plugins: [],
};
