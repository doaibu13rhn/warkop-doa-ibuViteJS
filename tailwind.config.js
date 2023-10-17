/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        plusJakartaSans: ["Plus Jakarta Sans"],
        rubik: ["Rubik"],
        awesome: ['"Font Awesome 6 Free"'],
      },
      colors: {
        primary: "#FF8906",
        secondary: "#4F5665",
        dark: "#0B132A",
        light: "#FFF",
        brown: "#8E6447",
      },
      gridTemplateColumns: {
        product: "repeat(2, 0.5fr)",
      },
    },
  },
  plugins: [],
};