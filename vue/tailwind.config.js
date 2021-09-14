module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      black: {
        DEFAULT: '#111318',
        100: '#111318',
        80: '#1E2328',
      },
      white: {
        DEFAULT: '#DDDDDD',
      },
      gold: {
        DEFAULT: '#C28F2C',
        100: '#C28F2C',
        80: '#c8aa6e',
        60: '#C4B998',
      },
      brown: {
        DEFAULT: '#342B20',
        100: '#342B20',
        80: '#77592C',
      },
      blue: {
        DEFAULT: '#005A82',
        100: '#005A82',
        80: '#0596AA',
        60: '#0BC4E2',
      },
    },
  },
  variants: {},
  plugins: [],
};
