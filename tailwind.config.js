const colors = require('tailwindcss/colors')

module.exports = {
  // important: true,
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif']
    },
    screens: {
      x_sm: '480px',
      sm: '576px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      neutral:{
        white: "#FFFFFF",
        10: "#f6f8fc",
        20: "#f1f4f9",
        30: "#e2e8f0",
        40: "#cbd4e1",
        50: "#94a3b8",
        60: "#64748b",
        70: "#475569",
        80: "#27364b",
        90: "#1e2a3b",
        100: "#0f1a2a",
      },
      primary: {
        light: "#0A30AD",
        dark: "#011055",
      },
      secondary: {
        20: "#FFFFFF",
        40: "#DEDEDE",
        60: "#282629",
        80: "#000000",
      },
      success:{
        40: "#419E6A",
        60: "#00632B",
        80: "#00401C",
      },
      info:{
        40: "#4D82F3",
        60: "#2563EB",
        80: "#0037B3",
      },
      warning:{
        40: "#EFB008",
        60: "#976400",
        80: "#724B00",
      },
      error:{
        40: "#D83232",
        60: "#B01212",
        80: "#8C0000",
      },
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      // red: colors.red,
      // green: colors.emerald,
      // blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
    },
    fontSize: {
      xs: [
        '1.2rem', { lineHeight: '1.8rem' }
      ],
      sm: [
        '1.4rem', { lineHeight: '2.2rem' }
      ],
      base: [
        '1.6rem', { lineHeight: '2.4rem' }
      ],
      lg: [
        '1.8rem', { lineHeight: '2.8rem' }
      ],
      xl: [
        '2rem', { lineHeight: '3rem' }
      ],
      '2xl': [
        '2.4rem', { lineHeight: '3.6rem' }
      ],
      '3xl': [
        '3.2rem', { lineHeight: '4rem' }
      ],
      '4xl': [
        '4.2rem', { lineHeight: '5.8rem' }
      ],
    },
    fill: (theme) => theme('colors'),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

