<template>
  <transition name="fade">
    <loading v-if="isLoading"></loading>
  </transition>
  <h1>Project</h1>
</template>

<script setup>
  import loading from 'components/loader/loading.vue'

  // 加载loader...
  import {onMounted, ref} from "vue";

  const isLoading = ref(true)

  onMounted(() => {
    isLoading.value = !isLoading.value
  })
</script>

<style>

</style>