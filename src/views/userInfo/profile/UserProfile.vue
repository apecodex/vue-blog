<template>
  <div class="profile-container">
    <div class="profile-welcome">
      <span>欢迎回来</span>
    </div>
    <form action="" method="post" class="profile-form" autocomplete="off">
      <label for="username">用户名</label>
      <input type="text" name="username" id="username" placeholder="需要修改的用户名">
      <label for="email">邮箱地址</label>
      <input type="email" name="email" id="email" placeholder="邮箱地址">
      <button class="username-btn"><i class="fa fa-edit"></i></button>
    </form>
  </div>
</template>

<script setup>
</script>

<style scoped>
  .profile-container {
    width: 100%;
  }

  .profile-container .profile-welcome {
    text-align: center;
    font-size: 30px;
    font-weight: bolder;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }

  form.profile-form label {
    margin-right: 15px;
  }

  form.profile-form input {
    display: block;
    outline: none;
    padding: 1px 0;
    border: 0;
    border-bottom: 1px dashed darkred;
    color: darkred;
    font-weight: bolder;
    text-indent: 3px;
  }

  form.profile-form input::placeholder {
    text-indent: 3px;
    font-size: 12px;
    color: #cccccc;
  }

  form.profile-form button {
    outline: none;
    padding: 3px 10px;
    border-radius: 14px;
    background: transparent;
    border: 1px solid rgba(0,0,0,.3);
  }

  form.profile-form button:hover {
    color: #6e0832;
    border-color: #6e0832;
  }

  @media screen and (max-width: 768px){
    form.profile-form {
      display: flex;
      flex-direction: column;
    }

    form.profile-form button {
      margin-top: 5px;
      margin-left: 0;
    }
  }
</style>