<template>
  <div class="admin-box">
    <div class="admin-container">
      <nav class="navigation" :class="{'active': menuActive}">
        <ul>
          <li>
            <a href="">
              <span class="icon"><i class="fa fa-heartbeat" aria-hidden="true"></i></span>
              <span class="title"><h2>Hi,Admin</h2></span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="icon"><i class="fa fa-home" aria-hidden="true"></i></span>
              <span class="title">仪表盘</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="icon"><i class="fa fa-users" aria-hidden="true"></i></span>
              <span class="title">用户</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="icon"><i class="fa fa-comment" aria-hidden="true"></i></span>
              <span class="title">消息</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="icon"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></span>
              <span class="title">博文</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="icon"><i class="fa fa-cog" aria-hidden="true"></i></span>
              <span class="title">设置</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="icon"><i class="fa fa-lock" aria-hidden="true"></i></span>
              <span class="title">密码</span>
            </a>
          </li>
          <li>
            <a href="">
              <span class="icon"><i class="fa fa-sign-out" aria-hidden="true"></i></span>
              <span class="title">退出</span>
            </a>
          </li>
        </ul>
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
          <!-- 卡片 -->
          <card/>
          <div class="details">
            <!-- 近期文章 -->
            <recent-articles/>
            <div class="recentCustomer">
              <div class="cardHeader">
                <h2>新增用户</h2>
              </div>
              <table>
                <tbody>
                <tr>
                  <td width="50px"><div class="imgBx"><img src="~assets/svg/login/avatar.svg" alt=""></div></td>
                  <td><h4>David<b>2021-1-1</b><br><span>from Italy</span><b>127.0.0.1</b></h4></td>
                </tr>
                <tr>
                  <td width="50px"><div class="imgBx"><img src="~assets/svg/login/avatar.svg" alt=""></div></td>
                  <td><h4>David<b>2021-1-1</b><br><span>from Italy</span><b>127.0.0.1</b></h4></td>
                </tr>
                <tr>
                  <td width="50px"><div class="imgBx"><img src="~assets/svg/login/avatar.svg" alt=""></div></td>
                  <td><h4>David<b>2021-1-1</b><br><span>from Italy</span><b>127.0.0.1</b></h4></td>
                </tr>
                <tr>
                  <td width="50px"><div class="imgBx"><img src="~assets/svg/login/avatar.svg" alt=""></div></td>
                  <td><h4>David<b>2021-1-1</b><br><span>from Italy</span><b>127.0.0.1</b></h4></td>
                </tr>
                <tr>
                  <td width="50px"><div class="imgBx"><img src="~assets/svg/login/avatar.svg" alt=""></div></td>
                  <td><h4>David<b>2021-1-1</b><br><span>from Italy</span><b>127.0.0.1</b></h4></td>
                </tr>
                <tr>
                  <td width="50px"><div class="imgBx"><img src="~assets/svg/login/avatar.svg" alt=""></div></td>
                  <td><h4>David<b>2021-1-1</b><br><span>from Italy</span><b>127.0.0.1</b></h4></td>
                </tr>
                <tr>
                  <td width="50px"><div class="imgBx"><img src="~assets/svg/login/avatar.svg" alt=""></div></td>
                  <td><h4>David<b>2021-1-1</b><br><span>from Italy</span><b>127.0.0.1</b></h4></td>
                </tr>
                <tr>
                  <td width="50px"><div class="imgBx"><img src="~assets/svg/login/avatar.svg" alt=""></div></td>
                  <td><h4>David<b>2021-1-1</b><br><span>from Italy</span><b>127.0.0.1</b></h4></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Card from 'views/admin/dashboard/card/Card.vue';
  import RecentArticles from "views/admin/dashboard/recentArticles/RecentArticles.vue"

  import {ref} from "vue";
  // 点击改变左侧列表
  const menuActive = ref(false)
  const toggleMenu = () => {
    menuActive.value = !menuActive.value
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
  }

  .navigation.active {
    width: 60px;
  }

  .navigation ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .navigation ul li {
    position: relative;
    width: 100%;
  }

  .navigation ul li:first-child {
    margin-bottom: 20px;
  }

  .navigation ul li:hover:nth-child(n+2) {
    background: #03a9f4;
  }

  .navigation ul li a {
    position: relative;
    width: 100%;
    display: flex;
    color: #ffffff;
  }

  .navigation ul li a .icon {
    position: relative;
    display: block;
    min-width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }

  .navigation ul li a .icon .fa {
    color: #ffffff;
    font-size: 24px;
  }

  .navigation ul li a .title {
    position: relative;
    display: block;
    padding: 0 10px;
    height: 60px;
    line-height: 60px;
    white-space: nowrap;
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

  .details {
    position: relative;
    width: 100%;
    padding: 0 20px 20px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 2fr 1fr;
  }


  .details .recentCustomer {
    position: relative;
    min-height: 530px;
    background: #fff;
    padding: 20px;
    border-radius: 6px;
  }

  .details .recentCustomer .imgBx {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
  }

  .details .recentCustomer .imgBx img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }


  .details .recentCustomer table tr td h4 span {
    font-size: 14px;
    color: #999999;
  }

  .details .recentCustomer table tr:hover,
  .details .recentCustomer table tr:hover td h4 span {
    background: #03a9f4;
    color: #fff;
  }

  .details .recentCustomer table tr td {
    padding: 7px 0;
  }

  .details .recentCustomer table tr td h4 {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2em;
  }
  .details .recentCustomer table tr td h4 b {
    float: right;
    font-size: 12px;
    color: #6e0832 !important;
  }

  @media screen and (max-width: 1200px) {
    .details {
      grid-template-columns: 1.5fr 1fr;
    }
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
    .details {
      grid-template-columns: repeat(1, 1fr);
    }

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