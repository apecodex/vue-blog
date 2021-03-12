<template>
  <div class="hot-article-content">
    <a href="#">
      <div class="article-title">{{ title }}</div>
      <div class="article-hot-num">{{ num }}℃</div>
    </a>
  </div>
</template>

<script setup>
  import { defineProps } from "vue";

  const porps = defineProps({
    title: String,
    num: Number
  });
</script>

<style scoped>

  .hot-article-content a {
    padding: 6px 5px;
    display: flex;
    justify-content: space-between;
    transition: .5s ease;
    border-bottom: 1px dotted rgba(0, 0, 0, .1);
  }
  .article-title {
    margin-top: 2px;
    font-family: 'Times New Roman', Times, serif;
    font-size: 12px;
  }

  .article-hot-num {
    padding: 2px 6px;
    color: #fff;
    font-weight: bolder;
    border-radius: 24px;
    background: orangered;
    font-size: 12px;
  }
  
  .hot-article-content a:hover {
    background: rgba(0, 0, 0, .2);
    border-radius: 4px;
    border-bottom: 1px dotted transparent;
  }

  .hot-article-content a:hover > .article-hot-num {
    color: #666;
    background: rgba(30, 202, 173, 0.4);
  }
</style>