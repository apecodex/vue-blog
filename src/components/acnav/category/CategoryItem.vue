<template>
  <div class="category-inner">
    <div class="category-content box-border-white" v-for="(item, index) in categoryList" :key="index">
      <router-link :to="{path: 'category/articles', query: {'name': item.name}}">
      <div class="category-img">
        <img :src="item.image" alt="">
      </div>
      <div class="category-title">{{ item.name }}</div>
      <div class="category-text"><p>{{ item.description }}</p></div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
  import { defineProps } from "vue";

  const props = defineProps({
    categoryList: Array
  });
</script>

<style scoped>
  @import url('assets/css/common/common.css');
  .category-inner {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .category-content {
    position: relative;
    margin-bottom: 25px;
    width: 279px;
    height: 200px;
  }

  .category-content .category-img {
    position: relative;
    height: 140px;
    width: 100%;
    padding: 10px;
    border-radius: 6px;
    overflow: hidden;
  }

  .category-content .category-img img {
    width: 100%;
    background-size: cover;
    transform: scale(1.2);
    transition: .5s ease;
  }

  .category-content .category-img::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .3);
    z-index: 1;
  }

  .category-content .category-img:hover img {
    transform: scale(1.4);
  }

  .category-title{
    position: absolute;
    top: 35%;
    left: 0;
    right: 0;
    text-align: center;
    color: #fff;
    font-size: 22px;
    z-index: 1;
  }

  .category-title:hover {
    color: tomato;
  }

  .category-text {
    margin-top: 10px;
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    .category-inner {
      justify-content: center;
    }

    .category-content {
      width: 100%;
    }
  }
</style>