/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      colors: {
        primaryGreen: "#00C494",
        secondaryGreen: "#114232",
        primaryWhite: "#FFF",
        secondaryWhite: "#ECECEC",
        primaryGray: "#3b3F43",
        secondaryGray: "#9AA1AB",
        thirdGray:"#CDCDCD",
        fourthGray:"#B0A597",
        redColor: "#FF0202",
        java: "#af7219",
        asap: "#9300ff",
        c: "#555555",
        cpp: "#f34b7e",
        cs: "#969ad6",
      },
    },
  },
  plugins: [],
};
