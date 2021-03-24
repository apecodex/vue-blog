<template>
  <div class="message-show-container">
    <div class="message-show-inner">
      <div class="message-show-item box-border-white">
        <div class="">
          <div class="item-box">
            <div class="head"><img src="~assets/img/head.jpg" alt=""></div>
            <span class="username" :style="{'color': color()}">apecode</span>
            <span class="time">2021·3·21</span>
            <div class="h10"></div>
            <p class="content">Text</p>
            <p class="content">Text</p>
            <p class="content">Text</p>
          </div>
          <div class="message-btn-box">
            <button class="reply-btn" @click="openReply">评论 (<span class="reply-num">3000</span>)</button>
            <button class="reply-btn" @click="openComment">回复</button>
          </div>
          <div class="comment-box" v-if="commentShow">
            <comment rows="5"
                     actionUrl=""
                     method="get"
                     :submitFunc="submit"
                     btnText="留言" />
          </div>
        </div>
        <div class="reply-content" v-show="replyShow">
          <div class="reply-box box-border-white">
            <div class="head"><img src="~assets/img/head.jpg" alt=""></div>
            <span class="username" :style="{'color': color()}">apecodewx</span>
            <span class="time">2021·3·21</span>
            <span class="reply-username"><i class="fa fa-reply fa-fw fa-flip-horizontal" aria-hidden="true" style="color: #f0c688"></i><strong style="color: #6e0832">apecode</strong></span>
            <div class="h10"></div>
            <p class="content">Text</p>
            <p class="content">Text</p>
            <p class="content">Text</p>
          </div>
          <div class="message-btn-box">
            <button class="reply-btn" @click="openReplyComment">回复</button>
          </div>
          <div class="reply-comment" v-if="replyCommentShow">
            <comment rows="5"
                     actionUrl=""
                     method="get"
                     :submitFunc="submit"
                     btnText="留言"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {ref} from "vue";
  import Comment from 'common/comment/Comment.vue'

  import { color } from 'utils/utils.js'

  const replyShow = ref(false)
  const commentShow = ref(false)
  const replyCommentShow = ref(false)

  const openReply = () => {
    replyShow.value = !replyShow.value
  }

  const openComment = () => {
    commentShow.value = !commentShow.value
  }

  const openReplyComment = () => {
    replyCommentShow.value = !replyCommentShow.value
  }

  const submit = (e, a) => {
    console.log("do some");
    console.log(a);

    e.preventDefault()
  }

</script>

<style scoped>

  @import url('assets/css/common/common.css');
  .message-show-inner,
  .message-show-inner .message-show-item .reply-content {
    padding-left: 70px;
  }
  
  .message-show-inner .message-show-item,
  .message-show-inner .message-show-item .reply-content .reply-box {
    position: relative;
    min-height: 60px;
    margin-bottom: 15px;
  }

  .message-show-inner .item-box .head,
  .message-show-inner .message-show-item .reply-content .reply-box .head {
    position: absolute;
    top: 0;
    right: 100%;
    width: 70px;
    height: 60px;
  }

  .message-show-inner .item-box .head img,
  .message-show-inner .message-show-item .reply-content .reply-box .head img {
    height: 100%;
    border-radius: 50%;
    border: 1px solid rgba(0,0,0,.5);
    transition: .3s ease-in-out;
  }

  .message-show-inner .item-box .head img:hover,
  .message-show-inner .message-show-item .reply-content .reply-box .head img:hover {
    border: 1px solid rgba(0,0,0,1);
    transform: rotate(360deg);
  }

  /* 用户名 */
  .message-show-inner .item-box .username,
  .message-show-inner .message-show-item .reply-content .reply-box .username {
    font-size: 20px;
    font-weight: bold;
  }

  /* 时间 */
  .message-show-inner .item-box .time,
  .message-show-inner .message-show-item .reply-content .reply-box .time{
    font-weight: bold;
    color: #6e0832;
    float: right;
    margin-top: 5px;
  }

  .h10 {
    height: 10px;
  }

  /* 内容 */
  .message-show-inner p.content,
  .message-show-inner .message-show-item .reply-content .reply-box p.content {
    font-size: 18px;
    font-weight: 500;
  }

  /* 评论按钮 */
  .message-show-inner .message-show-item .message-btn-box {
    margin: 10px 0;
    padding: 5px 0;
    background: rgba(0,0,0,.6);
    border-radius: 4px;
    display: flex;
    justify-content: flex-end;
  }

  .message-show-inner .message-show-item .message-btn-box button.reply-btn {
    margin-right: 10px;
    padding: 3px 5px;
    border: 0;
    border-top: 1px solid #ffffff;
    border-bottom: 1px solid #ffffff;
    color: #fff;
    font-weight: bold;
    background: transparent;
    outline: none;
    transition: .5s ease;
  }

  .message-show-inner .message-show-item .message-btn-box button.reply-btn > .reply-num {
    color: #f0c688;
    padding: 0 2px;
  }

  .message-show-inner .message-show-item .message-btn-box button.reply-btn:hover {
    border-top: 1px dotted #ffffff;
    border-bottom: 1px dotted #ffffff;
    color: orangered;
  }

  @media screen and (max-width: 1000px) {
    .message-show-inner,
    .message-show-inner .message-show-item .reply-content {
      padding-left: 0;
    }

    .message-show-inner .item-box {
      position: relative;
    }

    .message-show-inner .item-box .head,
    .message-show-inner .message-show-item .reply-content .reply-box .head {
      position: relative;
      right: 0;
      margin: 0 auto;
    }

  }
</style>