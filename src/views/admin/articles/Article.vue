<template>
  <el-tabs type="border-card">
    <el-tab-pane label="文章列表">
      <writes />

    </el-tab-pane>
    <el-tab-pane label="发表文章">
<!--      <write />-->
    </el-tab-pane>
  </el-tabs>

</template>

<script setup>
  import SectionHeader from 'common/common/SectionHeader.vue'
  import write from 'views/admin/articles/Write.vue'
  import writes from 'views/admin/articles/Writes.vue'
  import {ref} from "vue";

</script>

<style scoped>

</style>