<template>
  <div class="card">
    <div>
      <div class="numbers">{{ numbers }}</div>
      <div class="cardName">{{ cardName }}</div>
    </div>
    <div class="iconBox">
      <i class="fa" :class="fontAwesome" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script setup>
  import {defineProps} from "vue";

  const props = defineProps({
    numbers: String,
    cardName: String,
    fontAwesome: String
  })
</script>

<style scoped>
.card {
  position: relative;
  background: #ffffff;
  padding: 20px;
  display: flex;
  border-radius: 6px;
  justify-content: space-between;
  cursor: url('assets/cursor/mouse2.cur'), auto;
}

.card .numbers {
  position: relative;
  font-size: 2em;
  font-weight: 500;
}

.card .cardName {
  color: #999;
}

.card .iconBox {
  font-size: 2.5em;
  color: #03a9f4;
}

</style>