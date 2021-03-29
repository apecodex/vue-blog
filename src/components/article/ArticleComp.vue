<template>
  <transition name="fade">
    <loading v-if="isLoading"></loading>
  </transition>
  <section class="article-container">
    <div class="article-content">
      <article-content :title="articleData.title"
                       :time="articleData.time"
                       :tagLink="articleData.tagLink"
                       :tagName="articleData.tagName"
                       :categoryLink="articleData.categoryLink"
                       :categoryName="articleData.categoryName"
                       :eye="articleData.eye"

                       :text="text"></article-content>
    </div>
  </section>
</template>

<script setup>
import loading from 'components/loader/loading.vue'
import ArticleContent from 'components/article/ArticleContent.vue'

// 加载loader...
import {ref, onBeforeMount} from "vue";

const isLoading = ref(true)
const articleData = ref({})  // 文章数据
const text = ref('')

onBeforeMount(() => {
  articleData.value = {
    title: '我的第一篇博文',
    time: '2021·3·29',
    tagLink: '##',
    tagName: 'Java',
    categoryLink: '##',
    categoryName: '编程',
    eye: 3000
  }
  text.value = '\n' +
      '# heading 1\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      '\n' +
      '## heading 2\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      '\n' +
      '### heading 3\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      '\n' +
      '![avatar](https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg){{{width="100" height="auto"}}}\n' +
      '#### heading 3\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      '\n' +
      '##### heading 3\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      '\n' +
      '## heading 2\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      '::: tip\n' +
      '  dsa\n' +
      ':::'+
      '\n' +
      '###### heading 3\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      '\n' +
      '### heading 3 heading 3 heading 3 heading 3 heading 3\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      'contentcontentcontent\n' +
      ''
  isLoading.value = !isLoading.value;
})


</script>

<style scoped>
  section.article-container .article-content {
    padding: 0 10vw;
    margin-top: 5px;
  }

  @media screen and (max-width: 768px) {
    section.article-container .article-content {
      padding: 0 5vw;
    }
  }
</style>