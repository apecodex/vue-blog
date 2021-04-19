<template>
  <div class="section-header" :class="changeBg">
    <span>{{ title }}</span>
    <span v-if="watchBtnText" class="btn">{{ btnText }}</span>
  </div>
</template>

<script setup>
import {computed, defineProps, ref} from "vue";

  const props = defineProps({
    title: String,
    btnText: {
      type: String,
      default: ''
    },
    bg: {
      type: Boolean,
      default: true
    },
    btnFunc: Function
  })

  const changeBg = ref(computed(() => {
    return props.bg ? 'white':'dark'
  }))

  const watchBtnText = ref(computed(() => {
    return props.btnText !== '';
  }))
</script>

<style scoped>
  div.section-header {
    margin: 10px 0;
    padding: 10px 10px;
    /*background: #ffffff;*/
    border-radius: 6px;
    box-shadow: 0 1px 3px rgba(0,0,0,.1);
    display: flex;
    justify-content: space-between;
  }

  div.section-header:first-child {
    margin: 0 0 20px;
  }

  div.section-header:nth-child(n+2) {
    margin-bottom: 20px;
  }

  div.section-header span {
    padding: 5px 10px;
    font-weight: bolder;
  }
  div.section-header span.btn {
    border-radius: 4px;
    background: #03a9f4;
    color: #ffffff;
    font-weight: 300;
    font-size: 14px;
    cursor: url('assets/cursor/mouse2.cur'), auto;
    transition: .3s;
  }

  div.section-header span.btn:hover {
    background: #20222a;
  }

  .white {
    background: #ffffff;
    color: #20222a;
  }

  .dark {
    background: #20222a;
    color: #ffffff;
  }
</style>