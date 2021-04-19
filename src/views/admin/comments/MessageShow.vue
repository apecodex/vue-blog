<template>
  <section>
    <div class="message-container">
      <div class="message-main">
        <message-show-item v-for="(item, index) in messageData" :key="index"
                           :messageFrom="item.userinfo"
                           :messageTime="item.time"
                           :isShow="item.isShow"
                           :contents="item.contents"
                           @delete="deleteMessage"
                           :currentIndex="index" />
      </div>
      <div style="text-align: center">功能开发中...</div>
    </div>
  </section>
</template>

<script setup>
  import MessageShowItem from 'views/admin/comments/MessageShowItem.vue'
  import {ref} from "vue";
  import {ElMessage} from "element-plus";

  const messageData = ref([
    {userinfo: {name:'张三', avatar: 'https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg'}, time: '2021-01-01', isShow: true, contents: 'some text some text&#127773;some text\nsome text some text\nsome text '},
    {userinfo: {name:'李四', avatar: 'https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg'}, time: '2021-01-01', isShow: false, contents: 'some text some text\nsome text some text\nsome text '},
    {userinfo: {name:'王五', avatar: 'https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg'}, time: '2021-01-01', isShow: true, contents: 'some text some&#127773;text some text\nsome text some text\nsome text '},
    {userinfo: {name:'赵六', avatar: 'https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg'}, time: '2021-01-01', isShow: false, contents: 'some text some text some text\nsome text '},
    {userinfo: {name:'张三', avatar: 'https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg'}, time: '2021-01-01', isShow: true, contents: 'some text some \ntext some text\nsome text some text\nsome text '},
    {userinfo: {name:'张三', avatar: 'https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg'}, time: '2021-01-01', isShow: true, contents: 'some text some&#127773;text some text\nsome text some text\nsome text '},
  ])

  // 删除留言
  const deleteMessage = index => {
    messageData.value.splice(index, 1)
    ElMessage.success({
      message: '删除成功!',
      type: 'success'
    });
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