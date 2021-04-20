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
    </div>
    <div class="article-div article-category">
      <span>分类</span>
    </div>
    <div class="article-div article-bg">
      <span>背景图</span>
    </div>
  </div>
  <v-md-editor v-model="text"
               left-toolbar="undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code | save | emoji todo-list"
               :disabled-menus="[]"
               @upload-image="handleUploadImage"
               @save="handleSaveArticle"
               height="500px"></v-md-editor>
</template>

<script setup>
  import {ref} from "vue";

  const text = ref('')

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
  }
</script>

<style scoped>

  .article-info {
    display: grid;
    grid-gap: 10px;
  }
  .article-info .article-div {
    display: flex;
    line-height: 40px;
  }

  .article-info .article-div > span {
    margin-right: 10px;
  }

  .article-info .article-title .title-input {
    width: 90%;
  }
</style>