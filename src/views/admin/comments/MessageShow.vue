<template>
  <section class="message-show-container">
    <div class="message-show">
      <message-show-item v-for="(item, index) in data" :key="index"
                         :commentInfo="item.commentInfo"
                         :replyInfo="item.replyInfo" :replayTime="item.replyTime" :showComment="item.showComment" :articleInfo="item.articleInfo"/>
    </div>
    <div class="message-send">
    </div>
  </section>
</template>

<script setup>
  import MessageShowItem from "views/admin/comments/MessageShowItem.vue"
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