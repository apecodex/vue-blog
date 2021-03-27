<template>
    <div class="nav-item" @click="itemBtn">
      <div class="nav-item-icon">
        <i :class="itemIcon"></i>
      </div>
      <div class="nav-item-text">
        {{ itemText }}
      </div>
    </div>
</template>

<script setup>
import { defineProps, inject } from 'vue'
import { useRouter } from "vue-router";

const router = useRouter()

const clickItem = inject('clickItem')

const props = defineProps({
  itemIcon: String,
  itemText: String,
  path: String,
});


const itemBtn = () => {
  // 跳转对应的路由
  router.push(props.path)
  // 点击关闭菜单
  clickItem()
}
</script>

<style >
  @import url('assets/css/navigation/navigation_item.css');
</style>