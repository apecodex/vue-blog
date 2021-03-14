<template>
  <div class="tag">
    <tag-container>
      <template #content>
        <tag-content :tags="tags"></tag-content>
      </template>
    </tag-container>
  </div>
</template>

<script setup>
  import { ref } from "vue"

  import TagContainer from 'components/tags/TagContainer.vue'
  import TagContent from 'components/tags/TagContent.vue'

  const tags = ref(['Java', 'Python', "Go", "Linux", 'Servelt', 'Tomcat', '爬虫'])
</script>

<style scoped>
</style>