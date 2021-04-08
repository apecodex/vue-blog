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
      <article-footer></article-footer>
      <div class="hr">有何感想，评论一下吧</div>
      <comment rows="5"
               actionUrl=""
               method="get"
               :submitFunc="submit"
               btnText="留言"/>
      <div class="h20"></div>
      <comment-show :messages="messages"/>

    </div>
  </section>
</template>

<script setup>
import loading from 'components/loader/loading.vue'
import ArticleContent from 'components/article/ArticleContent.vue'
import ArticleFooter from 'components/article/ArticleFooter.vue'

import Comment from 'common/comment/Comment.vue'  // 评论组件
import CommentShow from 'common/commentShow/CommentShow.vue';

// 加载loader...
import {ref, onBeforeMount, reactive} from "vue";

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

const messages = reactive([
  {'head': 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg', 'username': 'apecode', 'time': '2021·3·22', 'text': 'some message some message',
    'replyMessages': [
      {'head': 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg', 'username': 'apecodewx', 'replyUsername': 'apecode', 'time': '2021·3·22', 'text': 'some message some message'},
      {'head': 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg', 'username': '张三', 'replyUsername': 'apecode', 'time': '2021·3·22', 'text': 'some message some message'},
      {'head': 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg', 'username': '小王', 'replyUsername': 'apecode', 'time': '2021·3·22', 'text': 'some message some message'},

    ]},
  {'head': 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg', 'username': 'apecode', 'time': '2021·3·22', 'text': 'some message some message',
    'replyMessages': [
      {'head': 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg', 'username': 'apecodewx', 'replyUsername': 'apecode', 'time': '2021·3·22', 'text': 'some message some message'},
      {'head': 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg', 'username': '张三', 'replyUsername': 'apecode', 'time': '2021·3·22', 'text': 'some message some message'},
      {'head': 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg', 'username': '小王', 'replyUsername': 'apecode', 'time': '2021·3·22', 'text': 'some message some message'},

    ]},
  {'head': 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg', 'username': 'apecode', 'time': '2021·3·22', 'text': 'some message some message',
    'replyMessages': [
      {'head': 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg', 'username': 'apecodewx', 'replyUsername': 'apecode', 'time': '2021·3·22', 'text': 'some message some message'},
      {'head': 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg', 'username': '张三', 'replyUsername': 'apecode', 'time': '2021·3·22', 'text': 'some message some message'},
      {'head': 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg', 'username': '小王', 'replyUsername': 'apecode', 'time': '2021·3·22', 'text': 'some message some message'},

    ]},
  {'head': 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg', 'username': 'apecode', 'time': '2021·3·22', 'text': 'some message some message',
    'replyMessages': [
      {'head': 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg', 'username': 'apecodewx', 'replyUsername': 'apecode', 'time': '2021·3·22', 'text': 'some message some message'},
      {'head': 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg', 'username': '张三', 'replyUsername': 'apecode', 'time': '2021·3·22', 'text': 'some message some message'},
      {'head': 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg', 'username': '小王', 'replyUsername': 'apecode', 'time': '2021·3·22', 'text': 'some message some message'},

    ]},
  {'head': 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg', 'username': 'apecode', 'time': '2021·3·22', 'text': 'some message some message',
    'replyMessages': [
      {'head': 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg', 'username': 'apecodewx', 'replyUsername': 'apecode', 'time': '2021·3·22', 'text': 'some message some message'},
      {'head': 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg', 'username': '张三', 'replyUsername': 'apecode', 'time': '2021·3·22', 'text': 'some message some message'},
      {'head': 'https://i.loli.net/2021/03/12/xCdGnVRzkl8Kqwc.jpg', 'username': '小王', 'replyUsername': 'apecode', 'time': '2021·3·22', 'text': 'some message some message'},

    ]},
])

const submit = (e, a) => {
  console.log("do some");
  console.log(a);

  e.preventDefault()
}

</script>

<style scoped>

  section.article-container .article-content {
    padding: 0 20vw;
    margin-top: 5px;
  }
  section.article-container .article-content .hr {
    margin-top: 20px;
    padding-top: 10px;
    width: 100%;
    color: crimson;
    font-size: 20px;
    font-weight: bolder;
    border-top: 1px dashed rgba(0,0,0,.3);
  }

  .article-content > div {
    margin: 0;
  }

  .h20 {
    height: 20px;
  }

  @media screen and (max-width: 768px) {
    section.article-container .article-content {
      padding: 0 5vw;
    }
  }
</style>