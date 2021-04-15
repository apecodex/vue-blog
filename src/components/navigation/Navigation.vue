<template>
  <nav class="navigation">
    <div class="logo">
      <a href="/">
        <svg x="0" y="0" width="210" height="80" viewBox="0 0 210 80">
          <symbol id="line-text">
            <text text-anchor="middle" x="50%" y="70%">
              {{ logo }}
            </text>
          </symbol>
          <use xlink:href="#line-text" class="text"></use>
          <use xlink:href="#line-text" class="text"></use>
          <use xlink:href="#line-text" class="text"></use>
          <use xlink:href="#line-text" class="text"></use>
        </svg>
      </a>
    </div>
    <div class="nav-menu" :class="{'open': burger}" ref="navMenuRef"><slot name="nav-menu-item"/></div>
    <div class="burger" :class="{'active': burger, 'close': !burger}" @click="burgerBtn">
      <div class="top-line"></div>
      <div class="middle-line"></div>
      <div class="bottom-line"></div>
    </div>
  </nav>
  <!-- 波浪区域 -->
  <div>
    <!-- svg 形状 -->
    <svg class="waves" viewBox="0 24 150 28"
        preserveAspectRadio="none" shape-rendering="auto">
        <!-- 形状容器 -->
      <defs>
        <path id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 30 v15h-652z"/>
      </defs>
      <!-- 组合形态 -->
      <g class="parallax">
        <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.6)"/>
        <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)"/>
        <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.4)"/>
        <use xlink:href="#gentle-wave" x="48" y="6" fill="rgba(255,255,255,0.3)"/>
        <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff"/>
      </g>
    </svg>
  </div>
</template>

<script setup>
  import { ref, defineProps, inject, provide } from 'vue'

  const checkBurger = inject('checkBurger')
  const updateCheckBurger = inject('updateCheckBurger')

  const props = defineProps({
    logo: String,
  });

  // 是否点击了菜单
  const clickItem = t => {
    burger.value = !burger.value
    document.querySelector('.blog-container').style.overflow = 'visible'
  }

  provide('clickItem', clickItem)


  const burger = ref(false)
  const navMenuRef = ref('')
  const burgerBtn = () => {
    burger.value = !burger.value
    // 打开菜单锁定屏幕，需要关闭菜单才能解锁
    if (burger.value) {
      document.querySelector('.blog-container').style.overflow = 'hidden'
    } else {
      document.querySelector('.blog-container').style.overflow = 'visible'
    }
    // 更新检查点击
    updateCheckBurger(!checkBurger.value)
    for (let index = 0; index < navMenuRef.value.children.length; index++) {
      if (burger.value) {
        navMenuRef.value.children[index].style.animation = `0.3s ease-in slideIn forwards ${index * 0.1 + 0.4}s`
      } else {
        navMenuRef.value.children[index].style.animation = ""
      }
    }
  }
</script>

<style>
  @import url('assets/css/navigation/navigation.css');
</style>