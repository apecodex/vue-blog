<template>
  <transition name="fade">
    <loading v-if="isLoading"></loading>
  </transition>
  <div class="articles-container">
    <div class="articles-inner">
      <button class="articles-back" @click="backBtn">返回</button>
      <h3 class="articles-title">{{ $route.query.name }}</h3>
      <div class="articles-content">
        <article-item v-for="(item, index) of articles" :year="item.year" :articles="item.data"></article-item>
      </div>
    </div>
  </div>
</template>

<script setup>
  import loading from 'components/loader/loading.vue'
  import ArticleItem from 'views/blog/acnav/category/articles/ArticleItem.vue'

  import {useRouter} from "vue-router";
  import {onMounted, ref} from "vue";


  const router = useRouter()

  // 加载loader...
  const isLoading = ref(true)

  onMounted(() => {
    isLoading.value = !isLoading.value
  })
  const backBtn = () => {
    router.back()
  }

  const articles = ref([
    {year: '2021', data: [{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'}]},
    {year: '2020', data: [{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'}]},
    {year: '2019', data: [{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'}]},
    {year: '2018', data: [{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'}]},
    {year: '2017', data: [{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'},{name: '关于我的博客开发历程', link: 'aaa'}]}
  ])
</script>

<style scoped>
  button.articles-back {
    padding: 2px 15px;
    border: 1px dashed #20222a;
    border-radius: 4px;
    background: transparent;
    outline: none;
    margin-left: 50%;
    transform: translateX(-50%);
  }

  .articles-title {
    margin-top: 20px;
    font-size: 50px;
    text-align: center;
  }
</style>