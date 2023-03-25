const colors = require('tailwindcss/colors')

module.exports = {
  content:[
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx,scss}',
    './src/styles/**/*.{scss}',
  ],
  media: false, // or 'media' or 'class'
  theme: {
    screens: {
      xx_sm: '375px',
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
      
      // Primary Colors
      primary: "#011055",
      
      // Secondary Colors
      secondary: "#0A30AD",
      
      black: "#141414",
      dark_grey: "#222327",
      light_grey: "#9AA3AE",
      medium: "#DEDEDE",
      white: "#FAFAFC",
      
      // Semantic Colors
      error:{
        light: "#D83232",
        base: "#B01212",
        dark: "#8C0000",
      },
      warning:{
        light: "#FFDE81",
        base: "#EFB008",
        dark: "#976400",
      },
      info:{
        light: "#4D82F3",
        base: "#2563EB",
        dark: "#0037B3",
      },
      success:{
        light: "#419E6A",
        base: "#00632B",
        dark: "#00401C",
      },
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      
      
      // Neutral Colors
      neutral:{
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
        '2.6rem', { lineHeight: '3.6rem' } //Cambiar cuando vea algún texto con 26px
      ],
      '4xl': [
        '3.2rem', { lineHeight: '4rem' }
      ],
      '5xl': [
        '4.2rem', { lineHeight: '5.8rem' }
      ],
    },
    fontFamily: {
      poppins: ['Inter', 'sans-serif']
    },
    fontWeight: {
      light: '300',
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      superbold: '800',
    },
    fill: (theme) => theme('colors'),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

