const colors = require('tailwindcss/colors')
const defaultColors = require(`tailwindcss/defaultTheme`).colors;
const allColors = require(`tailwindcss/colors`);

const extendedColors = defaultColors;

module.exports = {

    purge: {
    enabled: false,
    content: [
    './dist/**/*.html',
    ],
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      height: {
       threescreen: '75vh',
      halfscreen: '50vh',
      },
      boxShadow: {
        DEFAULT: '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        dark: 'rgba(0, 0, 0, 0.45) 0px 80px 100px -24px',
      },
       fontSize: {
        xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      '8xl': '6rem',
      '9xl': '7rem',
      '10xl': '8rem',
      '11xl': '9rem',
      '12xl': '10rem',
      '13xl': '11rem',
      '14xl': '12rem',
      '15xl': '13rem',
      '16xl': '14rem',
      '17xl': '15rem',
      '18xl': '16rem',
      '19xl': '17rem',
      '20xl': '18rem',
    },
      colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      coolGray:colors.coolGray,
      trueGray:colors.trueGray,
      blueGray: colors.blueGray,
      lightBlue:colors.lightBlue,
      blue: colors.blue,
        blue: {
        1000: '#001141',
        1100: '#000018',
        1200: '#030C34',
        1300: '#01020a',
        },
        gray: {
        1000: '#111213',
        1100: '#262626',

        },

      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),

  ],
}
