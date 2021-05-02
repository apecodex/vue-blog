<template>
  <section-header title="文章列表"></section-header>
  <article-list />
  <br>
  <my-pagination :currentPage="currentPage" :totalPage="10"/>
</template>

<script setup>
  import SectionHeader from 'common/common/SectionHeader.vue'
  import ArticleList from 'views/admin/articles/ArticleList.vue'

  const currentPage = (current) => {
    console.log(current)
  }
</script>

<style scoped>

</style>