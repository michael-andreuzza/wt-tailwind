const colors = require('tailwindcss/colors')
const defaultColors = require(`tailwindcss/defaultTheme`).colors;
const allColors = require(`tailwindcss/colors`);

const extendedColors = defaultColors;

module.exports = {

 // purge: {
    //enabled: true,
    //content: [
      //'./dist/**/*.html',
    //],
  //},
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
        bright: '#ebebff 0px 25px 50px -12px ',
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
      blueGray: colors.blueGray,
      red: colors.red,
      orange:colors.orange,
      yellow: colors.amber,
      lime:colors.lime,
      green: colors.green,
      emerald: colors.emerald,
      teal:colors.teal,
      cyan: colors.cyan,
      lightBlue:colors.lightBlue,
      blue: colors.blue,
      indigo: colors.indigo,
      violet:colors.violet,
      purple: colors.purple,
      pink: colors.pink,
      fuchsia:colors.fuchsia,
      rose:colors.rose,
        blue: {
        1000: '#001141',
        1100: '#000018',
        1200: '#030C34',
        1300: '#01020a',
        1400:' #01071B',
        },
        gray: {
        1000: '#111213',

        },
        yellow: {
        1000: '#F4F1D0',

        },
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [

  ],
}
