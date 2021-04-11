<template>
  <div class="item">
    <span class="img">
    <a href="javascript:;">
      <img src="~assets/svg/login/avatar.svg" alt="" width="32" height="32">
    </a>
    </span>
    <div class="message-content">
      <div class="header">
        <a :href="commentInfo.homePage">{{ commentInfo.username }}</a>
        <span>回复</span>
        <a :href="replyInfo.homePage">{{ replyInfo.username }}</a>
        <small>{{ replayTime }}</small>
        <button :class="{'show':commentShowBtn, 'no-show': !commentShowBtn}" @click="showBtn">{{ commentShowBtn ? '不展示':'展示' }}</button>
        <el-popover
            placement="bottom"
            :width="400"
            trigger="click"
            popper-class="popover-style"
        >
          <template #reference>
            <button class="fix-btn">修改</button>
          </template>
          <comment rows="5" actionUrl="" placeholder="" :content="entitiestoUtf16(articleInfo.content)" :submitFunc="submit" btnText="修改"></comment>
        </el-popover>
      </div>
      <div class="content-box">
        <div class="article-title">
          <a :href="'/article/' + articleInfo.id" target="_blank">《{{ articleInfo.title }}》</a>
        </div>
        <div class="message-text">
          <p v-for="(item, index) in content(articleInfo.content)" :key="index">
            {{ item }}
          </p>
        </div>
        <div class="article-info">
          <span><i class="fa fa-tag fa-fw"></i>{{ articleInfo.tag }}</span>
          <span><i class="fa fa-user fa-fw"></i>{{ articleInfo.author }}</span>
          <button class="toLink"><a :href="'/article/' + articleInfo.id" target="_blank">去看看</a></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Comment from "common/comment/Comment.vue"

  import {defineProps, ref} from "vue";
  import {entitiestoUtf16, utf16toEntities} from 'utils/utils.js'

  const props = defineProps({
    commentInfo: {},  // 评论者信息
    replyInfo: {},  // 被评论者信息
    replayTime: String,  // 评论时间
    showComment: {  // 是否展示
      type: Boolean,
      default: true
    },
    articleInfo: {}  // 文章信息
  })

  // 处理换行
  const content = ref(text => {
    text = entitiestoUtf16(text)
    return text.split('\n')
  })
  // 处理是否展示该评论
  const commentShowBtn = ref(props.showComment)

  const showBtn = () => {
    commentShowBtn.value = !commentShowBtn.value
  }

  const submit = (e, a) => {
    console.log(a);

    e.preventDefault()
  }
</script>

<style scoped>
  .item {
    display: flex;
    align-items: baseline;
    width: 100%;
    border-bottom: 1px solid rgb(0, 0, 0);
    padding: 15px 10px;
    margin-bottom: 15px;
  }

  .item span.img {
    margin-right: 15px;
  }

  .item span a {
    display: inline-block;
    width: 32px;
    height: 32px;
  }

  .item span.img img {
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    vertical-align: middle;
  }

  .message-content {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .message-content .header {
    font-size: 16px;
  }

  .message-content .header a {
    font-weight: bolder;
    color: #ffffff;
  }

  .message-content .header a:hover {
    color: #03a9f4;
  }

  .message-content .header span {
    color: #999999;
    margin: 0 5px;
  }

  .message-content .header small {
    margin-left: 16px;
    color: #666666;
  }

  .message-content .header button {
    outline: none;
    border-radius: 4px;
    border: none;
    padding: 2px 10px;
    color: #ffffff;
    margin: 0 8px;
    transition: .3s;
  }

  .fix-btn {
    color: #ffffff;
    background: #4c267e;
  }

  .fix-btn:hover {
    background: #000;
  }

  .show {
    background: #149708;
  }

  .no-show {
    background: darkred;
  }

  .content-box {
    position: relative;
    margin-top: 12px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    border-radius: 6px;
    padding: 8px 10px;
    background: #111111;
  }

  .content-box .article-title a {
    font-size: 12px;
    padding: 0 0 3px;
    color: #999999;
    border-bottom: 1px dashed #f0c688;
    transition: .3s;
  }

  .content-box .article-title a:hover {
    color: #149708;
    border-bottom-color: #4c267e;
  }

  .content-box .message-text {
    margin: 10px 55px 10px 0;
    color: #ffffff;
  }

  .content-box .article-info {
    color: #666666;
  }

  .content-box .article-info span {
    margin-right: 5px;
  }

  .content-box .article-info span:first-child i {
    color: #4c267e;
  }

  .content-box .article-info span:last-child i {
    color: #f0c688;
  }

  .content-box .toLink {
    position: absolute;
    top: 10px;
    right: 10px;
    outline: none;
    background: transparent;
    padding: 2px 5px;
    border: 1px dashed #666666;
    border-radius: 4px;
    font-size: 12px;
    z-index: 9;
    transition: .3s;
  }

  .content-box .toLink a {
    color: #666666;
  }

  .content-box .toLink:hover {
    border-color: #f0c688;
    color: #f0c688;
    cursor: url('assets/cursor/mouse2.cur'), auto;
  }

  .content-box .toLink:hover a {
    color: #f0c688;
  }

  @media screen and (max-width: 768px){

    .content-box .message-text {
      margin: 10px 0;
    }
    .content-box .toLink {
      position: static;
    }
  }
</style>

<style>
  @media screen and (max-width: 768px){
    .popover-style {
      width: 100% !important;
    }
  }
</style>