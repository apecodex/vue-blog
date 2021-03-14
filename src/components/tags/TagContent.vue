<template>
  <div class="tag-list">
    <ul>
      <li :style="{'background': color()}" class="box-rubber-band" v-for="(item, index) in tags" :key="index" @click="itemBtn(item)">
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
  <div class="tag-content">
    <div class="tag-title">{{ title }}</div>
    <div class="article-list">
      <ul>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><a href="#">4</a></li>
        <li><a href="#">5</a></li>
        <li><a href="#">6</a></li>
        <li><a href="#">7</a></li>
        <li><a href="#">8</a></li>
        <li><a href="#">9</a></li>
        <li><a href="#">10</a></li>
      </ul>
    </div>
  </div>
</template>

<script setup>
  import { color } from 'utils/utils.js'
  import { defineProps, computed, ref } from 'vue'
  import { useRouter, useRoute } from 'vue-router'

  const router = useRouter()
  const route = useRoute()

  const props = defineProps({
    tags: Array
  })

  router.replace("/tags/" + props.tags[0])

  const title = ref(computed(() => route.params.tag))

  const itemBtn = tag => {
    router.push("/tags/" + tag)
  }
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

  .tag-list ul li span {
    width: 100%;
    height: 100%;
    color: #fff;
    font-weight: bold;
  }

  .tag-list ul li:hover span {
    color: #333;
  }

  .tag-content {
    margin: 0 auto;
    padding: 10px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .tag-title {
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
