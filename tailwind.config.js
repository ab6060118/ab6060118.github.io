const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/**/*.tsx',
  ],
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
