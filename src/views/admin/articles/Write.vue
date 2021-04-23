<template>
  <div class="article-info">
    <div class="article-div article-title">
      <span>文章标题</span>
      <el-input
          class="title-input"
          type="text"
          placeholder="请输入内容"
          v-model="text"
          maxlength="20"
          show-word-limit
      />
    </div>
    <div class="article-div article-tag">
      <span>标签</span>
      <el-select
          v-model="value"
          multiple
          filterable
          allow-create
          size="small"
          default-first-option
          placeholder="请选择文章标签">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="article-div article-category">
      <span>分类</span>
      <el-select v-model="categoryValue" clearable placeholder="请选择">
        <el-option
            v-for="item in categorys"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="article-div article-bg">
      <span>背景图</span>
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
    </div>
  </div>
  <div class="editor-content">
    <v-md-editor v-model="content"
                 left-toolbar="undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code | save | emoji todo-list"
                 :disabled-menus="[]"
                 @upload-image="handleUploadImage"
                 @save="handleSaveArticle"
                 height="500px"></v-md-editor>
  </div>
  <div class="btn">
    <el-button type="primary" @click="saveArticle">保存</el-button>
  </div>
</template>

<script setup>
  import {ref} from "vue";
  import {ElMessage} from "element-plus";

  const text = ref('')

  const content = ref('')

  // 上传图片
  const handleUploadImage = (event, insertImage, files) =>
  {
    // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
    console.log(files);

    // 此处只做示例
    insertImage({
      url:
          'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1269952892,3525182336&fm=26&gp=0.jpg',
      desc: '七龙珠',
      width: 'auto',
      height: 'auto',
    });
  }

  // 保存文章
  const handleSaveArticle = (text, html) => {
    console.log(text, html)
    saveOption()
  }

  const saveArticle = () => {
    let save = document.getElementsByClassName('v-md-icon-save')
    save[0].click()
  }

  const saveOption = () => {
    ElMessage.success({
      message: '保存成功',
      type: 'success'
    });
  }

  const options = ref([{
    value: 'HTML',
    label: 'HTML'
  }, {
    value: 'CSS',
    label: 'CSS'
  }, {
    value: 'JavaScript',
    label: 'JavaScript'
  }])
  const value = ref([])

  const categorys = ref([{
    value: '选项1',
    label: '黄金糕'
  }, {
    value: '选项2',
    label: '双皮奶'
  }, {
    value: '选项3',
    label: '蚵仔煎'
  }, {
    value: '选项4',
    label: '龙须面'
  }, {
    value: '选项5',
    label: '北京烤鸭'
  }])

  const categoryValue = ref('')

  const imageUrl = ref('')

  const handleAvatarSuccess = (res, file) => {
    imageUrl.value = URL.createObjectURL(file.raw);
  }
  const beforeAvatarUpload = (file) => {
    console.log(file)
    const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
    const isLt2M = file.size / 1024 / 1024 < 5;

    if (!isJPG) {
      ElMessage.error('图片只能是 JPG 或 PNG 格式!');
    }
    if (!isLt2M) {
      ElMessage.error('图片大小不能超过 5MB!');
    }
    return isJPG && isLt2M;
  }
</script>

<style scoped>

  .article-info {
    display: grid;
    grid-gap: 5px;
  }
  .article-info .article-div {
    display: flex;
  }

  .article-info .article-div > span {
    display: inline-block;
    min-width: 70px;
    margin-right: 10px;
    line-height: 40px;
    text-align: right;
  }

  .title-input {
    width: 100%;
  }

  .editor-content {
    margin: 15px 0;
  }

  .btn {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
</style>

<style>
  .article-tag .el-select {
    width: 100% !important;
  }

  .article-tag .el-select .select-trigger {
    position: relative !important;
  }

  .article-bg .avatar-uploader .el-upload {
    border: 1px dashed #20222a;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .article-bg .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .article-bg .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }

  .article-bg .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>