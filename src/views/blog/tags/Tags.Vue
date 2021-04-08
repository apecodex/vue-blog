<template>
  <transition name="fade">
    <loading v-if="isLoading"></loading>
  </transition>
  <div class="tag">
    <tag-container>
      <template #content>
        <tag-content :tags="tags"></tag-content>
      </template>
    </tag-container>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue"

  import TagContainer from 'components/tags/TagContainer.vue'
  import TagContent from 'components/tags/TagContent.vue'
  import loading from 'components/loader/loading.vue'

  const tags = ref(['Java', 'Python', "Go", "Linux", 'Servlet', 'Tomcat', '爬虫'])

  // 加载loader...
  const isLoading = ref(true)

  onMounted(() => {
    isLoading.value = !isLoading.value
  })
</script>

<style scoped>
</style>