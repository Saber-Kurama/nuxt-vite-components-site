import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content"],
  // 会有一些警告  WARN  Two component files resolving to the same name AUpload:
  // components: {
  //   dirs: [
  //     "~/components",
  //     {
  //       prefix: "a",
  //       extensions: ["vue", "ts", "js"],
  //       path: "~/node_modules/@arco-design/web-vue/es",
  //     },
  //   ],
  // },
  content: {
    // https://content.nuxtjs.org/api/configuration
  },
  vite: {
    plugins: [
      AutoImport({
        resolvers: [ArcoResolver()],
      }),
      Components({
        resolvers: [
          ArcoResolver({
            sideEffect: true,
          }),
        ],
      }),
    ],
    optimizeDeps: {
      exclude: ["fsevents"],
    },
  },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
