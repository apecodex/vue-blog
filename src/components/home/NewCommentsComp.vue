<template>
  <div class="new-comments-inner box-border-white">
    <div class="new-comments-title box-absolute-title">
      最新评论
    </div>
    <div class="new-comments-container">
      <slot name="content"/>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.new-comments-inner {
  position: relative;
}

.new-comments-container {
  position: relative;

  margin-top: 40px;
}

</style>