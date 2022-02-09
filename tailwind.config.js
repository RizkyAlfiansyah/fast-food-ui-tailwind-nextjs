module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
          "100": "#003049",
          "110" : "#FFCFB6",
        }
      },
      width : {
        "1/2" : "64rem",
      }
    },
  },
  plugins: [],
}
