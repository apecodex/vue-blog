<template>
  <div class="footer-container container">
    <div class="footer-left-container">
      left
    </div>
    <div class="footer-right-container">
      right
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .footer-container {
    display: flex;
  }
  .footer-left-container {
    flex: 1;
    /* 解决无法贴着底部的问题 */
    margin-bottom: 1px;
  }
  .footer-right-container {
    flex: 1;
    margin-bottom: 1px;

  }
  @media screen and (max-width: 768px) {
    .footer-container {
      flex-direction: column;
    }
  }
</style>