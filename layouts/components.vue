<script lang="ts">
import {
  defineComponent,
  provide,
  reactive,
  ref,
  watch,
  onMounted,
  onBeforeUnmount,
} from 'vue';
import { useRoute } from 'vue-router';
import { Button } from '@arco-design/web-vue';
import { PageDurationTracker, teaLog } from '@arco-design/arco-site-utils';
import { collapseInjectionKey } from '../context';
// import AsideNav from './components/aside-nav/index.vue';
import { getLocalStorage, setLocalStorage } from '../utils/local-storage';
// import ThemeBox from './components/theme-box/index.vue';

export default defineComponent({
  name: 'App',
  components: {
    AButton: Button,
    // AsideNav,
    // ThemeBox,
  },
  props: {
    theme: String,
    language: String,
  },
  emits: ['themeChange', 'languageChange'],
  setup() {
    const showNav = ref(true);
    const showAnchor = ref(true);
    const showGlobalNotice = ref(
      getLocalStorage('arco-global-notice') !== '3-vue'
    );

    const handleCloseGlobalNotice = () => {
      showGlobalNotice.value = false;
      setLocalStorage('arco-global-notice', '3-vue');
    };

    const toggleNav = () => {
      showNav.value = !showNav.value;
    };

    const toggleAnchor = () => {
      showAnchor.value = !showAnchor.value;
    };

    provide(
      collapseInjectionKey,
      reactive({
        showNav,
        showAnchor,
        toggleNav,
        toggleAnchor,
      })
    );

    // provide('toggleTheme', toggleTheme);
    // provide('lang', lang);
    // locale.value = lang.value;
    // provide('changeLanguage', changeLanguage);

    const route = useRoute();
    let tracker: PageDurationTracker;
    let originPath = route.path;

    onMounted(() => {
      tracker = new PageDurationTracker((params) => {
        teaLog('page_view', { ...params, url_path: originPath });
      });
    });

    onBeforeUnmount(() => {
      tracker = null;
    });

    watch(
      () => route.path,
      (path, prePath) => {
        originPath = prePath;
        tracker.handleReport();
      }
    );

    return {
      showNav,
      toggleNav,
      showGlobalNotice,
      handleCloseGlobalNotice,
    };
  },
});
</script>

<template>
  <div class="arco-vue-site">
    <div
      :class="[
        'arco-vue-body',
        { 'arco-vue-body-has-notice': showGlobalNotice },
      ]"
    >
      <a-button>ssss</a-button>
      <!-- <a-alert
        v-if="showGlobalNotice"
        class="site-global-notice"
        :show-icon="false"
        closable
        banner
        @close="handleCloseGlobalNotice"
      >
        <a
          href="https://mp.weixin.qq.com/s/06ALEmhxJcUqBGIVL4IQvA"
          rel="Arco Global Notice noreferrer"
          target="_blank"
        >
          <span class="content">
            Vue3 将成为默认版本，Arco 助力开发者轻装启航
          </span>
          <b>
            查看更多
            <icon-right />
          </b>
        </a>
      </a-alert> -->
      <!-- <aside-nav :show="showNav" @button-click="toggleNav" /> -->
      <slot />
    </div>
  </div>
</template>

<style lang="less">
.arco-vue-site {
  color: var(--color-text-2);
  font-size: 14px;
  background-color: var(--color-bg-1);

  h1,
  h2,
  h3,
  h4 {
    color: var(--color-text-1);
    font-weight: 500;
  }

  .arco-vue-body {
    padding-top: 61px;
  }

  .site-backtop-btn {
    background: var(--color-bg-5) !important;
    border: 1px solid var(--color-fill-3) !important;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  .link {
    color: rgb(var(--arcoblue-6));
    text-decoration: none;
  }

  .arco-vue-body-has-notice {
    padding-top: 99px;

    .arco-vue-aside-left,
    .arco-vue-aside {
      top: 99px;
    }
  }

  .site-global-notice {
    position: fixed;
    top: 61px;
    z-index: 980;
    display: flex;
    justify-content: center;
    height: 32px;
    color: var(--color-white);
    line-height: 32px;
    background-color: rgb(var(--blue-6));

    .arco-alert-body {
      display: flex;
      justify-content: center;

      .arco-alert-content a {
        color: var(--color-white);
        text-decoration: none;

        .content {
          margin-right: 48px;
          margin-left: 36px;
          font-size: 13px;
        }
      }
    }

    .arco-alert-close-btn {
      width: 20px;
      height: 20px;
      color: var(--color-white);
      line-height: 20px;
      text-align: center;
      border-radius: 4px;

      & .arco-icon-hover:hover::before {
        background-color: hsla(0, 0%, 100%, 0.3);
      }
    }
  }
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  background: none !important;
}

#nprogress .bar {
  background: rgb(var(--arcoblue-6));
}

#nprogress .peg {
  box-shadow: 0 0 10px rgb(var(--arcoblue-6)), 0 0 5px rgb(var(--arcoblue-6));
}

code[class*="language-"],
pre[class*="language-"] {
  text-shadow: none !important;
}
</style>
