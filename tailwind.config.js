/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      white: "var(--white)",
      beige: "var(--beige)",
      grey: "var(--grey)",
      black: "var(--black)",
      green: "var(--green)",
    },
    fontFamily: {
      sans: "var(--inter)",
      heading: "var(--montserrat)",
    },
    screens: {
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
    }
  },
  plugins: [],
}

