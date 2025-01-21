/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
  variants: {
    extend: {
      backgroundColor: ['data-state-on'],
      textColor: ['data-state-on'],
    },
  },
};