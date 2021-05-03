<template>
  <transition name="fade">
    <loading v-if="isLoading"></loading>
  </transition>
  <category-container>
    <template #content>
      <category-item :categoryList="categoryData.categoryList"></category-item>
    </template>
  </category-container>
</template>

<script setup>
  import {onMounted, ref, reactive} from "vue";

  import loading from 'components/loader/loading.vue'
  import CategoryContainer from 'components/acnav/category/CategoryContainer.vue'
  import CategoryItem from 'components/acnav/category/CategoryItem.vue'

  // 加载loader...
  const isLoading = ref(true)

  onMounted(() => {
    isLoading.value = !isLoading.value
  })

  const categoryData = reactive({
    categoryList: [
      {'name': '编程', 'image': 'http://localhost:3000/src/assets/img/bg.png', 'description': "编程分类"},
      {'name': '日常', 'image': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2616381402,2370206065&fm=26&gp=0.jpg', 'description': "日常分类"},
      {'name': '学习', 'image': 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3113025313,1196593441&fm=11&gp=0.jpg', 'description': "学习分类"},
      {'name': '技巧', 'image': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3661527800,1773320989&fm=11&gp=0.jpg', 'description': "技巧分类"},
      {'name': '开源', 'image': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3786927471,373464116&fm=26&gp=0.jpg', 'description': "开源分类"}
    ]
  });
</script>

<style>

</style>