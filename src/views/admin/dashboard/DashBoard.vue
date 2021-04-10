<template>
  <div id="dashboard">
    <!-- 卡片 -->
    <card/>
    <div class="details">
      <!-- 近期文章 -->
      <recent-articles/>
      <!-- 新增用户 -->
      <recent-customer/>
    </div>
  </div>
</template>

<script setup>
  import Card from 'views/admin/dashboard/card/Card.vue';
  import RecentArticles from "views/admin/dashboard/recentArticles/RecentArticles.vue"
  import RecentCustomer from "views/admin/dashboard/recentCustomer/RecentCustomer.vue"
</script>

<style scoped>
  .details {
    position: relative;
    width: 100%;
    /*padding: 0 20px 20px;*/
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 2fr 1fr;
  }

  @media screen and (max-width: 1200px) {
    .details {
      grid-template-columns: 1.5fr 1fr;
    }
  }

  @media screen and (max-width: 768px) {
    .details {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>