<template>
  <header class="article-header">
    <h1 class="article-title">{{ title }}</h1>
    <div class="article-tips">
      <div class="article-push-time"><i class="fa fa-calendar-o fa-fw  box-rubber-band" aria-hidden="true"></i><span class="tips-item">{{ time }}</span></div>
      <div class="article-tag"><i class="fa fa-tag fa-fw box-rubber-band" aria-hidden="true"></i><a :href="tagLink"><span class="tips-item">{{ tagName }}</span></a></div>
      <div class="article-category"><i class="fa fa-folder-o fa-fw box-rubber-band" aria-hidden="true"></i><a :href="categoryLink"><span class="tips-item">{{ categoryName }}</span></a></div>
      <div class="article-eye"><i class="fa fa-eye fa-fw box-rubber-band" aria-hidden="true"></i><span class="tips-item">{{ eye }}℃</span></div>
    </div>
  </header>
</template>

<script setup>

  import {defineProps} from "vue";

  const props = defineProps({
    // 文章标题
    title:  {
      type: String,
      default: ''
    },
    // 发布时间
    time: {
      type: String,
      default: '0000·00·00'
    },
    // 标签链接
    tagLink: {
      type: String,
      default: ''
    },
    // 标签名称
    tagName: {
      type: String,
      default: ''
    },
    // 分类链接
    categoryLink: {
      type: String,
      default: ''
    },
    // 分类名称
    categoryName: {
      type: String,
      default: ''
    },
    // 已查看数量
    eye: {
      type: Number,
      default: 0
    }
  })
</script>

<style>

  @import url('assets/css/common/common.css');
  .article-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }

  .article-header .article-title {
    font-size: 30px;
    color: rgba(28, 149, 207,.4);
  }

  .article-header .article-title:hover {
    color: rgba(28, 149, 207,.8);
  }

  .article-header .article-tips {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .article-header .article-tips > div {
    padding: 10px;
    height: 100%;
  }

  .article-header .article-tips > div:hover {
    color: #6e0832;
  }

  .article-header .article-tips .article-push-time .tips-item,
  .article-header .article-tips .article-tag .tips-item,
  .article-header .article-tips .article-category .tips-item {
    border-bottom: 1px dashed rgba(0,0,0,.3);
  }

  .article-header .article-tips div {
    display: flex;
    align-items: center;
  }

  .article-header .article-tips div > i,
  .article-header .article-tips div .tips-item {
    color: rgba(0,0,0,.3);
  }

  .article-header .article-tips div:hover .tips-item {
    color: crimson;
  }

  @media screen and (max-width: 768px) {

    .article-header .article-title {
      font-size: 20px;
    }

    .article-header .article-tips {
      justify-content: space-evenly;
      margin-top: 10px;
    }

    .article-header .article-tips > div {
      font-size: 14px;
      flex-direction: column;
      padding: 0;
    }
  }
</style>