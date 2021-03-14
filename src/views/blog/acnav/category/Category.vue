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
      {'name': '编程', 'image': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.leewiart.com%2Fuserfiles%2F4421%2F8db77019f697dc9c9df6df6efd0b9c01.jpg%3F634219776989282500&refer=http%3A%2F%2Fwww.leewiart.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618303876&t=f6b6c2543a4e29ea7665ef907dd55c55', 'description': "编程分类"},
      {'name': '日常', 'image': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2616381402,2370206065&fm=26&gp=0.jpg', 'description': "日常分类"},
      {'name': '学习', 'image': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20200113%2Fe9bffdbcfd3845329e9c4744b49466ec.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618304487&t=f041730fe596bef16622ab6bd66fb42f', 'description': "学习分类"},
      {'name': '技巧', 'image': 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_ls%2F0%2F11352744489_240180%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618304526&t=c1afd362eff2d43fa4d167531f38c439', 'description': "技巧分类"},
      {'name': '开源', 'image': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3786927471,373464116&fm=26&gp=0.jpg', 'description': "开源分类"}
    ]
  });
</script>

<style>

</style>