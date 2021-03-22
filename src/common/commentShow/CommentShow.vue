<template>
  <div class="message-show-container">
    <ul class="message-show-inner">
      <li class="message-show-item box-border-white" v-for="(item, index) in messages" :key="index">
        <comment-show-item :head="item.head"
                           :username="item.username"
                           :time="item.time"
                           :text="item.text"/>
        <div class="message-btn-box">
          <button class="reply-btn" @click="openReply">评论</button>
          <button class="reply-btn" @click="openComment">回复</button>
        </div>
        <div class="comment-box" v-if="commentShow">
          <comment rows="5"
                   actionUrl=""
                   method="get"
                   :submitFunc="submit"
                   btnText="留言" />
          <div class="h10"></div>
          <hr>
          <div class="h10"></div>
        </div>
        <div class="reply-content" v-show="replyShow" v-for="(replayItem, index) in item.replyMessages" :key="index">
          <comment-show-reply :head="replayItem.head"
                              :username="replayItem.username"
                              :replyUsername="replayItem.replyUsername"
                              :time="replayItem.time"
                              :text="replayItem.text"/>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { ref, defineProps, reactive } from "vue";
  import CommentShowItem from 'common/commentShow/CommentShowItem.vue';
  import CommentShowReply from 'common/commentShow/CommentShowReply.vue';
  import Comment from 'common/comment/Comment.vue'  // 评论组件

  import { color } from 'utils/utils.js'

  const replyShow = ref(false)
  const commentShow = ref(false)

  const openReply = () => {
    replyShow.value = !replyShow.value
  }

  const openComment = () => {
    commentShow.value = !commentShow.value
  }

  const openReplyComment = () => {
    replyCommentShow.value = !replyCommentShow.value
  }

  const messages = reactive([
    {'head': 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg', 'username': 'apecode', 'time': '2021·3·22', 'text': 'some message some message',
      'replyMessages': [
          {'head': 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg', 'username': 'apecodewx', 'replyUsername': 'apecode', 'time': '2021·3·22', 'text': 'some message some message'},
          {'head': 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg', 'username': '张三', 'replyUsername': 'apecode', 'time': '2021·3·22', 'text': 'some message some message'},
          {'head': 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg', 'username': '小王', 'replyUsername': 'apecode', 'time': '2021·3·22', 'text': 'some message some message'},

      ]},
    {'head': 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg', 'username': 'apecode', 'time': '2021·3·22', 'text': 'some message some message',
      'replyMessages': [
          {'head': 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg', 'username': 'apecodewx', 'replyUsername': 'apecode', 'time': '2021·3·22', 'text': 'some message some message'},
          {'head': 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg', 'username': '张三', 'replyUsername': 'apecode', 'time': '2021·3·22', 'text': 'some message some message'},
          {'head': 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg', 'username': '小王', 'replyUsername': 'apecode', 'time': '2021·3·22', 'text': 'some message some message'},

      ]},
  ])

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