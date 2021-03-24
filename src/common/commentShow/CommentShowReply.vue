<template>
  <div class="reply-box box-border-white">
    <div class="head"><img :src="head" alt=""></div>
    <span class="username" :style="{'color': color()}">{{ username }}</span>
    <span class="time">{{ time }}</span>
    <span class="reply-username"><i class="fa fa-reply fa-fw fa-flip-horizontal" aria-hidden="true" style="color: #f0c688"></i><strong style="color: #6e0832">{{ replyUsername }}</strong></span>
    <div class="h10"></div>
    <p class="content">{{ text }}</p>
  </div>
  <div class="comment-btn-box">
    <button class="reply-btn" @click="openReplyComment">回复</button>
  </div>
  <div class="reply-comment" v-if="replyCommentShow">
    <comment rows="5"
             actionUrl=""
             method="get"
             :submitFunc="submit"
             btnText="留言"/>
    <div class="h10"></div>
    <hr>
    <div class="h10"></div>
  </div>
</template>

<script setup>
  import { ref, defineProps } from "vue";

  import { color } from 'utils/utils.js'

  import Comment from 'common/comment/Comment.vue'  // 评论组件

  const props = defineProps({
    head: String,
    username: String,
    replyUsername: String,
    time: String,
    text: String
  })

  const replyCommentShow = ref(false)

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
  @import url('assets/css/commentShow/commentShow.css');
</style>