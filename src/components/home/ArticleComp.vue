<template>
  <div class="article box-border-white">
    <div class="datetime box-rubber-band">
      <div class="dm">
        <span class="day">{{monthHandle}}</span>
        <span class="month">{{dayHandle}}</span>
      </div>
      <span class="year">{{yearHandle}}</span>
    </div>
    <div class="article-content">
      <div class="article-title">
        <a :href="'article/' + articleId"><span class="box-rubber-band">{{articleTitle}}</span></a>
      </div>
      <div class="article-tigs">
        <ul class="article-tigs-list">
          <li class="article-tag box-rubber-band">
            <i class="fa fa-tag" aria-hidden="true"></i>
            <span>{{tag}}</span>
          </li>
          <li class="article-read box-rubber-band">
            <i class="fa fa-eye" aria-hidden="true"></i>
            <span>{{read}}℃</span>
          </li>
          <li class="article-comment box-rubber-band">
            <i class="fa fa-comment" aria-hidden="true"></i>
            <span>{{comment}}</span>
          </li>
          <li class="article-like box-rubber-band">
            <i class="fa fa-heart" aria-hidden="true"></i>
            <span>{{like}}</span>
          </li>
        </ul>
      </div>
      <div class="article-img">
        <a :href="'article/' + articleId">
          <img src="~assets/img/bg.png" alt="articleTitle">
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { defineProps, computed } from 'vue'

  const props = defineProps({
    datetime: Date,
    tag: String,
    read: Number,
    comment: Number,
    like: Number,
    articleId: String,
    articleTitle: String,
    articleImg: String
  });

  const dayHandle = computed(() => props.datetime.getDay() >= 10 ? props.datetime.getDay():'0'+props.datetime.getDay())
  const monthHandle = computed(() => (props.datetime.getMonth() + 1) >= 10 ? (props.datetime.getMonth() + 1) + '月':'0' + (props.datetime.getMonth() + 1) + '月')
  const yearHandle = computed(() => props.datetime.getFullYear())
</script>

<style>
  @import url('assets/css/home/article.css');
</style>