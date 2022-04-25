import { defineNuxtConfig } from "nuxt";
import vuePlugin from "@vitejs/plugin-vue";
// import vueJsxPlugin from "@vitejs/plugin-vue-jsx";
// import { mdPlugin } from "./vite-plugins/mdPlugin";
import Markdown from "vite-plugin-md";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx", ".vue", ".md"],
  vite: {
    plugins: [
      vuePlugin({ include: [/\.md$/] }),
      // vueJsxPlugin({ enableObjectSlots: false }),
      // mdPlugin(),
      Markdown(),
    ],
  },
});
