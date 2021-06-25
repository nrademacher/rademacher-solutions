const openColor = require('open-color');
const daisyui = require('daisyui');
const aspectRatio = require('@tailwindcss/aspect-ratio');
const bootstrapGrid = require('tailwind-bootstrap-grid');
const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: openColor,
    fontFamily: {
      sans: "'IBM Plex Sans', sans-serif",
      heading: "'PT Sans', sans-serif",
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      // xxl: '1400px',
    },
    extend: {
      animation: {
        'spin-slow': 'spin 2.5s linear infinite',
      },
      boxShadow: {
        card: 'rgba(0, 0, 0, 0.08) 0px 10px 24px 0px',
        business: `${openColor.blue[6]} 0px 10px 24px 0px`,
        personal: `${openColor.grape[6]} 0px 10px 24px 0px`,
        wildcard: `${openColor.yellow[6]} 0px 10px 24px 0px`,
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    daisyui,
    aspectRatio,
    bootstrapGrid({
      gridGutterWidth: '2rem',
      gridGutters: {
        0: 0,
        1: '0.25rem',
        2: '0.5rem',
        3: '1rem',
        4: '1.5rem',
        5: '2rem',
        6: '4rem',
        7: '6rem',
        8: '8rem',
      },
      containerMaxWidths: {
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
        // xxl: '1320px',
      },
      /* containerMaxWidths: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      }, */
    }),
    plugin(function ({ addUtilities }) {
      addUtilities(
        {
          '.text-shadow-sm': {
            'text-shadow': 'rgba(0, 0, 0, 0.1) 0 0 2px',
          },
          '.text-shadow-md': {
            'text-shadow': 'rgba(0, 0, 0, 0.1) 0 0 4px',
          },
          '.text-shadow-lg': {
            'text-shadow': 'rgba(0, 0, 0, 0.1) 0 0 6px',
          },
          '.optimize-legibility': {
            'text-rendering': 'optimizeLegibility',
          },
        },
        ['responsive', 'hover']
      );
    }),
  ],
};
