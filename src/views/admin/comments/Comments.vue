<template>
  <section class="comments-container">
    <section-header :bg="false" title="文章评论"/>
    <comment-show :data="comments.commentData.data"/>
    <section-header :bg="false" title="留言"/>
    <message-show />
  </section>
</template>

<script setup>
  import SectionHeader from "common/common/SectionHeader.vue"
  import CommentShow from 'views/admin/comments/CommentShow.vue'
  import MessageShow from 'views/admin/comments/MessageShow.vue'
  import {reactive} from "vue";

  const comments = reactive({
    commentData: {
      data: [
        {
          commentInfo: {username: '张三', homePage: 'https://liuyangxiong.cn'},
          replyInfo: {username: '李四', homePage: 'https://liuyangxiong.cn'},
          replyTime: '2021-01-01',
          showComment: true,
          articleInfo: {
            title: "关于我的博客开发历程",
            id: 'aaa',
            content: 'some text &#128536; some text some text some text\nsome text some text some text\nsome text some text',
            tag: 'Java',
            author: 'apecode'
          }
        },
        {
          commentInfo: {username: '王五', homePage: 'https://liuyangxiong.cn'},
          replyInfo: {username: '李四', homePage: 'https://liuyangxiong.cn'},
          replyTime: '2021-01-01',
          showComment: false,
          articleInfo: {
            title: "关于我的博客开发历程",
            id: 'aaa',
            content: 'some text &#128536; some text some text some text\nsome text some text some text\nsome text some text',
            tag: 'Java',
            author: 'apecode'
          }
        },
        {
          commentInfo: {username: '赵六', homePage: 'https://liuyangxiong.cn'},
          replyInfo: {username: '李四', homePage: 'https://liuyangxiong.cn'},
          replyTime: '2021-01-01',
          showComment: true,
          articleInfo: {
            title: "关于我的博客开发历程",
            id: 'aaa',
            content: 'some text &#128536; some text some text some text\nsome text some text some text\nsome text some text',
            tag: 'Java',
            author: 'apecode'
          }
        },
        {
          commentInfo: {username: '赵六', homePage: 'https://liuyangxiong.cn'},
          replyInfo: {username: '李四', homePage: 'https://liuyangxiong.cn'},
          replyTime: '2021-01-01',
          showComment: true,
          articleInfo: {
            title: "关于我的博客开发历程",
            id: 'aaa',
            content: 'some text &#128536; some text some text some text\nsome text some text some text\nsome text some text',
            tag: 'Java',
            author: 'apecode'
          }
        },
        {
          commentInfo: {username: '赵六', homePage: 'https://liuyangxiong.cn'},
          replyInfo: {username: '李四', homePage: 'https://liuyangxiong.cn'},
          replyTime: '2021-01-01',
          showComment: true,
          articleInfo: {
            title: "关于我的博客开发历程",
            id: 'aaa',
            content: 'some text &#128536; some text some text some text\nsome text some text some text\nsome text some text',
            tag: 'Java',
            author: 'apecode'
          }
        },
        {
          commentInfo: {username: '赵六', homePage: 'https://liuyangxiong.cn'},
          replyInfo: {username: '李四', homePage: 'https://liuyangxiong.cn'},
          replyTime: '2021-01-01',
          showComment: true,
          articleInfo: {
            title: "关于我的博客开发历程",
            id: 'aaa',
            content: 'some text &#128536; some text some text some text\nsome text some text some text\nsome text some text',
            tag: 'Java',
            author: 'apecode'
          }
        },
        {
          commentInfo: {username: '赵六', homePage: 'https://liuyangxiong.cn'},
          replyInfo: {username: '李四', homePage: 'https://liuyangxiong.cn'},
          replyTime: '2021-01-01',
          showComment: true,
          articleInfo: {
            title: "关于我的博客开发历程",
            id: 'aaa',
            content: 'some text &#128536; some text some text some text\nsome text some text some text\nsome text some text',
            tag: 'Java',
            author: 'apecode'
          }
        },
        {
          commentInfo: {username: '赵六', homePage: 'https://liuyangxiong.cn'},
          replyInfo: {username: '李四', homePage: 'https://liuyangxiong.cn'},
          replyTime: '2021-01-01',
          showComment: true,
          articleInfo: {
            title: "关于我的博客开发历程",
            id: 'aaa',
            content: 'some text &#128536; some text some text some text\nsome text some text some text\nsome text some text',
            tag: 'Java',
            author: 'apecode'
          }
        },
      ]
    }
  })
</script>

<style scoped>

</style>

<style>
  body {
    overflow: hidden;
  }
</style>