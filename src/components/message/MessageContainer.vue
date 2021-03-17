<template>
  <div class="message-container">
    <div class="message-inner">
      <div class="message-left-content">
        <slot name="leftContent"/>
      </div>
      <div class="message-right-content">
        <slot name="rightContent"/>
      </div>      
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
  .message-inner {
    padding: 0px 10vw;
    display: flex;
    height: 100vh;
  }

  .message-inner .message-left-content {
    flex: 1.5;
  }

  .message-inner .message-right-content {
    flex: 1;
  }

  @media screen and (max-width: 1000px) {
    .message-inner {
      padding: 0 5vw;
    }
  }

  @media screen and (max-width: 768px) {
    .message-inner {
      flex-direction: column;
    }
    .message-inner .message-left-content {
      flex: 0;
    }
  }
</style>