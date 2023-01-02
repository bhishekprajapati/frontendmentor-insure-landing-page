/** @type {import('tailwindcss').Config} */
const toEms = number => `${number/16}em`;

module.exports = {
  content: ["index.html"],
  theme: {
    screens: {
      "sm": toEms(375),
      "md": toEms(768),
      "lg": toEms(1024),
      "xl": toEms(144),
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'violet-dark': 'hsl(256, 26%, 20%)',
      'violet-darker': 'hsl(270, 9%, 17%)',
      'grayish-violet-dark': 'hsl(273, 4%, 51%)',
      'grayish-blue': 'hsl(216, 30%, 68%)',
      'gray-lighter': 'hsl(0, 0%, 98%)',
      light: '#fff',
      dark: '#000',
    },
    fontFamily: {
      sans: ['Karla', 'sans-serif'],
      serif: ['DM Serif Display', 'serif']
    },
    extend: {},
  },
  plugins: [],
}