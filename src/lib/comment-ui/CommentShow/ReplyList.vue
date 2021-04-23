<template>
  <div v-if="commentsShow" class="reply-top comment-show-reply">
    <comment-show-reply v-for="(item, index) in messageData" :key="index" :dark="dark" @delete="deleteMessage"
                        :contents="contents" :delete="delete" :show="show" :update="update"
                        :messageFrom="item.userinfo"
                        :messageTime="item.time" :replyUserInfo="item.replyUserInfo"/>
  </div>

</template>

<script setup>
import CommentShowReply from './CommentShowReply.vue'

import {computed, defineProps, ref} from "vue";

const props = defineProps({
  dark: {
    type: Boolean,
    default: false
  },
  isShow: {
    type: Boolean,
    default: false
  },
  contents: {
    type: String,
    default: ''
  },

  // 需要那些按钮
  reply: { // 回复
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
          avatar: 'https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg'
        },
    replyUserInfo: {
      name: 'apecode'
    },
    time: '2021-01-01',
    isShow: true,
    contents: 'some text some text&#127773;some text\nsome text some text\nsome text '
  },
  {
    userinfo:
        {
          name:'张三',
          avatar: 'https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg'
        },
    replyUserInfo: {
      name: 'apecode'
    },
    time: '2021-01-01',
    isShow: true,
    contents: 'some text some text&#127773;some text\nsome text some text\nsome text '
  },
  {
    userinfo:
        {
          name:'张三',
          avatar: 'https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg'
        },
    replyUserInfo: {
      name: 'apecode'
    },
    time: '2021-01-01',
    isShow: true,
    contents: 'some text some text&#127773;some text\nsome text some text\nsome text '
  },
  {
    userinfo:
        {
          name:'张三',
          avatar: 'https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg'
        },
    replyUserInfo: {
      name: 'apecode'
    },
    time: '2021-01-01',
    isShow: true,
    contents: 'some text some text&#127773;some text\nsome text some text\nsome text '
  },
  {
    userinfo:
        {
          name:'张三',
          avatar: 'https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg'
        },
    replyUserInfo: {
      name: 'apecode'
    },
    time: '2021-01-01',
    isShow: true,
    contents: 'some text some text&#127773;some text\nsome text some text\nsome text '
  },
])

const deleteMessage = index => {
  messageData.value.splice(index, 1)
}

const commentsShow = ref(computed(()=>props.isShow))
</script>

<style scoped>

</style>