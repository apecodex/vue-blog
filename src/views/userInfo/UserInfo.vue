<template>
  <section class="navbar">
    <input type="checkbox" id="checkbox">
    <label for="checkbox">
      <i class="fa fa-outdent"></i>
    </label>
    <ul>
      <li>
        <img :src="imageUrl" v-if="imageUrl !== ''" alt="">
        <img v-else src="~assets/svg/login/avatar.svg" alt="">
        <div class="change-head" @click="openUpload"><i class="fa fa-plus"></i></div>

        <span>apecodewx</span>
      </li>
      <li>
        <router-link to="/user/profile" :class="{'bl': bl('profile')}">
          <i class="fa fa-user"></i>
          <span>个人资料</span>
        </router-link>
      </li>
      <li>
        <router-link to="/user/comment"  :class="{'bl': bl('comment')}">
          <i class="fa fa-comment"></i>
          <span>我的评论</span>
        </router-link>
      </li>
      <li>
        <router-link to="/user/message"  :class="{'bl': bl('message')}">
          <i class="fa fa-bell"></i>
          <span>我的消息<span class="num">99+</span></span>
        </router-link>
      </li>
      <li>
        <router-link to="/user/log"  :class="{'bl': bl('log')}">
          <i class="fa fa-file-text"></i>
          <span>登录日志</span>
        </router-link>
      </li>
      <li>
        <a href="javascript:;" :class="{'bl': bl('exit')}">
          <i class="fa fa-sign-out"></i>
          <span>退出</span>
        </a>
      </li>
      <li><a href="/">
        <i class="fa fa-backward"></i>
        <span>回到博客</span>
      </a></li>
    </ul>
    <div class="user-content">
      <router-view/>
      <div class="select-img" v-if="openAvatarUpload">
        <i class="fa fa-times" @click="closeAvatarUpload"></i>
        <el-upload v-loading.fullscreen.lock="fullscreenLoading"
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :on-error="handleAvatarError"
            :on-progress="handleAvatarProgress"
            :before-upload="beforeAvatarUpload">
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
    </div>
  </section>

</template>

<script setup>

  import {computed,ref} from "vue";
  import { useRoute } from 'vue-router'
  import {ElMessage} from "element-plus";

  const route = useRoute()

  const openAvatarUpload = ref(false)
  const fullscreenLoading = ref(false)

  const bl = path => {
    return route.path.split('/')[2] === path
  }

  const imageUrl = ref('')

  const openUpload = () => {
    openAvatarUpload.value = !openAvatarUpload.value
  }

  const closeAvatarUpload = () => {
    openAvatarUpload.value = !openAvatarUpload.value
  }

  const handleAvatarSuccess = (res, file) => {
    imageUrl.value = URL.createObjectURL(file.raw);
    openAvatarUpload.value = false
    ElMessage.success({
      message: '头像更换成功！',
      type: 'success'
    });
  }

  const handleAvatarProgress = (event, file) => {
    fullscreenLoading.value = true
  }

  const handleAvatarError = (err, file) => {
    fullscreenLoading.value = false
    ElMessage.error('上传失败！');
  }
  const beforeAvatarUpload = (file) => {
    const isJPG = file.type === 'image/jpeg';
    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isJPG) {
      ElMessage.error('上传头像图片只能是 JPG 格式!');
    }
    if (!isLt2M) {
      ElMessage.error('上传头像图片大小不能超过 2MB!');
    }
    return isJPG && isLt2M;
  }

</script>

<style scoped>
  body {
    width: 100vw;
    background-color: #f2f2f2;

  }

  section.navbar {
    position: relative;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #20222a;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
  }

  section.navbar #checkbox {
    display: none;
  }

  section.navbar label {
    position: absolute;
    top: 0;
    left: 200px;
    font-size: 20px;
    color: #666666;
    padding-left: 5px;
    cursor: url('assets/cursor/mouse2.cur'), auto;
    transition: all .5s;
  }

  section.navbar ul {
    position: fixed;
    top: 0;
    left: 0;
    width: 200px;
    height: 100vh;
    background: #20222a;
    transition: all .5s;
  }

  section.navbar ul li {
    width: 100%;
    height: 70px;
    margin-bottom: 10px;
  }

  section.navbar ul li:first-child {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 150px;
    padding: 10px;
  }

  section.navbar ul li:first-child img {
    width: 80px;
    border-radius: 50%;
  }

  section.navbar ul li:first-child span {
    color: #ffffff;
    font-size: 14px;
    white-space: nowrap;
  }

  .num {
    border-radius: 4px;
    background-color: darkred;
    color: #ffffff;
  }

  section.navbar .change-head {
    position: absolute;
    height: 30px;
    color: #cccccc;
    margin-left: 140px;
    z-index: 1;
    margin-top: -40px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }



  section.navbar .change-head::after {
    margin-top: -15px;
    content: '更换头像';
    font-size: 12px;
  }

  .select-img {
    width: 300px;
    height: 300px;
    background: #20222a;
    border-radius: 14px;
    top: 50%;
    left: 50%;
    transform: translate(-80%, -50%);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
  }

  .select-img > i {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #ffffff;
  }

  section.navbar ul li a {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    color: #d2d2d2;
    border-left: 6px solid transparent;
    transition: .2s ease-in-out;
  }

  section.navbar ul li a i {
    font-size: 18px;
    margin: 0 15px;
  }

  section.navbar ul li a span {
    font-size: 14px;
  }

  section.navbar ul li a:hover {
    color: #fff;
    border-left: 6px solid #fb7299;
  }

  section.navbar .user-content {
    position: absolute;
    top: 50px;
    left: 200px;
    right: 0;
    padding: 0 5px;
    transition: all .5s;
    height: calc(100vh - 50px);
    background: #ffffff;

  }

  section.navbar input:checked + label {
    left: 0;
  }

  section.navbar input:checked + label i {
    transform: rotateY(180deg);
  }

  section.navbar input:checked ~ ul {
    left: -200px;
  }

  section.navbar input:checked ~ .user-content {
    left: 0!important;
  }

  .bl {
    border-left: 6px solid #fb7299!important;
  }

  @media screen and (max-width: 786px) {

    .select-img {
      display: none;
    }

    section.navbar .change-head {
      display: none;
    }
    section.navbar ul {
      width: 140px;
    }
    section.navbar label {
      left: 140px;
    }

    section.navbar .user-content {
      left: 140px;
    }

    section.navbar input:checked ~ ul {
      left: -140px;
    }
  }
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>