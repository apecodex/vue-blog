<template>
  <el-tabs type="border-card" @tab-click="tobClick">
    <el-tab-pane label="文章列表">
    </el-tab-pane>
    <el-tab-pane label="发表文章">
      <write />
    </el-tab-pane>
  </el-tabs>

</template>

<script setup>
  import SectionHeader from 'common/common/SectionHeader.vue'
  import write from 'views/admin/articles/Write.vue'
  const tobClick = (e) => {
    console.log(e)
  }
</script>

<style scoped>

</style>