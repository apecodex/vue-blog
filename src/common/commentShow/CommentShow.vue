<template>
  <div class="comment-show-container">
    <div class="comment-show-inner">
      <div class="comment-show-item box-border-white" v-for="(item, index) in messages" :key="index">
        <div class="comment-content">
          <comment-show-item :head="item.head"
                             :username="item.username"
                             :time="item.time"
                             :text="item.text"
                             :replyData="item.replyMessages"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref, defineProps, reactive } from "vue";
  import CommentShowItem from 'common/commentShow/CommentShowItem.vue';

  import { color } from 'utils/utils.js'

  const props = defineProps({
    messages: Array
  })

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

</script>

<style scoped>
  @import url('assets/css/common/common.css');
  @import url('assets/css/commentShow/commentShow.css');
</style>