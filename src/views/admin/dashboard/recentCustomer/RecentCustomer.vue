<template>
  <div class="recentCustomer">
    <div class="cardHeader">
      <h2>新增用户</h2>
    </div>
    <table>
      <tbody>
        <tr-item head="https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg" username="apecode1" time="2021-1-1" from="中国·云南" ip="127.0.0.1"/>
        <tr-item head="https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg" username="apecode2" time="2021-1-1" from="中国·云南" ip="127.0.0.1"/>
        <tr-item head="https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg" username="apecode3" time="2021-1-1" from="中国·云南" ip="127.0.0.1"/>
        <tr-item head="https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg" username="apecode4" time="2021-1-1" from="中国·云南" ip="127.0.0.1"/>
        <tr-item head="https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg" username="apecode5" time="2021-1-1" from="中国·云南" ip="127.0.0.1"/>
        <tr-item head="https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg" username="apecode6" time="2021-1-1" from="中国·云南" ip="127.0.0.1"/>
        <tr-item head="https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg" username="apecode7" time="2021-1-1" from="中国·云南" ip="127.0.0.1"/>
        <tr-item head="https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg" username="apecode8" time="2021-1-1" from="中国·云南" ip="127.0.0.1"/>
      </tbody>
    </table>
  </div>
</template>

<script setup>
  import TrItem from "views/admin/dashboard/recentCustomer/TrItem.vue";
</script>

<style scoped>
  .recentCustomer {
    position: relative;
    min-height: 530px;
    background: #fff;
    padding: 20px;
    border-radius: 6px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 25px 0 10px;
  }

  @media screen and (max-width: 768px) {
    .cardHeader h2 {
      font-weight: 600;
      font-size: 18px;
    }
  }
</style>