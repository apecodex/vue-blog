<template>
  <div id="world">
    <div class="cat-container" @mousemove="catContainer">
      <div class="content">
        <h2>404</h2>
        <h4>Opps! Page Not Found.</h4>
        <p>你所访问的页面不存在哦~</p>
        <a href="#">Back To Home</a>
      </div>
    </div>
  </div>
</template>

<script setup>
  const catContainer = event => {
    let x = event.clientX,
        y = event.clientY;
    event.path[1].style.backgroundPositionX = x + 'px'
    event.path[1].style.backgroundPositionY = y + 'px'
  }
</script>

<style scoped>
  @import url('assets/css/error/style.css');
</style>