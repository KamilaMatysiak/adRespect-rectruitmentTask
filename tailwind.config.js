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
    }
    
  },
  plugins: [],
}

