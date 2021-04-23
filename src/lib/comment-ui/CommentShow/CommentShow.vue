<template>
  <section class='comment-show-container'>
    <div class="comment-show-content">
      <comment-item v-for="(item, index) in messageData" :key="index" :currentIndex="index" :dark="dark"
                    :messageFrom="item.userinfo"
                    :messageTime="item.time" :contents="item.contents"
                    :delete="delete" :reply="reply" :comment="comment" :show="show" :update="update"
                    @delete="deleteMessage"></comment-item>
    </div>
  </section>
</template>

<script setup>
  import CommentItem from './CommentItem.vue'

  import {defineProps, ref} from "vue";

  const props = defineProps({
    userInfo: {
      type: Object,
      default: {}
    },
    messageInfo: {
      type: Object,
      default: {}
    },

    dark: {
      type: Boolean,
      default: false
    },

    // 需要那些按钮
    reply: { // 回复
      type: Boolean,
      default: true
    },
    comment: {  // 评论
      type: Boolean,
      default: true
    },
    show: { // 评论展示
      type: Boolean,
      default: false
    },
    delete: { // 删除评论
      type: Boolean,
      default: false
    },
    update: { // 修改评论
      type: Boolean,
      default: false
    },
  })

  const messageData = ref([
    {
      userinfo:
          {
            name:'张三',
            avatar: 'https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg'},
      time: '2021-01-01',
      isShow: true,
      contents: 'some text some text&#127773;some text\nsome text some text\nsome text '
    },
    {
      userinfo:
          {
            name:'张三',
            avatar: 'https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg'},
      time: '2021-01-01',
      isShow: true,
      contents: 'some text some text&#127773;some text\nsome text some text\nsome text '
    },
    {
      userinfo:
          {
            name:'张三',
            avatar: 'https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg'},
      time: '2021-01-01',
      isShow: true,
      contents: 'some text some text&#127773;some text\nsome text some text\nsome text some text some text&#127773;some text\nsome text some text\nsome text'
    },
    {
      userinfo:
          {
            name:'张三',
            avatar: 'https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg'},
      time: '2021-01-01',
      isShow: true,
      contents: 'some text some text&#127773;some text\nsome text some text\nsome text '
    },
    {
      userinfo:
          {
            name:'张三',
            avatar: 'https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg'},
      time: '2021-01-01',
      isShow: true,
      contents: 'some text some text&#127773;some text\nsome text some text\nsome text '
    },
    {
      userinfo:
          {
            name:'张三',
            avatar: 'https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg'},
      time: '2021-01-01',
      isShow: true,
      contents: 'some text some text&#127773;some text\nsome text some text\nsome text '
    },
])

  const deleteMessage = index => {
    messageData.value.splice(index, 1)
  }
</script>

<script>
  export default {
    name: 'CommentShow'
  }
</script>

<style scoped>
  .comment-show-container {
    width: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border-radius: 8px;
  }

  .comment-show-container .comment-show-content {
    border-radius: 6px;
    display: grid;
    grid-gap: 10px;
  }

</style>
