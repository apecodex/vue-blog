<template>
  <router-view/>
</template>

<script setup>
  window.onload = function() {
    document.addEventListener('touchstart', function (event) {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    })
    document.addEventListener('gesturestart', function (event) {
      event.preventDefault()
    })
  }
</script>

<style>
  @import url('assets/css/base.css');
</style>