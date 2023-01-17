const { twinDigitPreset } = require("@dangojs/tailwind-preset-digitforce");
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  // presets: [require('./my-preset.js')],
  presets: [twinDigitPreset()],
  theme: {
    extend: {},
  },
  plugins: [],
};
