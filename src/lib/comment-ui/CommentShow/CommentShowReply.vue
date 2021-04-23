<template>
  <div class="comment-show-reply-content" :class="{'dark': !dark}">
    <comment-show-reply-header :dark="dark" :avatar="messageFrom.avatar" :username="messageFrom.name" :replyUser="replyUserInfo.name" :time="messageTime"/>

    <comment-content :contents="contents" :dark="dark" />

    <comment-show-btn :dark="dark" @openReply="openReply" @delete="deleteMessage" :contents="contents" :delete="delete" :show="show" :update="update"/>

    <div v-if="replyShow" class="reply-comment">
      <comment action="" rows="4" btnText="发送" :onSubmit="onSubmit" :dark="dark"></comment>
    </div>
  </div>
</template>

<script setup>
  import CommentShowReplyHeader from './CommentShowReplyHeader.vue'
  import CommentContent from './CommentContent.vue'
  import CommentShowBtn from './CommentShowBtn.vue'
  import {entitiestoUtf16, utf16toEntities} from 'utils/utils.js'
  import {defineEmit, defineProps, ref} from "vue";
  import {ElMessage} from "element-plus";

  const emit = defineEmit(['delete'])

  const props = defineProps({
    dark: {
      type: Boolean,
      default: false
    },

    messageFrom: {},
    replyUserInfo: {},
    messageTime: String,

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

  const replyShow = ref(false)

  // 打开回复输入框
  const openReply = b => {
    replyShow.value = b
  }

  const content = ref(text => {
    text = entitiestoUtf16(text)
    return text.split('\n')
  })

  // 删除留言
  const deleteMessage = index => {
    emit('delete', index)
    ElMessage.success({
      message: '删除成功!',
      type: 'success'
    });
  }

  const onSubmit = (e, a) => {
    console.log(a);

    e.preventDefault()
  }
</script>

<style scoped>
  .comment-show-reply-content {
    margin-left: 30px;
    border-radius: 6px;
    padding: 5px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 5px;
    margin-top: 5px;
  }

  .comment-show-reply-content.dark {
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  .reply-comment {
    margin-top: 5px;
  }
</style>