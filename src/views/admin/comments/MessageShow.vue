<template>
  <section>
    <div class="message-container">
      <div class="message-main">
        <comment-show :dark="true" :show="true" :update="true" :delete="true" />
        <my-pagination :currentPage="currentPage" :dark="true" :totalPage="10"/>

      </div>
      <div style="text-align: center">功能开发中...</div>
    </div>
  </section>
</template>

<script setup>
  import {ref} from "vue";
  import {ElMessage} from "element-plus";

  // 删除留言
  const deleteMessage = index => {
    messageData.value.splice(index, 1)
    ElMessage.success({
      message: '删除成功!',
      type: 'success'
    });
  }

  const currentPage = (current) => {
    console.log(current)
  }
</script>

<style scoped>
  .message-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }

  .message-main {
    background: #20222a;
    border-radius: 6px;
    color: #ffffff;
    padding: 10px 15px;
    display: grid;
    grid-gap: 10px;
  }

  @media screen and (max-width: 768px) {
    .message-container {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 20px;
    }

  }
</style>

<style>

  .comment-show-container .comment-show-content .comment-item {
    background: #000;
    border: 0;
  }

  .comment-show-container .comment-show-content .comment-item .btn button.reply {
    background: #03a9f4 !important;
  }

  .comment-show-container .comment-show-content .comment-item .btn button:hover {
    background: #ffffff!important;
    color: #20222a!important;
  }

  .comment-show-container .comment-show-content .comment-item .btn button.comment {
    background: #6e0832!important;
  }

  .comment-show-reply-content {
    border: 0!important;
  }
</style>