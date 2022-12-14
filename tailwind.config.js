/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.js'],
  theme: {
    extend: {
      maxWidth: {
        container: '1604px',
      },
      fontFamily: {
        'dmSans': ['DM Sans', 'sans-serif']
      },
      colors: {
        'regular': '#767676',
      },
      colors: {
        'primary': '#262626',
      },
    },
  },
  plugins: [],
}
