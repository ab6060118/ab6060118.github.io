const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    content: [
      './src/**/*.tsx',
    ],
  },
  theme: {
    extend: {
      colors: {
        lime: colors.lime,
      },
    },
  },
  variants: {},
  plugins: [],
};
