<template>
  <section>
    <section-header :bg="false" title="用户反馈"></section-header>
    <div class="feedback-container">
      <div class="feedback-inner scrollbar-y" @scroll="load">
        <feed-back-item v-for="(item, index) in feedbacks" :key="index"
                        :username="item.name" :time="item.time" :content="item.content"/>
      </div>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
  </section>
</template>

<script setup>
  import SectionHeader from "common/common/SectionHeader.vue"
  import FeedBackItem from 'views/admin/comments/FeedBackItem.vue'
  import {computed, ref} from "vue";

  const dataList = ref([])  // 数据数组
  const page = ref(1)  // 第几页
  const loading = ref(false)  // 加载数据

  const feedbacks = ref([
    {name: 'apecode', time: '2021-01-01', content: 'text'},
    {name: 'apecode', time: '2021-01-01', content: 'text'},
    {name: 'apecode', time: '2021-01-01', content: 'text'},
    {name: 'apecode', time: '2021-01-01', content: 'text'},
    {name: 'apecode', time: '2021-01-01', content: 'text'},
    {name: 'apecode', time: '2021-01-01', content: 'text'},
    {name: 'apecode', time: '2021-01-01', content: 'text'},
    {name: 'apecode', time: '2021-01-01', content: 'text'},
    {name: 'apecode', time: '2021-01-01', content: 'text'},
    {name: 'apecode', time: '2021-01-01', content: 'text'},
  ])

  const load = () => {
    loading.value = true
    if (!noMore.value) {
      setTimeout(() => {
        // scrollTop 滚动条滚动时，距离顶部的距离
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // windowHeight 可视区的高度
        let windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
        // scrollHeight 滚动条的总高度
        let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        // 滚动条到底部的条件
        if (scrollTop + windowHeight == scrollHeight) {
          // 加载数据
          if (loading.value) {
            loadMore()
          }
        }
        loading.value = false
      }, 1000)
    } else {
      loading.value = false
    }
  }

  const noMore = ref(computed(() => {
    return feedbacks.value.length >= 15
  }))

  const loadMore = () => {
    let s = {name: 'apecodewx', time: '2021-01-01', content: ' xxx'}
    feedbacks.value.push(s)
  }
</script>

<style scoped>
  section {
    margin-top: 20px;
  }

  .feedback-inner {
    max-height: 800px;
    overflow-y: auto;
    background: #20222a;
    border-radius: 6px;
    color: #ffffff;
  }

  .feedback-container p {
    margin-top: 5px;
    text-align: center;
    padding: 5px 0;
    color: #ffffff;
    font-weight: bolder;
    background: #20222a;
    border-radius: 6px;
  }
</style>