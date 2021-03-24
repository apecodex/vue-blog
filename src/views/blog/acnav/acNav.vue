<template>
  <transition name="fade">
    <loading v-if="isLoading"></loading>
  </transition>
  <ac-nav-container>
    <template #nav>
      <ac-navigation>
        <template #content>
          <ac-navigation-item path="/archive"><template #text>归档</template></ac-navigation-item>
          <ac-navigation-item path="/category"><template #text>分类</template></ac-navigation-item>
        </template>
      </ac-navigation>
    </template>
  </ac-nav-container>
</template>

<script setup>
  import acNavContainer from 'common/container/acNavContainer.vue'
  import acNavigation from 'components/acnav/acNavigation.vue'
  import acNavigationItem from 'components/acnav/acNavigationItem.vue'

  import loading from 'components/loader/loading.vue'

  import {onMounted, ref} from "vue";
  // 加载loader...
  const isLoading = ref(true)

  onMounted(() => {
    isLoading.value = !isLoading.value
  })

</script>

<style>

</style>