const colors = require('tailwindcss/colors');

module.exports = {
  purge: {
    enabled: true,
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
