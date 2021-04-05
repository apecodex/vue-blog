<template>
  <section class="navbar">
    <input type="checkbox" id="checkbox">
    <label for="checkbox">
      <i class="fa fa-outdent"></i>
    </label>
    <ul>
      <li>
        <img src="https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg" alt="">
        <span>apecodewx</span>
      </li>
      <li>
        <router-link to="/user/profile" :class="{'bl': bl('profile')}">
          <i class="fa fa-home"></i>
          <span>个人资料</span>
        </router-link>
      </li>
      <li>
        <router-link to="/user/comment"  :class="{'bl': bl('comment')}">
          <i class="fa fa-sitemap"></i>
          <span>我的评论</span>
        </router-link>
      </li>
      <li>
        <router-link to="/user/message"  :class="{'bl': bl('message')}">
          <i class="fa fa-user"></i>
          <span>我的消息</span>
        </router-link>
      </li>
      <li>
        <router-link to="/user/log"  :class="{'bl': bl('log')}">
          <i class="fa fa-shopping-cart"></i>
          <span>登录日志</span>
        </router-link>
      </li>
      <li>
        <a href="javascript:;" :class="{'bl': bl('exit')}">
          <i class="fa fa-windows"></i>
          <span>退出</span>
        </a>
      </li>
    </ul>
    <div class="user-content">
      <router-view/>
    </div>
  </section>

</template>

<script setup>

  import {computed,ref} from "vue";
  import { useRoute } from 'vue-router'

  const route = useRoute()

  const bl = path => {
    return route.path.split('/')[2] === path
  }

</script>

<style scoped>
  body {
    width: 100vw;
    background-color: #f2f2f2;

  }

  section.navbar {
    position: relative;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
  }

  section.navbar #checkbox {
    display: none;
  }

  section.navbar label {
    position: absolute;
    top: 0;
    left: 200px;
    font-size: 20px;
    color: #666666;
    padding-left: 5px;
    cursor: url('assets/cursor/mouse2.cur'), auto;
    transition: all .5s;
  }

  section.navbar ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 100vh;
    background: #20222a;
    transition: all .5s;
  }

  section.navbar ul li {
    width: 100%;
    height: 70px;
    margin-bottom: 10px;
  }

  section.navbar ul li:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 150px;
    padding: 10px;
  }

  section.navbar ul li:first-child img {
    width: 80px;
    border-radius: 50%;
  }

  section.navbar ul li:first-child span {
    color: #ffffff;
    font-size: 14px;
    white-space: nowrap;
  }

  section.navbar ul li a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    color: #d2d2d2;
    border-left: 6px solid transparent;
    transition: .2s ease-in-out;
  }

  section.navbar ul li a i {
    font-size: 18px;
    margin: 0 15px;
  }

  section.navbar ul li a span {
    font-size: 14px;
  }

  section.navbar ul li a:hover {
    color: #fff;
    border-left: 6px solid #fb7299;
  }

  section.navbar .user-content {
    position: absolute;
    top: 50px;
    left: 200px;
    right: 0;
    padding: 0 5px;
    transition: all .5s;
  }

  section.navbar input:checked + label {
    left: 0;
  }

  section.navbar input:checked + label i {
    transform: rotateY(180deg);
  }

  section.navbar input:checked ~ ul {
    left: -200px;
  }

  section.navbar input:checked ~ .user-content {
    left: 0!important;
  }

  .bl {
    border-left: 6px solid #fb7299!important;
  }

  @media screen and (max-width: 786px) {
    section.navbar ul {
      width: 140px;
    }
    section.navbar label {
      left: 140px;
    }

    section.navbar .user-content {
      left: 140px;
    }

    section.navbar input:checked ~ ul {
      left: -140px;
    }
  }
</style>