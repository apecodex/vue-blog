<template>
  <div class="recentArticle">
    <div class="cardHeader">
      <h2>近期文章</h2>
      <a href="#" class="btn">View All</a>
    </div>
    <div class="articles scrollbar-x">
      <table>
        <thead>
        <tr>
          <td>Title</td>
          <td>Author</td>
          <td>Create Time</td>
          <td>Status</td>
        </tr>
        </thead>
        <tbody>
          <tr-item title="关于我的博客的开发历程1" author="apecode" createTime="2021-1-1" :status="true" />
          <tr-item title="关于我的博客的开发历程2" author="apecode" createTime="2021-1-1" :status="false" />
          <tr-item title="关于我的博客的开发历程3" author="apecode" createTime="2021-1-1" :status="true" />
          <tr-item title="关于我的博客的开发历程4" author="apecode" createTime="2021-1-1" :status="false" />
          <tr-item title="关于我的博客的开发历程5" author="apecode" createTime="2021-1-1" :status="true" />
          <tr-item title="关于我的博客的开发历程6" author="apecode" createTime="2021-1-1" :status="true" />
          <tr-item title="关于我的博客的开发历程7" author="apecode" createTime="2021-1-1" :status="true" />
          <tr-item title="关于我的博客的开发历程8" author="apecode" createTime="2021-1-1" :status="true" />
          <tr-item title="关于我的博客的开发历程9" author="apecode" createTime="2021-1-1" :status="false" />
          <tr-item title="关于我的博客的开发历程10" author="apecode" createTime="2021-1-1" :status="true" />
          <tr-item title="关于我的博客的开发历程11" author="apecode" createTime="2021-1-1" :status="true" />
          <tr-item title="关于我的博客的开发历程12" author="apecode" createTime="2021-1-1" :status="false" />
        </tbody>
      </table>
    </div>
  </div>

</template>

<script setup>
import TrItem from "views/admin/dashboard/recentArticles/TrItem.vue";

</script>

<style scoped>
.recentArticle {
  position: relative;
  min-height: 530px;
  background: #fff;
  padding: 20px;
  border-radius: 6px;
  overflow-x: hidden;
}

.cardHeader {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.cardHeader h2 {
  font-weight: 600;
}

.btn {
  position: relative;
  padding: 5px 10px;
  background: #03a9f4;
  color: #fff;
  border-radius: 6px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin: 10px 0;
}

table thead td {
  font-weight: 600;
}
.articles {
  overflow-x: auto;
}

.articles table {
  min-width: 700px;
}

table tr {
  border-bottom: 1px solid rgba(0,0,0,.1);
}

table thead tr td:last-child {
  text-align: right;
}

table thead tr td:nth-child(2) {
  text-align: right;
  padding-right: 20px;
}

table thead tr td:nth-child(3) {
  text-align: center;
}

@media screen and (max-width: 768px) {
  .cardHeader h2 {
    font-weight: 600;
    font-size: 18px;
  }
}

</style>