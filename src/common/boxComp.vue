// 用来占位带有标题和内容的盒子的组件
<template>
  <transition name="el-zoom-in-top">
    <div class="box-comp-inner box-border-white" :class="{'box-content-shadow': !show}" v-show="flag">
      <div class="box-comp-title box-absolute-title">
        <i class="fa box-comp-icon box-up" :class="{'fa-chevron-up': show, 'fa-chevron-down': !show}" aria-hidden="true" @click="boxShow"></i>
        <i class="fa fa-times box-comp-icon" aria-hidden="true" @click="boxClose"></i>
        <slot name="title"/>
      </div>
      <div class="box-comp-container" v-show="show">
        <slot name="content"/>
      </div>
    </div>
  </transition>
</template>

<script setup>
  import { ref } from 'vue'

  // box close bool
  const flag = ref(true)
  // show content bool
  const show = ref(true)

  const boxClose = () => {
    flag.value = !flag.value
  }

  const boxShow = () => {
    show.value = !show.value
  }
</script>

<style scoped>
  .box-comp-inner {
    position: relative;
  }

  .box-comp-container {
    position: relative;

    margin-top: 40px;
  }

  .box-comp-icon {
    position: absolute;
    right: 15px;
    line-height: 36px;
    display: flex;
    cursor: url('assets/cursor/mouse2.cur'), auto;
  }
  .box-up {
    right: 35px;
  }
  .box-content-shadow {
    box-shadow: 0 0 0 0;
    margin-bottom: 50px;
  }
</style>