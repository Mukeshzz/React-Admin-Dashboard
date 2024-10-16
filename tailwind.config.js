module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        dmsans: ["DM Sans", "sans-serif"],
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      xxl: '1400px'
    },
  },
  plugins: [],
}

