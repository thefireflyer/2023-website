/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['Open Sans', 'Inclusive Sans', 'Graphik', 'sans-serif'],
      serif: ['Cormorant Garamond', 'Merriweather', 'serif'],
    },
    extend: {
      fontFamily: {
        inclusive: ['Inclusive Sans', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [
    require('@catppuccin/tailwindcss')({
      prefix: "ctp",
    }),
  ],
}