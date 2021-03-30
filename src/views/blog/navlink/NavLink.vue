<template>
  <transition name="fade">
    <loading v-if="isLoading"></loading>
  </transition>
  <h1>这里是导航页面，暂时不知道要怎么写，先搁着吧</h1>
</template>

<script setup>
  import loading from 'components/loader/loading.vue'

  // 加载loader...
  import {onMounted, ref} from "vue";

  const isLoading = ref(true)

  onMounted(() => {
    isLoading.value = !isLoading.value
  })

  // const save = (text, html) => {
  //   console.log(text, html)
  // }
</script>

<style>

</style>