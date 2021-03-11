<template>
  <transition name="el-zoom-in-top">
    <div class="notice box-border-white" v-show="flag">
      <div class="notice-text">
        {{ notice }}
      </div>
      <i class="fa fa-times notice-icon" aria-hidden="true" @click="noticeClose"></i>
    </div>
  </transition>

</template>

<script setup>
  import { defineProps, ref } from 'vue'

  const props = defineProps({
    notice: String
  })

  // notice close bool
  const flag = ref(true)


  const noticeClose = () => {
    flag.value = !flag.value
  }
</script>

<style>
  @import url('assets/css/common/common.css');
  .notice {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px;
    margin-bottom: 35px;
    transition: .5s ;
  }
  .notice-text {
    padding-right: 20px;
    margin: 0 auto;
    word-wrap: break-word;
  }
  .notice-icon {
    position: absolute;
    margin: 0 auto;
    right: 15px;
  }
</style>