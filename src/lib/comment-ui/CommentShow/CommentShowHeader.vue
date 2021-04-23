<template>
  <header>
    <span class="img">
      <a href="##">
        <img :src="avatar" alt="">
      </a>
    </span>
    <div class="user-info" :class="{'dark': dark}">
      <div>
        <span>{{ username }}</span>
        <small>{{ time }}</small>
      </div>
    </div>
  </header>
</template>

<script setup>

  import {defineProps} from "vue";

  const props = defineProps({
    dark: {
      type: Boolean,
      default: false
    },

    avatar: String,
    username: String,
    time: String
  })
</script>

<style scoped>
  @import url("../styles/commentHeader.css");
</style>