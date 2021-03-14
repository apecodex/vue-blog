<template>
  <div class="tag-container">
    <slot name="content"/>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .tag-container {
    padding: 0 13vw;
    height: 100vh;
  }

  @media screen and (max-width: 1000px) {
    .tag-container {
      height: 100%;
    }
  }
</style>