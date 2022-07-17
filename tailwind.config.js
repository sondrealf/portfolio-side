module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        basic: ['Roboto', 'Arial', 'sans-serif'],
      },
      keyframes: {
        nav: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
      },
      animation: {
        navOpen: 'nav 0.8s linear',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
