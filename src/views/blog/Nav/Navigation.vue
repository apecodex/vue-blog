<template>
  <transition name="fade">
    <loading v-if="isLoading"></loading>
  </transition>
  <h1>Nav</h1>
  <v-md-editor v-model="text" @save="save"></v-md-editor>
  <v-md-preview :text="text"></v-md-preview>
</template>

<script setup>
  import loading from 'components/loader/loading.vue'

  // 加载loader...
  import {onMounted, ref} from "vue";

  const isLoading = ref(true)

  onMounted(() => {
    isLoading.value = !isLoading.value
  })

  const text = ref('')

  const save = (text, html) => {
    console.log(text, html)
  }
</script>

<style>

</style>