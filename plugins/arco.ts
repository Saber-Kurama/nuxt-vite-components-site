import { defineNuxtPlugin } from '#app'
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import Preview from '~~/components/preview/Preview.vue';
import ArcoArticle from '#components/article/index.vue';
import AnchorHead from '#components/anchor-head/index.vue';
import CodeBlock from '#components/code-block/index.vue';
import CellDemo from '#components/cell-demo/index.vue';
import CellCode from '#components/cell-code/index.vue';

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(ArcoVue);
  nuxtApp.vueApp.use(ArcoVueIcon);
  nuxtApp.vueApp.use(Preview);
//   nuxtApp.vueApp.component(CodeBlock.name, CodeBlock);
//   nuxtApp.vueApp.component(CellDemo.name, CellDemo);
//   nuxtApp.vueApp.component(CellCode.name, CellCode);
//   nuxtApp.vueApp.component(AnchorHead.name, AnchorHead);
//   nuxtApp.vueApp.component(ArcoArticle.name, ArcoArticle);
})
