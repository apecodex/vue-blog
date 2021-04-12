<template>
  <div class="comment-content">

    <div class="item-box">
      <div class="head"><img :src="head" alt=""></div>
      <span class="username" :style="{'color': color()}">{{ username }}</span>
      <span class="time">{{ time }}</span>
      <div class="h10"></div>
      <p class="content">{{ text }}</p>
    </div>
    <div class="comment-btn-box">
      <button class="reply-btn" @click="openReply">评论</button>
      <button class="reply-btn" @click="openComment">回复</button>
    </div>
    <div class="comment-box" v-if="commentShow">
      <comment rows="5"
               actionUrl=""
               method="get"
               :onSubmit="onSubmit"
               btnText="回复"/>
      <div class="h10"></div>
      <hr>
      <div class="h10"></div>
    </div>
  </div>
  <div class="reply-content" v-show="replyShow">
    <div class="reply-inner" v-for="(replyList, index) in replyData" :key="index">
      <comment-show-reply :head="replyList.head"
                          :username="replyList.username"
                          :time="replyList.time"
                          :replyUsername="replyList.replyUsername"
                          :text="replyList.text"></comment-show-reply>
    </div>
  </div>
</template>

<script setup>
import {defineProps, defineEmit, ref ,onMounted} from "vue";

import { color } from 'utils/utils.js'
import Comment from 'common/comment/Comment.vue'  // 评论组件
import CommentShowReply from 'common/commentShow/CommentShowReply.vue'



const emit = defineEmit(['getReply'])

const props = defineProps({
  head: String,
  username: String,
  time: String,
  text: String,
  replyData: Array
})

const replyShow = ref(false)
const commentShow = ref(false)

const openReply = () => {
  replyShow.value = !replyShow.value
}

const openComment = () => {
  commentShow.value = !commentShow.value
}

const onSubmit = (e, a) => {
  console.log("do some");
  console.log(a);

  e.preventDefault()
}

</script>

<style scoped>
  @import url('assets/css/common/common.css');
  @import url('assets/css/commentShow/commentShow.css');
</style>