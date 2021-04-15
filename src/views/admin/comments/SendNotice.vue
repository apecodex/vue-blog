<template>
  <section class="notice-container">
    <section-header :bg="true" title="发送通知"></section-header>

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

  .notice-container {
    background: #20222a;
    padding: 10px 15px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .notice-container div.radio-box {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 15px;
  }

  .notice-container div.radio-box input[type='radio'] {
    display: none;
  }

  .notice-container div.radio-box label {
    position: relative;
    color: #ffffff;
    font-size: 16px;
    border: 2px solid #ffffff;
    border-radius: 5px;
    padding: 2px 10px;
    display: flex;
    align-items: center;
    cursor: url('assets/cursor/mouse2.cur'), auto;
    transition: .3s;
  }

  .notice-container div.radio-box label::before {
    content: '';
    height: 15px;
    width: 15px;
    border: 2px solid #ffffff;
    border-radius: 50%;
    margin-right: 10px;
  }

  .notice-container div.radio-box input[type='radio']:checked + label {
    background-color: #ffffff;
    color: #20222a;
  }

  .notice-container div.radio-box input[type='radio']:checked + label::before {
    border: 4px solid #20222a;
    background: #ffffff;
  }

  .notice-container .search-box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .notice-container .search-box > div {
    position: relative;
    padding: 15px 0;
  }
  .notice-container .search-box div input[type="text"] {
    border: 2px solid #ffffff;
    border-radius: 5px;
    outline: none;
    font-weight: bolder;
    padding: 15px 2px 2px;
    background: transparent;
    transition: .3s;
  }

  .notice-container .search-box div label {
    position: absolute;
    top: 6px;
    left: 15px;
    background: #20222a;
    color: #ffffff;
    padding: 0 3px;
    font-weight: bolder;
    transition: .3s;
  }

  .notice-container .search-box div input[type="text"]:focus {
    background: #ffffff;
    color: #20222a;

  }

  .notice-container .search-box div input[type="text"]:focus + label {
    background: transparent;
    color: #ffffff;
    top: -10px;
  }

  .search-input-label-active {
    background: transparent;
    color: #ffffff;
    top: -10px!important;
  }

  .search-input-active {
    background: #ffffff !important;
  }

  .notice-container .search-btn {
    padding: 2px 25px;
    outline: none;
    background: transparent;
    border: 2px solid #ffffff;
    color: #ffffff;
    border-radius: 4px;
    margin-bottom: 15px;
    transition: .3s;
  }

  .notice-container .search-btn:hover {
    background: #ffffff;
    color: #20222a;
  }

  .notice-container .search-box div.show-content {
    width: 100%;
    color: #ffffff;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 6px;
    padding: 0;
  }

  .notice-container .search-box div.show-content .item {
    display: flex;
    flex-wrap: wrap;
    padding: 3px;
  }

  .notice-container .search-box div.show-content span {
    display: flex;
    align-items: center;
    margin: 3px;
  }

  .notice-container .search-box div.show-content span b {
    border-radius: 6px;
    padding: 2px 5px;
    font-weight: 400;
  }

  .notice-container .search-box div.show-content span i {
    color: #ffffff !important;
  }

  .result-content {
    color: #ffffff;
    width: 100%;
  }

  .result-content .have-result ul {
    width: 100%;
    border: 1px dashed #f0c688;
    border-radius: 6px;
  }

  .result-content .have-result ul li {
    display: flex;
    justify-content: space-between;
    padding: 3px 5px;
  }

  .result-content .have-result ul li b {
    font-weight: 400;
  }

  .result-content .have-result ul li:hover {
    background: #f0c688;
  }

  .no-result {
    text-align: center;
  }
</style>