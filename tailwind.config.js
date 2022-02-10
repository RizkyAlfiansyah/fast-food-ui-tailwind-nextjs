module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: ['active'],
      fontFamily: {
        'sans': ['Inter var', 'sans-serif'],
        'serif': ['Inter var', 'serif'],
        'mono': ['Inter var', 'monospace'],
        'sf': ['Inter var', 'SF Pro Text', 'sans-serif'],
      },
      colors: {
        "white" : {
          "100": "#fff",
          "900" : "#fafafa",
        },
        "black" : {
          "1" : "#000",
          "100": "#003049",
          "110" : "#FFCFB6",
        }
      },
      width : {
        "1/13" : "64rem",
        "2/13" : "31.813rem",
      },
      height : {
        "1/13" : "46.5rem",
      }
    },
  },
  plugins: [],
}
