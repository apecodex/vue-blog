<template>
  <div class="item">
    <span class="img">
    <a href="javascript:;">
      <img src="~assets/svg/login/avatar.svg" alt="" width="32" height="32">
    </a>
    </span>
    <div class="comment-content">
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
          <!-- 评论 -->
          <comment action="" rows="4" btnText="修改" :content="entitiestoUtf16(articleInfo.content)" :onSubmit="onSubmit"></comment>
        </el-popover>
      </div>
      <div class="content-box">
        <div class="article-title">
          <a :href="'/article/' + articleInfo.id" target="_blank">《{{ articleInfo.title }}》</a>
        </div>
        <div class="comment-text text-scrollbar-y">
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

  const onSubmit = (e, a) => {
    console.log(a);

    e.preventDefault()
  }
</script>

<style scoped>
  @import url('assets/css/admin/comments/commentShowItem.css');
</style>

<style>
  @media screen and (max-width: 768px){
    .popover-style {
      width: 100% !important;
    }
  }
</style>