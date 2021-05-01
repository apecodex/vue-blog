<template>
  <div class="website-avatar-container">
    <el-form label-position="right" label-width="80px">
      <el-form-item label="头像">
        <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
        >
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
  import {ref} from "vue";
  import {ElMessage} from "element-plus";

  const imageUrl = ref('https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg')
  const handleAvatarSuccess = (res, file) => {
    imageUrl.value = URL.createObjectURL(file.raw);
  }
  const beforeAvatarUpload = (file) => {
    const isJPG = file.type === 'image/jpeg';
    const isLt2M = file.size / 1024 / 1024 < 3;

    if (!isJPG) {
      ElMessage.error('上传头像图片只能是 JPG 格式!');
    }
    if (!isLt2M) {
      ElMessage.error('上传头像图片大小不能超过 3MB!');
    }
    return isJPG && isLt2M;
  }
</script>

<style scoped>

</style>

<style>
.website-avatar-container .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.website-avatar-container .avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.website-avatar-container .avatar-uploader-icon {
  font-size: 20px;
  color: #8c939d;
  width: 48px;
  height: 48px;
  line-height: 48px;
  text-align: center;
}
.website-avatar-container .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>