<template>
  <ul class="article-item-ul">
    <li class="article-item-li year">{{ year }}</li>
    <li class="article-item-li" v-for="(item, index) of articles"><router-link :to="'/article/'+item.link"  class="article-item-a" >{{ item.name }}</router-link></li>
  </ul>
</template>

<script setup>
  import { defineProps } from 'vue'

  const props = defineProps({
    year: String,
    articles: Object
  })

</script>

<style scoped>
  .article-item-ul {
    margin: 15px 18vw;
    border: 1px dashed #20222a;
    padding: 5px;
    background: rgba(188, 187, 231, 0.08);
    border-radius: 8px;
    transition: .3s;
  }

  .article-item-ul:hover {
    border-color: #ffeb3b;
    background: rgba(0, 0, 0, 0.08);
  }

  .article-item-ul .article-item-li {
    padding: 2px 0;
    border-radius: 4px;
    transition: .3s;
  }

  .article-item-ul .article-item-li.year {
    padding-bottom: 10px;
    font-size: 30px;
    text-align: center;
    font-weight: bolder;
  }

  .article-item-ul .article-item-li:nth-child(n+2) {
    margin-bottom: 5px;
  }

  .article-item-ul .article-item-li:nth-child(n+2):hover {
    background: #20222a;
    cursor: url('assets/cursor/mouse2.cur'), auto;
  }

  .article-item-ul .article-item-li a {
    display: block;
  }

  .article-item-ul .article-item-li:hover a {
    color: #ffffff;
    margin-left: 10px;
  }

  @media screen and (max-width: 1000px) {
    .article-item-ul {
      margin: 15px 0;

    }
  }
</style>