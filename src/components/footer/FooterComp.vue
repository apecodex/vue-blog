<template>
  <div class="footer-container">
    <div class="footer-left-container">
      <slot name="leftContent" />
    </div>
    <div class="footer-right-container">
      <slot name="rightContent" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .footer-container {
    padding: 0 10vw;
    display: flex;
    margin-top: 41px;
  }
  .footer-left-container {
    flex: 1;
    /* 解决无法贴着底部的问题 */
    margin-bottom: 5px;
    display: flex;
    justify-content: center;
  }
  .footer-right-container {
    flex: 1;
    margin-bottom: 5px;
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    .footer-container {
      flex-direction: column;
    }
  }
</style>