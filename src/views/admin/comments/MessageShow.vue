<template>
  <section class="message-show-container">
    <div class="message-show">
      <message-show-item v-for="(item, index) in data" :key="index"
                         :commentInfo="item.commentInfo"
                         :replyInfo="item.replyInfo" :replayTime="item.replyTime" :showComment="item.showComment" :articleInfo="item.articleInfo"/>
    </div>
    <div class="message-send">
      <send-notice></send-notice>
      <feed-back></feed-back>
    </div>
  </section>
</template>

<script setup>
  import MessageShowItem from "views/admin/comments/MessageShowItem.vue"
  import SendNotice from "views/admin/comments/SendNotice.vue"  // 发送通知
  import FeedBack from "views/admin/comments/FeedBack.vue"  // 用户反馈

  import {defineProps} from "vue";

  const props = defineProps({
    data: Array
  })

</script>

<style scoped>

  .message-show-container {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 20px;
    margin-bottom: 20px;
  }

  .message-show {
    display: flex;
    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    flex-direction: column;
    background: #20222a;
    padding: 10px 15px;
    border-radius: 6px;
  }

  @media screen and (max-width: 768px){
    .message-show-container {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 20px;
    }
  }
</style>