<template>
  <div class="information-inner box-border-white">
    <div class="information-name">
      <i class="fa fa-tint fa-fw" aria-hidden="true"></i>
      <h1>{{ author }}</h1>
      <i class="fa fa-tint fa-fw" aria-hidden="true"></i>
    </div>
    <div class="information-content">
      <div class="information-img">
        <img src="~assets/img/head.jpg" alt="">
      </div>
      <div class="information-description box-rubber-band">
        <p>{{ description }}</p>
      </div>
      <div class="information-link">
        <ul>
          <li v-for="(item, index) in link" :key="index">
            <a v-if="item.isLink" :href="item.name" target="_blank"><i class="fa" :class="item.icon" aria-hidden="true" @mouseover="showMsg(item.description)" @mouseleave="closeMsg(item.description)"></i></a>
            <a v-else href="javascript:void(0)" class="no-link-cursor"><i class="fa" :class="item.icon" aria-hidden="true" @mouseover="showMsg(item.description)" @mouseleave="closeMsg(item.description)"></i></a>
          </li>
        </ul>
      </div>
      <div class="link-tips">{{ showText }}</div>
    </div>
  </div>
</template>

<script setup>
  import { defineProps, ref } from 'vue'

  const props = defineProps({
    'author': String,
    'description': String,
    'link': Array
  });

  const isShow = ref(true)
  const showText = ref('')


  const showMsg = (description) => {
    isShow.value = !isShow.value
    showText.value = description
  }
  const closeMsg = (description) => {
    isShow.value = !isShow.value
    showText.value = ''
  }
</script>

<style scoped>
  @import url('assets/css/home/informationComp.css');

  .show-msg {
    display: block !important;
  }

  .close-msg {
    display: none !important;
  }

  .no-link-cursor {
    cursor: url('assets/cursor/mouse1.cur'), auto;
  }
</style>