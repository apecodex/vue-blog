<template>
  <category-container>
    <template #content>
      <category-item :categoryList="categoryData.categoryList"></category-item>
    </template>
  </category-container>
</template>

<script setup>
  import { reactive } from "vue";

  import CategoryContainer from 'components/acnav/category/CategoryContainer.vue'
  import CategoryItem from 'components/acnav/category/CategoryItem.vue'

  const categoryData = reactive({
    categoryList: [
      {'name': '编程', 'image': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201902%2F08%2F20190208171057_iLs2u.thumb.700_0.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618389798&t=16f33dfd3d4e354a48b98195bdd44b23', 'description': "编程分类"},
      {'name': '日常', 'image': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2616381402,2370206065&fm=26&gp=0.jpg', 'description': "日常分类"},
      {'name': '学习', 'image': 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3113025313,1196593441&fm=11&gp=0.jpg', 'description': "学习分类"},
      {'name': '技巧', 'image': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3661527800,1773320989&fm=11&gp=0.jpg', 'description': "技巧分类"},
      {'name': '开源', 'image': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3786927471,373464116&fm=26&gp=0.jpg', 'description': "开源分类"}
    ]
  });
</script>

<style>

</style>