module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white" : {
          "900" : "#fafafa",
        }
      },
      width : {
        "1/2" : "64rem",
      }
    },
  },
  plugins: [],
}
