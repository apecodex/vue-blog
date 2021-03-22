<template>
  <div class="item-box">
    <div class="head"><img :src="head" alt=""></div>
    <span class="username" :style="{'color': color()}">{{ username }}</span>
    <span class="time">{{ time }}</span>
    <div class="h10"></div>
    <p class="content">{{ text }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

import { color } from 'utils/utils.js'

const props = defineProps({
  head: String,
  username: String,
  time: String,
  text: String
})


</script>

<style scoped>
  @import url('assets/css/common/common.css');
  @import url('assets/css/commentShow/commentShow.css');
</style>