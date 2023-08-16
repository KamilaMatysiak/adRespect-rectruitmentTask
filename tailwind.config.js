/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      white: "var(--white)",
      beige: "var(--beige)",
      black: "var(--black)",
      green: "var(--green)",
      grey: "var(--grey)",
    },
    fontFamily: {
      sans: "var(--inter)",
      heading: "var(--montserrat)",
    }
    
  },
  plugins: [],
}

