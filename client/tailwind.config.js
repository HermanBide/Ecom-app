/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        roboto: "'Roboto', sans-serif"
      },
      colors: {
        'primary': '#2a9d8f',
        'secondary': '#264653',
        'rating': '#e9c46a',
        'background': '#edede9',
        'extra': '#e76f51',
        'secondaryDark': '#162830'
      }
    },
  },
  plugins: [],
}

