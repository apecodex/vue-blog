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
    padding: 5px 15vw 0;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    grid-gap: 20px;
    height: 100%;
    z-index: 9999;
  }

  .message-inner .message-left-content {
    flex: 1;
  }

  .message-inner .message-right-content {
    flex: 1.2;
  }

  @media screen and (max-width: 1000px) {
    .message-inner {
      padding: 0 5vw;
    }
  }

  @media screen and (max-width: 768px) {
    .message-inner {
      grid-template-columns: 1fr;
      height: 100%;
    }

    .message-inner .message-left-content {
      flex: 0;
    }
  }
</style>