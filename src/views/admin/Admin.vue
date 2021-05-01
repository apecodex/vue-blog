<template>
  <div class="admin-box">
    <div class="admin-container">
      <nav class="navigation" :class="{'active': menuActive}">
        <navigation>
          <template #li>
            <nav-item @click="navBtn" path="dashboard" fontawesome="fa-home" title="仪表盘" />
            <nav-item @click="navBtn" path="users" fontawesome="fa-users" title="用户" />
            <nav-item @click="navBtn" path="comments" fontawesome="fa-comment" title="消息" />
            <nav-item @click="navBtn" path="articles" fontawesome="fa-list-ol" title="博文列表" />
            <nav-item @click="navBtn" path="write" fontawesome="fa-pencil-square-o" title="新文章" />
            <nav-item @click="navBtn" path="setting" fontawesome="fa-cog" title="设置" />
            <nav-item @click="navBtn" path="password" fontawesome="fa-lock" title="密码" />
            <nav-item @click="navBtn" path="signOut" fontawesome="fa-sign-out" title="退出" />
          </template>
        </navigation>
      </nav>
      <div class="main" :class="{'active': menuActive}">
        <div class="topbar">
          <div class="toggle" @click="toggleMenu" :class="{'active': menuActive}"></div>
          <div class="tips">
            <span>我是野生程序猿，我也可以很专业。</span>
          </div>
          <div class="user">
            <img src="~assets/img/head.jpg" alt="">
          </div>
        </div>
        <div class="admin-content">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Navigation from "views/admin/Navigation/Navigation.vue";
  import NavItem from "views/admin/Navigation/NavItem.vue";

  import {ref} from "vue";
  // 点击隐藏或显示左侧菜单
  const menuActive = ref(false)
  const toggleMenu = () => {
    menuActive.value = !menuActive.value
  }
  // 点击列表也隐藏左侧菜单
  const navBtn = () => {
    if (menuActive.value) {
      menuActive.value = !menuActive.value
    }
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');

  .admin-box {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
  }
  .admin-container {
    font-family: 'Poppins', sans-serif;
    position: relative;
    width: 100%;
  }

  .navigation {
    position: fixed;
    width: 200px;
    height: 100%;
    background: #003147;
    transition: .5s;
    overflow: hidden;
    z-index: 999;
  }

  .navigation.active {
    width: 60px;
  }

  .main {
    position: absolute;
    width: calc(100% - 200px);
    left: 200px;
    min-height: 100vh;
    background: #f5f5f5;
    transition: .5s;
  }

  .main.active {
    width: calc(100% - 60px);
    left: 60px;
  }

  .main .topbar {
    width: 100%;
    background: #fff;
    height: 60px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .toggle {
    position: relative;
    width: 60px;
    height: 60px;
    cursor: url('assets/cursor/mouse2.cur'), auto;
  }

  .toggle::before {
    content: '\f0c9';
    font-family: FontAwesome;
    position: absolute;
    width: 100%;
    height: 100%;
    line-height: 60px;
    font-size: 24px;
    text-align: center;
    color: #111;
  }

  .tips {
    position: relative;
    font-size: 20px;
    color: #999999;
    font-weight: 500;
  }


  .user {
    position: relative;
    min-width: 50px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    cursor: url('assets/cursor/mouse2.cur'), auto;
  }

  .user img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .admin-content {
    padding: 20px;
  }

  @media screen and (max-width: 992px) {
    .navigation {
      left: -200px;
    }

    .navigation.active {
      left: 0;
      width: 200px;
    }

    .main {
      width: 100%;
      left: 0;
    }
    .main.active {
      width: calc(100% - 200px);
      left: 200px;
    }
  }

  @media screen and (max-width: 768px) {
    .cardHeader h2 {
      font-weight: 600;
      font-size: 18px;
    }

    .tips {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 480px) {
    .navigation {
      width: 100%;
      left: -100%;
      z-index: 1000;
    }

    .navigation.active {
      width: 100%;
      left: 0;
    }

    .toggle.active {
      position: fixed;
      right: 0;
      z-index: 9999;
      left: initial;
    }

    .toggle.active::before {
      color: #ffffff;
    }

    .main,
    .main.active {
      width: 100%;
      left: 0;
    }
  }
</style>