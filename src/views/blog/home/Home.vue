<template>
  <div class="home-container">
    <home-container>
      <!-- 通知 -->
      <template #notice>
        <notice notice="apecode notice"/>
      </template>
      <!-- 文章 -->
      <template #article>
        <article-comp :datetime="new Date()"
                      tag="标签"
                      :read="3000"
                      :comment="3000"
                      :like="3000"
                      articleId="###"
                      articleTitle="我的第一篇博客"
                      articleImg="###"/>
        <article-comp :datetime="new Date()"
                      tag="Java"
                      :read="528"
                      :comment="300"
                      :like="430"
                      articleId="##"
                      articleTitle="我的第二篇博客"
                      articleImg="##"/>
      </template>
      <!-- 搜索 -->
      <template #search>
        <search-comp></search-comp>
      </template>
      <!-- 个人信息 -->
      <template #information>
        <information-comp :author='information.author'
                          :description='information.description'
                          :link='information.link'
        ></information-comp>
      </template>
      <template #comments>
        <new-comments-comp>
          <template #content>
            <comments-item></comments-item>
            <comments-item></comments-item>
            <comments-item></comments-item>
            <comments-item></comments-item>
            <comments-item></comments-item>
          </template>
        </new-comments-comp>
      </template>
    </home-container>
  </div>
</template>

<script setup>
  import HomeContainer from 'common/container/HomeContainer.vue'
  import Notice from 'components/home/Notice.vue'
  import ArticleComp from 'components/home/ArticleComp.vue'
  import SearchComp from 'components/home/SearchComp.vue'
  import InformationComp from 'components/home/InformationComp.vue'
  import NewCommentsComp from 'components/home/NewCommentsComp.vue'
  import CommentsItem from 'components/home/newCommentsChild/CommentsItem.vue'

  import { reactive } from 'vue'
  const information = reactive({
    author: 'apecode',
    description: 'some description some description',
    link: [
      {'name': 'https://github.com/rookiesmile', 'icon': 'fa-github', isLink: true, 'description': 'https://github.com/rookiesmile'},
      {'name': 'wechat', 'icon': 'fa-weixin', isLink: false, 'description': 'apecodewx'},
      {'name': 'qq', 'icon': 'fa-qq', isLink: false, 'description': '1473018671'},
      {'name': 'email', 'icon': 'fa-envelope', isLink: false, 'description': 'apecode@qq.com'},
    ]
  })
</script>

<style scoped>
  .home-container {
    padding: 0 10vw;
    display: flex;
  }

  @media screen and (max-width: 1000px) {
    .home-container {
      padding: 0 5vw;
    }
  }

  @media screen and (max-width: 768px) {
    .home-container {
      flex-direction: column;
    }
  }

</style>