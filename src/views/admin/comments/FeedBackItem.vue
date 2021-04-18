<template>
  <div class="feedback-item">
    <span class="img">
      <a href="#">
        <img src="~assets/svg/login/avatar.svg" alt="">
      </a>
    </span>
    <div class="feedback-content">
      <div class="feedback-header">
        <a href="##">{{ username }}</a>
        <span>{{ time }}</span>
      </div>
      <div class="feedback-text">{{ content }}</div>
    </div>
  </div>
</template>

<script setup>
  import {defineProps} from "vue";

  const props = defineProps({
    username: String,
    time: String,
    content: String
  })
</script>

<style scoped>
.feedback-item {
  display: flex;
  align-items: baseline;
  width: 100%;
  padding: 10px;
}

.feedback-item span.img {
  margin-right: 15px;
}

.feedback-item span a {
  display: inline-block;
  width: 40px;
  height: 40px;
}

.feedback-item span.img img {
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  vertical-align: middle;
}

.feedback-item .feedback-content {
  width: 100%;
}

.feedback-item .feedback-content .feedback-header a {
  color: #ffffff;
}

.feedback-item .feedback-content .feedback-header span {
  margin-left: 8px;
  font-size: 12px;
  color: #999999;
}

.feedback-item .feedback-text {
  margin-top: 10px;
  border: 1px dashed #ffffff;
  border-radius: 4px;
  padding: 5px;
}
</style>