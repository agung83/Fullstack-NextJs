module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem'
      },
      colors: {
        blue: {
          500: '#2880CE'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
