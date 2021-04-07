<template>
  <div class="profile-container">
    <div class="profile-welcome">
      <span>欢迎回来</span>
    </div>
    <el-divider><i class="fa fa-user fa-fw"></i>个人信息</el-divider>
    <form action="" method="post" class="profile-form" autocomplete="off">
      <label for="username">用户名<span>格式错误</span></label>
      <input type="text" name="username" id="username" placeholder="需要修改的用户名">
      <label for="email">邮箱地址<span>格式错误</span></label>
      <input type="email" name="email" id="email" placeholder="更改邮箱地址">
      <label for="bio">个性签名</label><p></p>
      <textarea name="bio" id="bio" placeholder="说点啥？" cols="32" rows="5"></textarea>
      <p></p>
      <button class="btn">修改信息</button>
    </form>
    <el-divider><i class="fa fa-edit fa-fw"></i>修改密码</el-divider>
    <form action="" method="post" class="change-password-form" autocomplete="off">
      <label for="old-password">旧密码<span>旧密码不正确</span></label>
      <input type="password" name="oldPassword" id="old-password" placeholder="之前的密码">
      <label for="new-password">新密码<span>密码格式不正确</span></label>
      <input type="password" name="newPassword" id="new-password" placeholder="要修改的密码">
      <label for="entry-password">确认密码<span>确认密码有误</span></label>
      <input type="password" name="entryPassword" id="entry-password" placeholder="确认新密码">
      <span class="h20"></span>
      <button class="btn">修改密码</button>
    </form>
  </div>
</template>

<script setup>


</script>

<style scoped>

  .h20 {
    display: block;
    height: 20px;
  }
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
    font-weight: bolder;
  }

  form input {
    display: block;
    outline: none;
    padding: 1px 2px;
    border: 1px solid #20222a;
    border-radius: 4px;
    background: #20222a;
    color: #ffffff;
    font-weight: bolder;
    text-indent: 3px;
  }

  form.profile-form textarea {
    padding: 2px;
    outline: none;
    border: 1px dashed darkred;
    color: #20222a;
    font-weight: bolder;
  }

  form input::placeholder,
  form.profile-form textarea::placeholder {
    text-indent: 3px;
    font-size: 12px;
    font-weight: 400;
    color: #cccccc;
  }

  form label > span {
    margin-left: 15px;
    font-size: 12px;
    color: #6e0832;
  }

  form button {
    outline: none;
    padding: 3px 15px;
    border-radius: 14px;
    border: 1px solid green;
    background: green;
    color: #ffffff;

  }

  form button:hover {
    color: #cccccc;
    border-color: green;
  }

  @media screen and (max-width: 768px){
    form {
      display: flex;
      flex-direction: column;
    }

    form.profile-form textarea {
      width: 100%;
    }

    form.profile-form button {
      margin-top: 5px;
      margin-left: 0;
    }
  }
</style>

<style>
.el-divider__text.is-center {
  line-height: 20px!important;
  font-size: 12px;
}
</style>