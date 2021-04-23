<template>
  <div class="content text-scrollbar-y" :class="{'dark': dark}">
    <p v-for="(item, index) in content(contents)" :key="index">
      {{ item }}
    </p>
  </div>
</template>

<script setup>
import {entitiestoUtf16, utf16toEntities} from 'utils/utils.js'

// 处理换行
import {defineProps, ref} from "vue";
const props = defineProps({
  dark: {
    type: Boolean,
    default: false
  },

  contents: {
    type: String,
    default: ''
  }
})

const content = ref(text => {
  text = entitiestoUtf16(text)
  return text.split('\n')
})
</script>

<style scoped>
  .content {
    margin: 5px 0;
    min-height: 55px;
    max-height: 70px;
    overflow-y: auto;
    border-radius: 4px;
    padding: 2px 5px;
    background: #fafafa;
    border: 1px solid rgba(0,0,0,.05);
  }

  .content.dark {
    background: #20222a;
    color: #ffffff;
  }

  /* 文本框Y轴的滚动条 */
  .text-scrollbar-y::-webkit-scrollbar  {
    width: 6px;
  }

  .text-scrollbar-y::-webkit-scrollbar-thumb  {
    border-radius: 4px;
    box-shadow: inset 0 0 6px rgb(0, 0, 0);
    background: rgb(0, 0, 0);
    background-clip: border-box;
  }
</style>