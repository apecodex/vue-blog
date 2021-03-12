// 最新评论
<template>
  <div class="new-comments-content">
    <a :href="link">
      <div class="new-comments-head rotate-img" >
        <img :src="head" :alt="commentUser">
      </div>
      <div class="new-comments-nc">
        <div class="new-comments-username">{{ commentUser }}</div>
        <div class="new-comments-text">
          <p>{{ text }}</p>
        </div>
      </div>
    </a>
    <div class="comments-article-title">
      《{{ articleTitle }}》
    </div>
  </div>

</template>

<script setup>
  import { defineProps } from "vue";

  const props = defineProps({
    link: String,
    head: String,
    commentUser: String,
    text: String,
    articleTitle: String
  });
</script>

<style scoped>
  @import url('assets/css/home/newCommentsItem.css');
</style>