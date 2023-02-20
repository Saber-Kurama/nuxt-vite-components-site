<script lang="ts" setup>
import { IconSoundFill, IconClose } from "@arco-design/web-vue/es/icon";
</script>
<template>
  <div :class="$style.notification">
    <div :class="$style.conText">
      <div :class="$style.conIcon">
        <IconSoundFill />
      </div>
      <div :class="$style.text"></div>
    </div>
    <div :class="$style.conBtn">
      <button>
        <IconClose />
      </button>
    </div>
  </div>
</template>

<style lang="less" module>
.notification {
  width: 100%;
  position: fixed;
  height: 40px;
  background: #eef2f5;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0px;
  cursor: pointer;
  overflow: hidden;
  transition: all 0.3s ease;
  &:hover {
    .conIcon {
      width: 60px;
    }
  }
  .conText {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: calc(100% - 200px);
  }
  .conIcon {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2c3e50;
    background: rgba(0, 0, 0, 0.05);
    margin-right: 20px;
    transition: all 0.25s ease;
  }
  .conBtn {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
