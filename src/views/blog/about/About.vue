<template>
  <transition name="fade">
    <loading v-if="isLoading"></loading>
  </transition>
  <div class="about-container">
    <div class="music-play">
      <audio autoplay loop>
        <source src="~assets/audio/music.mp3" type="audio/mpeg">
      </audio>
    </div>
    <div class="bg-space">
    </div>
    <div class="scene">
      <p>{{ aboutObj.text }}</p>
      <span @click="openContent"></span>
    </div>
    <div class="bg-mountain1"></div>
    <div class="bg-mountain2"></div>
    <div class="bg-mountain3"></div>
    <div class="bear"></div>
  </div>
  <transition name="el-zoom-in-top">
    <div class="about-content box-border-dark" v-show="contentShow">
      <span class="about-close"><span>{{ aboutObj.aboutTitle }}</span><i class="fa fa-times" @click="aboutClose"></i></span>
      <p v-for="(item, index) in aboutObj.content" :key="index">{{ item }}</p>
    </div>
  </transition>
</template>

<script setup>
  import loading from 'components/loader/loading.vue'

  // 加载loader...
  import {onBeforeMount, ref} from "vue";
  import axios from 'axios'

  const isLoading = ref(true)
  const aboutObj = ref({})

  onBeforeMount(() => {
      axios.get('https://api.github.com/events').then(r=> {
        aboutObj.value = {'text': 'welcome', 'aboutTitle': '努力奔跑',
          'content': [
            '深入钻研自己所学，无论学习什么都要搞清楚，弄明白。',
            '多读书，无论题材，多多涉猎，充实自己。',
            '多健身、运动，对生活充满热情，做个阳光大男孩。',
            '多写博客，记录成长的点点滴滴。'
          ]
        }
        isLoading.value = !isLoading.value
      })
  })

  const contentShow = ref(true)
  // 打开信息窗口
  const openContent = () => {
    contentShow.value = !contentShow.value
  }
  // 关闭信息窗口
  const aboutClose = () => {
    contentShow.value = !contentShow.value
  }

</script>

<style>
@import url('assets/css/common/common.css');
@import url('assets/css/runBear/index.css');
</style>