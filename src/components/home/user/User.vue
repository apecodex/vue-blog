<template>
  <div class="user-container">
    <img src="https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg" alt="" class="user-img">
    <div class="user-box">
      <span class="username">apecodewx</span>
      <button class="user-info-btn"><router-link to="user">个人信息</router-link></button>
      <button class="user-logout-btn">退出</button>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
  .user-container {
    display: flex;
    padding: 5px 0;
    box-sizing: border-box;

  }

  .user-container img.user-img {
    width: 60px;
    height: 60px;
    border-radius: 50px;
    margin-right: 10px;
    border: 1px dashed rgb(196, 189, 189);
    transition: .3s ease-in-out;
  }

  .user-container img.user-img:hover {
    transform: rotate(-360deg);
  }

  .user-container .user-box {
    width: 100%;
    border: 2px dashed rgb(196, 189, 189);
    padding-left: 10px;
    border-radius: 6px;
    transition: .2s ease-in-out;
  }

  .user-container .user-box:hover {
    border-color: #6e0832;
  }

  .user-container .user-box span.username {
    display: block;
    color: #fff;
    font-size: 18px;
    font-weight: bolder;
    margin-bottom: 6px;
  }

  .user-container .user-box button a {
    color: #ffffff;
  }

  .user-container .user-box button {
    padding: 2px 15px;
    outline: none;
    background: none;
    border: 1px double;
    color: #ffffff;
    border-radius: 50px;
    transition: .3s ease-in-out;
  }

  .user-container .user-box .user-logout-btn {
    margin-left: 8px;
  }

  .user-container .user-box button:hover {
    border-color: darkred;
    color: #6e0832;
  }
</style>