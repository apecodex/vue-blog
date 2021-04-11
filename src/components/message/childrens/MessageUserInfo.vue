<template>
  <div class="userinfo-container">
    <div class="userinfo-inner">
      <div class="userinfo-header">
        <img :src="head" alt="">
      </div>
      <div class="userinfo-username">{{ username }}</div>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from "vue";

  const props = defineProps({
    head: String,
    username: String
  });
</script>

<style scoped>
  .userinfo-container {
    height: 70px;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, .05);
    border-radius: 50px 4px 4px 50px;
    box-shadow: 0 0 2px 1px rgba(0, 0, 0, .2);
    margin-bottom: 20px;
  }

  .userinfo-container .userinfo-inner {
    height: 60px;
    display: flex;
  }

  .userinfo-container .userinfo-inner .userinfo-header {
    height: 100%;
    width: 80px;
    margin: 0 5px;
  }
  
  .userinfo-container .userinfo-header img {
    height: 100%;
    border: 1px solid rgba(0, 0, 0, .5);
    border-radius: 50%;
  }

  .userinfo-container .userinfo-inner .userinfo-username {
    line-height: 60px;
    font-size: 22px;
    font-weight: bold;
    margin: 0 10px;
  }
</style>