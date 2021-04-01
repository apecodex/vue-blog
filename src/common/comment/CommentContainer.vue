<template>
  <div class="comment-inner">
    <div class="comment-area-container">
      <slot name="commentArea"/>
    </div>
    <div class="comment-tool">
      <div class="emoji-container">
        <slot name="emoji"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

  .comment-inner {
    margin: 20px 0 0 0;
    width: 100%;
  }
  .comment-area-container {
    position: relative;
  }

  .comment-tool {
    width: 100%;
    height: 40px;
    background: rgba(0, 0, 0, .3);
    display: flex;
    align-items: center;
    border-radius: 4px;
    margin-top: 5px;
  }

</style>