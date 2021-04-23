<template>
  <div class="comment-item"  :class="{'dark': dark}">
    <comment-show-header :dark="dark" :avatar="messageFrom.avatar" :username="messageFrom.name" :time="messageTime"/>
    <comment-content :contents="contents" :dark="dark"></comment-content>
    <comment-show-btn @openReply="openReply" :dark="dark"
                      @openComments="openComments"
                      @delete="deleteMessage"
                      :contents="contents"
                      :currentIndex="currentIndex"
                      :delete="delete" :reply="reply" :comment="comment" :show="show" :update="update"></comment-show-btn>
    <div class="comment-reply">
      <reply-show :isShow="replyShow" :dark="dark"/>

      <div v-if="commentsShow">
        <reply-list v-if="isComment" :isShow="commentsShow" :contents="contents" :dark="dark"
                    :delete="delete" :show="show" :update="update"/>
        <div class="no-reply" v-else>
          <p>还没有人评论哦~</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import CommentShowHeader from './CommentShowHeader.vue'
  import CommentContent from './CommentContent.vue'
  import CommentShowBtn from './CommentShowBtn.vue'
  import ReplyShow from './ReplyShow.vue'
  import ReplyList from './ReplyList.vue'

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
    messageTime: String,
    isShow: {
      type: Boolean,
      default: true
    },
    contents: {
      type: String,
      default: ''
    },
    currentIndex: Number,

    // 需要那些按钮
    reply: { // 回复
      type: Boolean,
      default: true
    },
    comment: {  // 评论
      type: Boolean,
      default: false
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
  const commentsShow = ref(false)

  const isComment = ref(true)

  // 打开回复输入框
  const openReply = b => {
    replyShow.value = b
  }

  // 打开评论
  const openComments = b => {

    commentsShow.value = b
  }

  // 处理换行
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

  // 处理是否展示该评论
  const contentShow = ref(props.isShow)

  const showBtn = () => {
    contentShow.value = !contentShow.value
    ElMessage.success({
      message: '修改成功!',
      type: 'success'
    });
  }

</script>

<style scoped>
  .comment-item {
    border-radius: 6px;
    padding: 5px;
    border: 1px solid #b1b1b1;
  }

  .comment-item.dark {
    background: #20222a;
  }

  .comment-reply {
    margin-top: 5px;
  }
</style>