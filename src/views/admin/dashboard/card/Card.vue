<template>
  <div class="cardBox">
    <card-item numbers="1,042" cardName="Total Views" fontAwesome="fa-eye"></card-item>
    <card-item numbers="80" cardName="Articles" fontAwesome="fa-book"></card-item>
    <card-item numbers="208" cardName="Comments" fontAwesome="fa-comments"></card-item>
    <card-item numbers="6,042" cardName="Users" fontAwesome="fa-user-circle"></card-item>
  </div>
</template>

<script setup>
  import CardItem from "views/admin/dashboard/card/CardItem.vue";
</script>

<style scoped>
/* 卡片 */
.cardBox {
  position: relative;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 20px;
}

@media screen and (max-width: 992px) {
  .cardBox {
    grid-template-columns: repeat(2,1fr);
  }
}

@media screen and (max-width: 480px) {
  .cardBox {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>