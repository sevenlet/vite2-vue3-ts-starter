<template>
  <div class="red">
    用户名:{{ mainStore.name }}<br>长度:{{ mainStore.nameLength }}
  </div>
  <hr>
  <button @click="updateName">
    修改store中的name
  </button>
</template>

<script setup lang="ts">
import { useMainStore } from '@/store';

// 使用环境变量
console.log(import.meta.env.VITE_APP_WEB_URL);

const mainStore = useMainStore();

const updateName = () => {
  // $patch 修改 store 中的数据
  mainStore.$patch({
    name: '名称被修改了,nameLength也随之改变了',
  });
};
</script>

<style lang="scss" scoped>
.red {
  color: $test-color;
}
</style>
