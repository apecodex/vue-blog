<template>
  <transition name="fade">
    <loading v-if="isLoading"></loading>
  </transition>
  <h1>aaa</h1>
</template>

<script setup>
  import { useRouter, useRoute } from 'vue-router'
  import {onMounted, ref} from "vue";

  import loading from 'components/loader/loading.vue'

  const router = useRouter()
  const route = useRoute()


  // 加载loader...
  const isLoading = ref(true)

  onMounted(() => {
    isLoading.value = !isLoading.value
  })

</script>

<style scoped>

</style>