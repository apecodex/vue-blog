<template>
  <div class="tag-content">
    <ul>
      <li :style="{'background': bgColor[index]}" v-for="(item, index) in tags" :key="index">
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { defineProps, ref } from 'vue'

  const props = defineProps({
    tags: Array
  });
  
  const bgColor = ref(['#3F51B5', '#E53935', '#E91E63', '#673AB7', '#03A9F4', '#00BCD4', '#26A69A', '#66BB6A', '#9CCC65', '#D4E157',
                      '#FFEE58', '#FFCA28', '#FF9800', '#FF5722', '#795548', '#CFD8DC', '#880E4F', '#B71C1C', '#1A237E', '#006064']);
</script>

<style scoped>
  .tag-content ul {
    display: flex;
    flex-flow: wrap;
  }

  .tag-content ul li {
    padding: 1px 5px;
    margin-left: 5px;
    margin-bottom: 5px;
    background: #eee;
    color: #fff;
    border-radius: 4px;
    transition: .5s ease;
  }

  .tag-content ul li:hover {
    background: #333 !important;
    transform: scale(1.2)

  }
</style>