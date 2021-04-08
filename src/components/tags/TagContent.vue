<template>
  <div class="tag-list">
    <ul>
      <li :style="{'background': color()}" class="box-rubber-band" v-for="(item, index) in tags" :key="index" @click="itemBtn">
        <router-link :to="{query: {tag: item}}">{{ item }}</router-link>
      </li>
    </ul>
  </div>
  <div class="tag-content" v-show="tagContentShow">
    <div class="tag-title">{{ $route.query.tag }}</div>
    <article-item v-for="(item, index) of articles" :year="item.year" :articles="item.data"></article-item>
  </div>
</template>

<script setup>
  import ArticleItem from 'views/blog/acnav/category/articles/ArticleItem.vue'

  import { color } from 'utils/utils.js'
  import {defineProps, computed, ref, onMounted} from 'vue'
  import {useRoute} from "vue-router";

  const route = useRoute()
  const tagContentShow = ref(false)

  const props = defineProps({
    tags: Array
  })

  onMounted(() => {
    itemBtn()
  })

  const itemBtn = () => {
    if (route.query.tag) {
      console.log('ok')
      tagContentShow.value = true
      return
    }
    tagContentShow.value = false
  }

  const articles = ref([
    {year: '2021', data: [{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'}]},
    {year: '2020', data: [{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'}]},
    {year: '2019', data: [{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'}]},
    {year: '2018', data: [{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'}]},
    {year: '2017', data: [{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'}]}
  ])
</script>

<style>
  @import url('assets/css/common/common.css');

  .tag-list {
    background: rgba(0, 0, 0, .05);
    padding: 5px 10px;
    margin-bottom: 15px;
    border-radius: 8px;
    box-shadow: 0 0 5px 2px rgba(84, 172, 223, 0.3),
                0 0 5px 2px rgba(84, 172, 223, 0.1) inset;
  }

  .tag-list:hover {
    box-shadow: 0 0 5px 1px rgba(84, 191, 223, 0.8),
            0 0 5px 1px rgba(84, 172, 223, 0.1) inset;
  }

  .tag-list ul {
    display: flex;
    flex-wrap: wrap;
  }

  .tag-list ul li {
    margin: 5px;
    padding: 3px 6px;
    font-size: 16px;
    border-radius: 4px;
    background: #ccc;
    transition: .5s ease;
    cursor: url('assets/cursor/mouse2.cur'), auto;
  }

  .tag-list ul li:hover {
    background: rgba(0, 0, 0, .3) !important;
  }

  .tag-list ul li a {
    width: 100%;
    height: 100%;
    color: #fff;
    font-weight: bold;
  }

  .tag-list ul li:hover a {
    color: #333;
  }

  .tag-title {
    text-align: center;
    padding: 5px 15px;
    margin: 5px 0;
    color: maroon;
    font-weight: bolder;
    font-size: 40px;
  }

  .article-list {
    padding: 5px 0;
    width: 100%;
  }

  .article-list ul {
    padding: 10px 0;
    background: rgba(0, 0, 0, .05);
    border-radius: 8px;
  }

  .article-list ul li {
    margin: 5px 0;
    padding: 3px 0;
    font-size: 18px;
    text-indent: 1.5em;
  }
  
  .article-list ul li a {
    display: block;
    width: 100%;
    color: salmon;
  }
  
  .article-list ul li:hover {
    background: rgba(84, 172, 223, 0.3);
    font-weight: bolder;
  }
  
  .article-list ul li:hover a {
    color: orangered;
  }
  @media screen and (max-width: 1000px) {
    .article-list ul li {
      text-indent: 1em;
    }
  }
</style>
