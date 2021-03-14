<template>
  <archive-container>
    <template #content>
      <archive-item :archiveList="archiveData.archiveList"></archive-item>
    </template>
  </archive-container>
</template>

<script setup>
  
  import { reactive } from "vue";
  
  import ArchiveContainer from 'components/acnav/archive/ArchiveContainer.vue'
  import ArchiveItem from 'components/acnav/archive/ArchiveItem.vue'

  const archiveData = reactive({
    archiveList: [
      {'year': 2021, 'archives': ['1','2','3','4','5','我的博客']},
      {'year': 2020, 'archives': ['1','2','3','4','5','我的博客', '我的博客']},
      {'year': 2019, 'archives': ['1','2','3','4','5','我的博客', '我的博客', '我的博客', '我的博客']},
      {'year': 2018, 'archives': ['1','2','3','4','5','我的博客', '我的博客', '我的博客', '我的博客', '我的博客', '我的博客', '我的博客', '我的博客', '我的博客', '我的博客']},
      {'year': 2017, 'archives': ['1','2','3','4','5','我的博客']},
      {'year': 2016, 'archives': ['1','2','3','4','5','我的博客', '我的博客', '我的博客', '我的博客', '我的博客', '我的博客', '我的博客']},
      {'year': 2015, 'archives': ['1','2','3','4','5','我的博客']},
    ]
  });
</script>

<style>

</style>