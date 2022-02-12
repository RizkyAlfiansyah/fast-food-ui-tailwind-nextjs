const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: ['active'],
      fontFamily: {
        'sans': ['SF Pro Display', 'Inter var', 'sans-serif'],
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
  plugins: [
    plugin(function({ addUtilities}) {
      const utitilies = {
        '.bg-search': {
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z' stroke='%23B8B8B8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M20.9999 21L16.6499 16.65' stroke='%23B8B8B8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");`,
          backgroundRepeat : 'no-repeat',
          backgroundPosition : '32px',
        }
      }
      addUtilities(utitilies)
    }),
  ],
}
