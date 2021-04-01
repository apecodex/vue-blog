<template>
  <div class="top-container" @click="backTop" ref="top">
    <div class="ghost">
      <div class="ghostEyes"></div>
      <div class="ghostDimples"></div>
      <div class="ghostFeet">
        <div class="ghostFoot"></div>
        <div class="ghostFoot"></div>
        <div class="ghostFoot"></div>
        <div class="ghostFoot"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ref} from "vue";

  const top = ref(null)

  const backTop = () => {
    cancelAnimationFrame(top.value)
    const self = top.value
    self.timer = requestAnimationFrame(function fn () {
      const oTop = document.body.scrollTop || document.documentElement.scrollTop
      if (oTop > 0) {
        document.body.scrollTop = document.documentElement.scrollTop = oTop - 50
        self.timer = requestAnimationFrame(fn)
      } else {
        cancelAnimationFrame(self.timer)
      }
    })
  }
</script>

<style scoped>
  .top-container .ghost {
    position: fixed;
    bottom: 75px;
    left: 10px;
    width: 40px;
    height: 60px;
    border-radius: 75px 75px 0 0;
    background-color: #ffffff;
    box-shadow: 1px 0 0 #dbdbdb inset, 0 0 10px;
    z-index: 999;
    animation: ghost 2s infinite;
  }

  .top-container .ghost:before {
    position: absolute;
    top: -20px;
    margin-left: calc(40px / 4);
    content: 'TOP';
    font-size: 12px;
  }

  .top-container .ghost .ghostEyes {
    display: flex;
    justify-content: space-around;
      width: 30px;
      padding-top: 20px;
    margin: 0 auto;
  }

  .top-container .ghost .ghostEyes::before,
  .top-container .ghost .ghostEyes::after {
    content: '';
    width: 4px;
    height: 8px;
    border-radius: 50%;
    background-color: #00034b;
  }

  .top-container .ghost .ghostDimples {
    display: flex;
    justify-content: space-around;
    width: 40px;
    padding-top: 5px;
    margin: 0 auto;
  }

  .top-container .ghost .ghostDimples::before,
  .top-container .ghost .ghostDimples::after {
    content: '';
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background-color: #ffbeff;
  }

  .top-container .ghost .ghostFeet {
    display: flex;
    position: absolute;
    bottom: -3px;
    width: 100%;
  }

  .top-container .ghost .ghostFeet .ghostFoot {
    width: 25%;
    height: 10px;
    border-radius: 50%;
    background-color: #ffffff;
  }

  @media screen and (max-width: 1000px) {
    .top-container {
      display: none;
    }
  }

</style>

<style>
  @keyframes ghost {
    0%,100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-15px);
    }
  }
</style>