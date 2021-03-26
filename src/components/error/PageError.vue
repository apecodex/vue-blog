<template>
  <div id="world">
    <div class="cat-container" @mousemove="catContainer">
      <div class="content">
        <h2>404</h2>
        <h4>Opps! Page Not Found.</h4>
        <p>你所访问的页面不存在哦~</p>
        <button @click="backPage">Back</button>>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from "vue-router";

  const router = useRouter()

  const catContainer = event => {
    let x = event.clientX,
        y = event.clientY;
    event.path[1].style.backgroundPositionX = x + 'px'
    event.path[1].style.backgroundPositionY = y + 'px'
  }

  const backPage = () => {
    router.back()
  }
</script>

<style scoped>
  @import url('assets/css/error/style.css');
</style>