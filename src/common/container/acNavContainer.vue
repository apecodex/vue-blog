<template>
  <div class="ac-nav-container">
    <nav class="ac-nav">
      <slot name="nav"/>
    </nav>
    <div class="ac-switch">
      <router-view />
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
  .ac-nav-container {
    padding: 0 10vw;
    height: 100vh;
  }

  @media screen and (max-width: 1000px) {
    .ac-nav-container {
      height: 100%;
    }
  }
</style>