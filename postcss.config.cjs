module.exports = {
  plugins: {
    tailwindcss: {
      content: ['./src/**/*.{html,js,svelte,ts}'],
      plugins: [
        require('@catppuccin/tailwindcss')({
          prefix: "ctp",
        }),
      ],},
    autoprefixer: {},
  },
}
