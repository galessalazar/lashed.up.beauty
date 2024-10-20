/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/index.html", "./client/src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        merienda: ["Merienda", "cursive"],
      },
    },
  },
  plugins: [],
};
//  content: ["./client/index.html", "./client/src/**/*.{js,ts,jsx,tsx}"],