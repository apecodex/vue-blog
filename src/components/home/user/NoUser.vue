<template>
  <div class="no-user-container">
    <button class="no-user-btn"><router-link to="login">我要登录</router-link></button>
  </div>
</template>

<script setup>
</script>

<style scoped>
  .no-user-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
  }

  button.no-user-btn {
    position: relative;
    padding: 5px 15px;
    font-size: 18px;
    outline: none;
    border: none;
    font-weight: 600;
    border-radius: 50px;
    background-image: linear-gradient(to right, #03a9f4,#f441a5,#ffeb3b,#09a8f4);
    background-size: 400%;
  }

  button.no-user-btn a {
    color: #ffffff;
  }

  button.no-user-btn::before {
    content: '';
    position: absolute;
    top: -5px;
    bottom: -5px;
    left: -5px;
    right: -5px;
    border-radius: 50px;
    background-image: linear-gradient(to right, #03a9f4,#f441a5,#ffeb3b,#09a8f4);
    background-size: 400%;
    z-index: -1;
    filter: blur(20px);
  }

  button.no-user-btn:hover {
    animation: sun 8s infinite;
  }

  button.no-user-btn::before:hover {
    animation: sun 8s infinite;
  }
</style>

<style>
  @keyframes sun {
    100% {
      background-position: -400% 0;
    }
  }
</style>