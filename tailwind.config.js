/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "very-dark-blue-arch": "#1B1D23",
        "dark-gray-arch": "#60636D",
        "medium-gray-arch": "#7D828F",
        "light-gray-arch": "#C8CCD8",
        "very-light-gray-arch": "#EEEFF4",
        "error-arch": "#DF5656"
      },
      fontFamily: {
        sans : "'League Spartan', sans-serif"
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

