<template>
  <div class="tag-content">
    <ul>
      <li :style="{'background': color()}" v-for="(item, index) in tags" :key="index">
        <router-link :to="{path: 'tags', query: {tag: item}}">{{item}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
  import { defineProps, ref } from 'vue'
  import { color } from 'utils/utils.js'


  const props = defineProps({
    tags: Array
  });

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
    border-radius: 4px;
    transition: .5s ease;
  }

  .tag-content ul li a {
    color: #fff;
  }

  .tag-content ul li:hover {
    background: #333 !important;
    transform: scale(1.2)
  }
</style>