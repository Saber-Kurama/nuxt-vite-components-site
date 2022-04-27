import { defineNuxtConfig } from "nuxt";
import vuePlugin from "@vitejs/plugin-vue";
import path from "path";
// import vueJsxPlugin from "@vitejs/plugin-vue-jsx";
// import { mdPlugin } from "./vite-plugins/mdPlugin";
// import Markdown from "vite-plugin-md";
// import Markdown from './vite-plugins/vite-plugin-md/src/index';
import vueDocs from './vite-plugins/vite-plugin-arco-vue-docs/src/index';
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: [
    '@arco-design/web-vue/es/style/index.less'
  ],
  alias: {
    // 解决 esm 的问题
    'compute-scroll-into-view': path.join(__dirname, './node_modules/compute-scroll-into-view/dist/index.js'),
  }, 
  extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx", ".vue", ".md"],
  // ssr: false,
  vite: {
    plugins: [
      // vueDocs(),
      vuePlugin({ include: [/\.md$/] }),
      // vueJsxPlugin({ enableObjectSlots: false }),
      // mdPlugin(),
      // Markdown(),
      vueDocs(), 
    ],
  },
});
