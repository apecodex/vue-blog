<template>
  <div class="archive-inner" v-for="(item, index) in archiveList" :key="index">
    <div class="archive-year">{{item.year}}</div>
    <ul class="archive-content">
      <li v-for="(al, i) in item.archives" :key="i">
        <a href="#">{{ al }}</a></li>
    </ul>
  </div>
</template>

<script setup>
  import { defineProps } from "vue";

  const props = defineProps({
    archiveList: Array
  });
</script>

<style scoped>
  .archive-inner {
    background: #f9f9f9;
    margin: 0 0 20px;
    border: 1px solid rgba(0, 0, 0, .2);
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, .05) inset;
    overflow: hidden;
    break-inside: avoid;
    border-radius: 4px;
  }

  .archive-year {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    color: tomato;
  }

  .archive-content li {
    font-size: 14px;
    text-indent: .5em;
    padding: 5px 0;
  }

  .archive-inner:hover .archive-year {
    color: #333;
  }

  .archive-content li:hover {
    font-weight: bold;
    background: rgba(0, 0, 0, .2);
  }

  .archive-content li:hover a {
    color: salmon;
  }
</style>