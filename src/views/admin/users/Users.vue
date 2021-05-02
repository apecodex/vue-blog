<template>
  <div id="users">
    <div class="users-container">
      <div class="selector-tool">
        <form action="" autocomplete="off">
          <div class="from-input">
            <div class="input-box">
              <input type="text" id="username" name="username" placeholder=" ">
              <label for="username" class="form-label">用户名</label>
            </div>
            <div class="input-box">
              <input type="text" id="id" name="id" class="form-input" placeholder=" ">
              <label for="id" class="form-label">id</label>
            </div>
            <div class="input-box">
              <input type="email" id="email" name="email" class="form-input" placeholder=" ">
              <label for="email" class="form-label">邮箱</label>
            </div>
          </div>
          <button class="form-button">查询</button>
        </form>
      </div>
      <div class="user-list scrollbar-x">
        <user-list />
      </div>
      <div class="no-search" v-show="noSearchShow">
        <p>没有查询到结果</p>
      </div>
    </div>
  </div>
  <br><br>
  <my-pagination :currentPage="currentPage" :totalPage="10"/>
</template>

<script setup>
  import UserList from "views/admin/users/userList/UserList.vue";
  import {ref} from "vue";

  const noSearchShow = ref(false)

  const currentPage = (current) => {
    console.log(current)
  }
</script>

<style scoped>
  .selector-tool {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .selector-tool form .from-input {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
  }

  .input-box {
    position: relative;
    margin: 0 auto;
  }

  .input-box label.form-label {
    position: absolute;
    top: -8px;
    left: 8px;
    z-index: 1;
    font-size: 16px;
    background: #f5f5f5;
    color: #03a9f4;
  }

  .input-box input {
    position: relative;
    padding-top: 10px;
    padding-left: 5px;
    padding-bottom: 5px;
    background: transparent;
    outline: none;
    border: 1px solid #03a9f4;
    border-radius: 4px;
    font-weight: bolder;
  }

  .input-box input:focus {
    border-color: #6e0832;
    color: #6e0832;
  }

  .input-box input:focus ~ label {
    color: #6e0832;
  }

  .form-button {
    margin-left: 50%;
    margin-top: 20px;
    transform: translateX(-50%);
    outline: none;
    font-weight: bolder;
    border-radius: 6px;
    border: 2px solid #03a9f4;
    color: #03a9f4;
    padding: 5px 25px;
    transition: .3s;
    cursor: url('assets/cursor/mouse2.cur'), auto;
  }

  .form-button:hover {
    border-color: #6e0832;
    color: #6e0832;
  }

  .user-list {
    margin-top: 30px;
    overflow-x: auto;
  }


  .no-search {
    text-align: center;
    margin-top: 50px;
    font-weight: bolder;
    font-size: 22px;
  }

  @media screen and (max-width: 992px) {
    .selector-tool form .from-input {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 768px) {
    .selector-tool form .from-input {
      grid-template-columns: 1fr;
    }
  }

</style>