<template>
    <div class="nav-item" @click="itemBtn">
      <div class="nav-item-icon">
        <i :class="itemIcon"></i>
      </div>
      <div class="nav-item-text">
        {{itemText}}
      </div>
    </div>
</template>

<script setup>
import { defineProps, ref, computed, watchEffect } from 'vue'
import { useRoute, useRouter } from "vue-router";
import { useStore } from 'vuex'

import sleep from 'utils/utils.js'

const router = useRouter()
const route = useRoute()
const store = useStore()

const props = defineProps({
  itemIcon: String,
  itemText: String,
  path: String,
});


const itemBtn = () => {
  // 跳转对应的路由
  router.push(props.path)
}
</script>

<style >
  @import url('assets/css/navigation/navigation_item.css');
</style>