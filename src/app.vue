<template>
  <el-config-provider
    :size="size"
    :z-index="zIndex"
    :locale="locale"
  >
    <el-button type="primary">
      按钮
    </el-button>
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';

const zIndex = 3000;
const size: 'small' | 'default' | 'large' | '' | undefined = 'small';
const locale = zhCn;
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
