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
            @click.prevent="handleAnchorClick(anchor)" :data-title="anchor.title" :data-index="anchor.lineIndex">
          <a style="cursor: pointer" href="#">{{ anchor.title }}</a></li>
      </ul>
      </div>
    <div class="article-main box-border-white">
      <v-md-editor v-model="text" mode="preview" ref="editor"></v-md-editor>
    </div>
  </div>
</template>

<script setup>
import {onMounted, onBeforeUnmount, nextTick, ref} from 'vue'

const navDom = ref(null);
const navShow = ref(false)

const editor = ref(null)
const titles = ref([])

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
  let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop; //滚动高度
  if (scrollHeight <= 307) {
    navDom.value.style.position = 'absolute'
  }
  if (scrollHeight >= 307) {
    navDom.value.style.position = 'fixed'
  }
}

const navBtn = () => {
  navShow.value = !navShow.value
}


const text = ref('\n' +
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
    '')
</script>

<style>

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
    width: 200px;
    background: linear-gradient(60deg, rgba(169, 164, 177, 0.3) 0%, rgba(0,172,193,.3) 100%);
    border-radius: 6px 0 0 6px;
    animation-name: changeWidth;
    animation-duration: 1s;
  }

  #check {
    display: none;
  }

  .article-inner .article-nav ul li {
  }

  .article-inner .article-nav ul li:hover {
    background: rgba(0,0,0,.3);
  }
  
  .article-inner .article-nav ul li a {
    display: block;
    width: 100%;
    text-indent: .5em;
    color: crimson;
    font-weight: 600;
  }

  .article-inner .article-main {
    position: relative;
    flex: 1;
  }

  @keyframes changeWidth {
    from {
      width: 0;
    }
    to {
      width: 200px;
    }
  }

  @media screen and (max-width: 1000px) {

    .article-inner .article-nav {
      width: 150px;
    }

    .article-inner .article-nav #btn {
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    .article-inner .article-nav {
    }
  }
</style>