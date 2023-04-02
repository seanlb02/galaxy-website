/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
theme: {
  screens: {
    'xxs': '250px',
    'xs': '350px',
    'sm': '50px',
    'md': '700px',
    'lg': '850px',
    'xlg': '1100px',
  },
  extend: {
    screens: {
      'xs': '350px',
      'sm': '640px',
      'md': '750px',
      'lg': '850px',
      'xlg': '1100px',
    },
    backgroundImage: {
      // 'storage': "url('../public/storage.png')",
    },
    fontFamily: {
      'gudea': ['Gudea', 'sans-serif']
    },
 
  }}}
