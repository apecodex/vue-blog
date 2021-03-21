<template>
  <div class="information-inner box-border-white">
    <div class="information-name">
      <i class="fa fa-tint fa-fw" aria-hidden="true"></i>
      <h1>{{ author }}</h1>
      <i class="fa fa-tint fa-fw" aria-hidden="true"></i>
    </div>
    <div class="information-content">
      <div class="information-img">
        <img :src="head" :alt="author">
      </div>
      <div class="information-description box-rubber-band">
        <p>{{ description }}</p>
      </div>
      <div class="information-link">
        <ul>
          <li v-for="(item, index) in link" :key="index">
            <a v-if="item.isLink" :href="item.name" target="_blank"><i class="fa" :class="item.icon" aria-hidden="true" @mouseover="showMsg(item.description)" @mouseleave="closeMsg(item.description)"></i></a>
            <a v-else href="javascript:void(0)" class="no-link-cursor"><i class="fa" :class="item.icon" aria-hidden="true" @mouseover="showMsg(item.description)" @mouseleave="closeMsg(item.description)"></i></a>
          </li>
        </ul>
      </div>
      <div class="link-tips">{{ showText }}</div>
      <div class="erweima-box">
        <div class="erweima" v-show="supportShow">
          <div class="wechat-box">
            <img src="~assets/img/wechat.png" alt="wechat">
            <span>微信</span>
          </div>
          <div class="alipay-box">
            <img src="~assets/img/alipay.png" alt="alipay">
            <span>支付宝</span>
          </div>
        </div>
        <div class="erweima-btn" @click.stop="supportShowBtn"><i class="fa fa-thumbs-up fa-fw" aria-hidden="true"></i>支持</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { defineProps, ref } from 'vue'

  const props = defineProps({
    'head': String,
    'author': String,
    'description': String,
    'link': Array
  });

  const isShow = ref(true)
  const showText = ref('')
  const supportShow = ref(false)


  const showMsg = (description) => {
    isShow.value = !isShow.value
    showText.value = description
  }
  const closeMsg = (description) => {
    isShow.value = !isShow.value
    showText.value = ''
  }

  const supportShowBtn = () => {
    supportShow.value = !supportShow.value
  }

  // 点击其他地方关闭支持窗口
  document.body.onclick = () => {
    if (supportShow.value) {
      supportShow.value = !supportShow.value
    }
  }
</script>

<style scoped>
  @import url('assets/css/home/informationComp.css');

  .show-msg {
    display: block !important;
  }

  .close-msg {
    display: none !important;
  }

  .no-link-cursor {
    cursor: url('assets/cursor/mouse1.cur'), auto;
  }
</style>