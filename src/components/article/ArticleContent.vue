<template>
  <div class="article-inner">
    <div class="article-nav" ref="navDom">
      <input type="checkbox" id="check">
      <label for="check">
        <i class="fa" aria-hidden="true" id="btn" @click="navBtn" :class="{'fa-times': navShow,'fa-list': !navShow}"></i>
      </label>
      <ul class="article-nav-ul" v-show="navShow">
        <li v-for="anchor in titles"
            :style="{ padding: `5px 0 5px ${anchor.indent * 15}px` }"
            @click.prevent="handleAnchorClick(anchor)" :data-scroll="anchor.scroll">
          <a style="cursor: pointer" href="#">{{ anchor.title }}</a></li>
      </ul>
      </div>
    <div class="article-main box-border-white">
      <article-header :title="title" :time="time" :tagLink="tagLink" :tagName="tagName" :categoryLink="categoryLink" :categoryName="categoryName" :eye="eye"></article-header>
      <v-md-editor v-model="text" mode="preview" ref="editor"></v-md-editor>
    </div>
  </div>
</template>

<script setup>
import {onMounted, onBeforeUnmount, nextTick, ref, defineProps} from 'vue'
import ArticleHeader from 'components/article/ArticleHeader.vue'

const navDom = ref(null);
const navShow = ref(false)

const editor = ref(null)
const titles = ref([])  // 获取所有h标签

const props = defineProps({
  title: String,  // 文章标题
  time: String,  // 发布时间
  tagLink: String,  // 标签链接
  tagName: String,  // 标签名称
  categoryLink: String,  // 分类链接
  categoryName: String,  // 分类名称
  eye: Number,  // 已查看数量
  text: String // 文章内容
})


onMounted(() => {
  nextTick(() => {
    window.addEventListener("scroll", handleScroll); // 监听（绑定）滚轮滚动事件
  });

  // 获取文章中所有的h标签
  const anchors = editor.value.$el.querySelectorAll('.v-md-editor-preview h1,h2,h3,h4,h5,h6');
  titles.value = Array.from(anchors).filter((title) => !!title.innerText.trim());
  if (!titles.value.length) {
    titles.value = [];
    return;
  }

  const hTags = Array.from(new Set(titles.value.map((title) => title.tagName))).sort();

  titles.value = titles.value.map((el) => ({
    title: el.innerText,
    lineIndex: el.getAttribute('data-v-md-line'),
    indent: hTags.indexOf(el.tagName),
  }));

  // 获取滚动的位置
  for (let t of titles.value) {
    const heading = editor.value.$el.querySelector(
        `.v-md-editor-preview [data-v-md-line="${t.lineIndex}"]`
    );
    t['scroll'] = heading.offsetTop + 400
  }
})

const handleAnchorClick = (anchor) => {
  const {lineIndex} = anchor;
  const heading = editor.value.$el.querySelector(
      `.v-md-editor-preview [data-v-md-line="${lineIndex}"]`
  );
  if (heading) {
    editor.value.previewScrollToTarget({
      target: heading,
      scrollContainer: window,
      top: 0,
    })
  }
}

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
})

const handleScroll = () => {
  let temp = []
  let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop; //滚动高度

  for (let t of titles.value) {
    document.querySelector(
        `.article-nav-ul [data-scroll="${t.scroll}"]`
    ).style.background = 'transparent'
    if (scrollHeight >= t.scroll) {
      temp[0] = t.scroll
    }
  }
  if (temp.length !== 0) {
    const list = document.querySelector(
        `.article-nav-ul [data-scroll="${temp[0]}"]`
    );

    if (list.getAttribute('data-scroll') == temp[0]) {
      list.style.background = 'rgba(0,0,0,.6)'
    }
  }
  if (scrollHeight <= 307) {
    navDom.value.style.position = 'absolute'
  }
  if (scrollHeight >= 307) {
    navDom.value.style.position = 'fixed'
  }
}
// 展示目录列表
const navBtn = () => {
  navShow.value = !navShow.value
}

</script>

<style scoped>

@import url('assets/css/common/common.css');
  .article-inner {
    display: flex;
    justify-content: space-between;
  }

  .article-inner .article-nav {
    position: absolute;
    top: 5px;
    right: 0;
    z-index: 1;
  }

  .article-inner .article-nav #btn {
    position: absolute;
    top: -5px;
    right: 10px;
    font-size: 30px;
    color: brown;
  }

  .article-inner .article-nav ul {
    margin-top: 30px;
    width: 300px;
    box-shadow: 0 0 5px 2px rgba(0,0,0,.3);
    background: rgba(0,0,0,.1);
    border-radius: 6px 0 0 6px;
    animation-name: changeWidth;
    animation-duration: 1s;
    overflow: hidden;
  }

  #check {
    display: none;
  }

  .article-inner .article-nav ul li {
    transition: .3s;
  }

  .article-inner .article-nav ul li a {
    display: block;
    width: 100%;
    text-indent: .5em;
    color: #000000;
    font-weight: 600;
    transition: .3s;
  }

  .article-inner .article-nav ul li:hover a {
    color: crimson;
    font-weight: 900;
    text-indent: .6em;
  }

  .article-inner .article-main {
      position: relative;
      flex: 1;
    }


  @media screen and (max-width: 1000px) {

    .article-inner .article-nav {
      width: 150px;
    }

    .article-inner .article-nav #btn {
      display: none;
    }
  }

</style>

<style>
  .v-md-editor-preview img {
    margin-left: 50%;
    transform: translateX(-50%);
  }

  @keyframes changeWidth {
    from {
      width: 0;
    }
    to {
      width: 300px;
    }
  }

  @media screen and (max-width: 768px) {
    .v-md-editor-preview {
      padding: 10px 0;
    }
  }
</style>