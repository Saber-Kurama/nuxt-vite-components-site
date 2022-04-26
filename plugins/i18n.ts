import { defineNuxtPlugin } from "#app";
import { createI18n } from "vue-i18n";
import locale from "@/locale";
// import ArcoVue from '@arco-design/web-vue';
// import ArcoVueIcon from '@arco-design/web-vue/es/icon';;

export default defineNuxtPlugin((nuxtApp) => {
  const i18n = createI18n({
    legacy: false,
    locale: "zh-CN",
    fallbackLocale: "zh-CN",
    messages: locale,
  });
  nuxtApp.vueApp.use(i18n);
});
