<template>
  <transition name="fade">
    <loading v-if="isLoading"></loading>
  </transition>
  <section class="article-container">
    <div class="article-content">
      <article-content></article-content>
    </div>
  </section>
</template>

<script setup>
import loading from 'components/loader/loading.vue'
import ArticleContent from 'components/article/ArticleContent.vue'

// 加载loader...
import {onMounted, ref, nextTick} from "vue";

const isLoading = ref(true)

onMounted(() => {
  isLoading.value = !isLoading.value;
})

</script>

<style scoped>
  section.article-container .article-content {
    padding: 0 10vw;
  }

  @media screen and (max-width: 768px) {
    section.article-container .article-content {
      padding: 0 5vw;
    }
  }
</style>