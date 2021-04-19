<template>
  <section-header :bg="false" title="发送通知"></section-header>
  <section class="notice-container">

    <div class="radio-box">
      <div>
        <input type="radio" name="select" id="all" checked>
        <label for="all" @click="changeAll">所有人</label>
      </div>
      <div>
        <input type="radio" name="select" id="section">
        <label for="section" @click="changeSection">部分</label>
      </div>
    </div>
    <div class="content">
      <div class="search-box" v-if="all">
        <div>
          <input v-model="username" type="text" name="username" id="username" autocomplete="off"  :class="{'search-input-active': activeFunc(username)}">
          <label for="username" :class="{'search-input-label-active': activeFunc(username)}">用户名</label>
        </div>
        <div>
          <input v-model="id" type="text" name="id" id="id" autocomplete="off" :class="{'search-input-active': activeFunc(id)}">
          <label for="id" :class="{'search-input-label-active': activeFunc(id)}">id</label>
        </div>
        <button class="search-btn">查询</button>
        <div class="show-content">
          <div class="item" ref="showContent" v-if="users.length !== 0">
            <span v-for="(item, index) in users" :key="index"><b :style="{'background-color': color()}">{{ item.name }}</b><i class="fa fa-times fa-fw" @click="closeBtn(index)"></i></span>
          </div>
          <div v-else>
            <p style="text-align: center;padding: 5px 0">未选择用户</p>
          </div>
        </div>
        <div class="result-content">
          <div class="have-result" v-if="!searchResult.length == 0">
            <ul>
              <li v-for="(item, index) in searchResult" :key="index"><b>{{ item.name }}</b><span @click="addUser(item, index)"><i class="fa fa-plus-square fa-fw"></i>添加</span></li>
            </ul>
          </div>
          <div class="no-result" v-else>
            <p>没有查询到结果</p>
          </div>
        </div>
      </div>
      <div class="send-info">
        <comment action="" :dark="true" rows="4" btnText="发送" placeholder="请输入内容" :onSubmit="onSubmit"></comment>
      </div>
    </div>
  </section>
</template>

<script setup>
  import {color} from 'utils/utils.js'
  import SectionHeader from "common/common/SectionHeader.vue"
  import Comment from 'common/comment/Comment.vue'
  import {computed, ref} from "vue";

  const username = ref('')
  const id = ref('')

  const all = ref(false)

  const changeAll = () => {
    all.value = false
  }

  const changeSection = () => {
    all.value = true
  }

  const users = ref([
    {name: 'apecode'},
    {name: '大富豪'},
    {name: '导火线'},
    {name: '张三'},
    {name: '李四'},
    {name: '王五'},
  ])

  const searchResult = ref([
    {name: '赵六'},
    {name: '老王'},
    {name: '二狗'},
  ])

  const activeFunc = text => {
    return text !== '';
  }

  // 关闭 已经选择的用户名
  const closeBtn = num => {
    searchResult.value.push(users.value[num])
    users.value.splice(num, 1)
  }

  // 添加 用户
  const addUser = (user, index) => {
    users.value.push(user)
    searchResult.value.splice(index, 1)
  }

  const onSubmit = (e, a) => {
    console.log("do some");
    console.log(a);

    e.preventDefault()
  }
</script>

<style scoped>
  @import url('assets/css/admin/comments/sendNotice.css');
</style>