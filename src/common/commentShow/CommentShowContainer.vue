<template>
  <comment-show>
    <template #showItem>
      <comment-show-item>
        <template #replyItem>
<!--          <comment-show-reply></comment-show-reply>-->
          <comment-show></comment-show>
        </template>
      </comment-show-item>
    </template>
  </comment-show>
</template>

<script setup>
  import CommentShow from 'common/commentShow/CommentShow.vue';
  import CommentShowItem from 'common/commentShow/CommentShowItem.vue';
  import CommentShowReply from 'common/commentShow/CommentShowReply.vue';
</script>

<style scoped>
</style>