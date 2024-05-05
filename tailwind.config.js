/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          md: '3.5rem',
          lg: '5rem',
          xl: '6rem',
          '2xl': '7rem',
        }
      },
    },
  },
  plugins: [],
}

