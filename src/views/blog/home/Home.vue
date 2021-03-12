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
        <search-comp />
      </template>
      <!-- 个人信息 -->
      <template #information>
        <information-comp :head="information.head"
                          :author='information.author'
                          :description='information.description'
                          :link='information.link'
        />
      </template>
      <!-- 最新评论 -->
      <template #comments>
        <box-comp>
          <template #title>最新评论</template>
          <template #content>
            <comments-item link="##"
                          head="https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg"
                          commentUser="apecode1"
                          text="some text some text some text some text some text "
                          articleTitle="我的博文1"/>
            <comments-item link="##"
                          head="https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg"
                          commentUser="apecode2"
                          text="some text some text some"
                          articleTitle="我的博文2"/>
            <comments-item link="##"
                          head="https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg"
                          commentUser="apecode3"
                          text="some text some text some text s"
                          articleTitle="我的博文3"/>
            <comments-item link="##"
                          head="https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg"
                          commentUser="apecode4"
                          text="some text some text e text some text "
                          articleTitle="我的博文4"/>
            <comments-item link="##"
                          head="https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg"
                          commentUser="apecode5"
                          text="some text some text some text "
                          articleTitle="我的博文5"/>
          </template>
        </box-comp>
      </template>
      <!-- 最热文章 -->
      <template #hotArticle>
        <box-comp>
          <template #title>最热文章</template>
          <template #content>
            <hot-article-item title="我的博文" :num="2890"></hot-article-item>
            <hot-article-item title="我的博文" :num="2530"></hot-article-item>
            <hot-article-item title="我的博文" :num="1640"></hot-article-item>
            <hot-article-item title="我的博文" :num="890"></hot-article-item>
            <hot-article-item title="我的博文" :num="680"></hot-article-item>
            <hot-article-item title="我的博文" :num="50"></hot-article-item>
          </template>
        </box-comp>
      </template>
      <!-- 热门标签 -->
      <template #hotTags>
        <box-comp>
          <template #title>热门标签</template>
          <template #content>
            <hot-tag :tags="tags"></hot-tag>
          </template>
        </box-comp>
      </template>
      <!-- 友链 -->
      <template #friendLink>
        <box-comp>
          <template #title>友情链接</template>
          <template #content>
            <friend-link></friend-link>
          </template>
        </box-comp>
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
  import boxComp from 'common/boxComp.vue'
  import CommentsItem from 'components/home/newComments/CommentsItem.vue'
  import HotArticleItem from 'components/home/hotArticle/HotArticleItem.vue'
  import HotTag from 'components/home/hotTag/HotTag.vue'
  import FriendLink from 'components/home/friendLink/FriendLink.vue'

  import { reactive, ref } from 'vue'
  const information = reactive({
    head: 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg',
    author: 'apecode',
    description: 'some description some description',
    link: [
      {'name': 'https://github.com/rookiesmile', 'icon': 'fa-github', isLink: true, 'description': 'https://github.com/rookiesmile'},
      {'name': 'wechat', 'icon': 'fa-weixin', isLink: false, 'description': 'apecodewx'},
      {'name': 'qq', 'icon': 'fa-qq', isLink: false, 'description': '1473018671'},
      {'name': 'email', 'icon': 'fa-envelope', isLink: false, 'description': 'apecode@qq.com'},
    ]
  })

  const tags = ref(['Java', 'Python', 'Go', 'Linux', 'Servlet', 'Tomcat', '算法', '日常', '学习']);
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