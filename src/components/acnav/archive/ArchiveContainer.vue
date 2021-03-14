<template>
  <div class="archive-container">
    <slot name="content"/>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .archive-container {
    margin: 20px auto;
    columns: 4;
  }

  @media (max-width: 1200px) {
    .archive-container {
      columns: 3;
      box-sizing: border-box;
    }
  }

  @media (max-width: 1000px) {
    .archive-container {
      columns: 2;
    }
  }

  @media (max-width: 768px) {
    .archive-container {
      columns: 1;
    }
  }
</style>