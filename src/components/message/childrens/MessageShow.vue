<template>
  <div class="message-show-container">
    <ul class="message-show-inner">
      <li class="message-show-item box-border-white">
        <div class="item-box">
          <div class="head"><img src="~assets/img/head.jpg" alt=""></div>
          <span class="title" :style="{'color': color()}">apecode</span>
          <p class="content">Text</p>
        </div>
        <button class="reply-btn">回复</button>
      </li>
      <li class="message-show-item box-border-white">
        <div class="item-box">
          <div class="head"><img src="~assets/img/head.jpg" alt=""></div>
          <span class="title" :style="{'color': color()}">apecode</span>
          <p class="content">Text</p>
        </div>
        <button class="reply-btn">回复</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { color } from 'utils/utils.js'
</script>

<style scoped>

@import url('assets/css/common/common.css');
  .message-show-inner {
    padding-left: 70px;
  }
  
  .message-show-inner .message-show-item {
    position: relative;
    min-height: 60px;
    margin-bottom: 15px;
  }

  .message-show-inner .item-box .head {
    position: absolute;
    top: 0;
    right: 100%;
    width: 70px;
    height: 60px;
  }

  .message-show-inner .item-box .head img {
    height: 100%;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.5);
    transition: .3s ease-in-out;
  }

  .message-show-inner .item-box .head img:hover {
    border: 1px solid rgba(0,0,0,1);
    transform: rotate(360deg);
  }

  /* 用户名 */
  .message-show-inner .item-box .title {
    font-size: 20px;
    font-weight: bold;
  }

  /* 内容 */
  .message-show-inner p.content:first-child {
    margin-top: 5px;
  }
</style>