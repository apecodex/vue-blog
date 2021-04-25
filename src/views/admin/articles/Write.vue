<!--<template>-->
<!--  <div class="article-info">-->
<!--    <div class="article-div article-title">-->
<!--      <span>文章标题</span>-->
<!--      <el-input-->
<!--          class="title-input"-->
<!--          type="text"-->
<!--          placeholder="请输入内容"-->
<!--          v-model="text"-->
<!--          size="small"-->
<!--          maxlength="20"-->
<!--          show-word-limit-->
<!--      />-->
<!--    </div>-->
<!--    <div class="article-div article-tag">-->
<!--      <span>标签</span>-->
<!--      <el-select-->
<!--          v-model="tagValue"-->
<!--          multiple-->
<!--          filterable-->
<!--          allow-create-->
<!--          size="small"-->
<!--          default-first-option-->
<!--          placeholder="请选择文章标签">-->
<!--        <el-option-->
<!--            v-for="item in tags"-->
<!--            :key="item.value"-->
<!--            :label="item.label"-->
<!--            :value="item.value">-->
<!--        </el-option>-->
<!--      </el-select>-->
<!--    </div>-->
<!--    <div class="article-div article-category">-->
<!--      <span>分类</span>-->
<!--      <el-select v-model="categoryValue" clearable placeholder="请选择" size="small">-->
<!--        <el-option-->
<!--            v-for="item in categorys"-->
<!--            :key="item.value"-->
<!--            :label="item.label"-->
<!--            :value="item.value">-->
<!--        </el-option>-->
<!--      </el-select>-->
<!--      <el-button size="mini" class="add-category"  @click="centerDialogVisible = true">新增分类</el-button>-->
<!--      <el-dialog-->
<!--          title="新增分类"-->
<!--          v-model="centerDialogVisible"-->
<!--          width="40%"-->
<!--          center>-->
<!--        <span>分类名称</span>-->
<!--        <el-input v-model="categoryText" maxlength="10" show-word-limit placeholder="请输入内容"></el-input>-->
<!--        <br><br>-->
<!--        <span>分类介绍</span>-->
<!--        <el-input v-model="categoryDescription" maxlength="80" show-word-limit placeholder="请输入内容"></el-input>-->
<!--        <br><br>-->
<!--        <span>背景图片</span>-->
<!--        <el-input placeholder="请输入内容" v-model="categoryImage">-->
<!--          <template #prepend>Https://</template>-->
<!--        </el-input>-->
<!--        <template #footer>-->
<!--          <span class="dialog-footer">-->
<!--            <el-button @click="centerDialogVisible = false">取 消</el-button>-->
<!--            <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>-->
<!--          </span>-->
<!--        </template>-->
<!--      </el-dialog>-->
<!--    </div>-->
<!--    <div class="article-div article-bg">-->
<!--      <span>背景图</span>-->
<!--      <el-upload-->
<!--          class="avatar-uploader"-->
<!--          action="https://jsonplaceholder.typicode.com/posts/"-->
<!--          :show-file-list="false"-->
<!--          :on-success="handleAvatarSuccess"-->
<!--          :before-upload="beforeAvatarUpload"-->
<!--      >-->
<!--        <img v-if="!imageUrl" src="https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg" class="avatar">-->
<!--        <i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
<!--      </el-upload>-->
<!--    </div>-->
<!--  </div>-->
<!--  <div class="editor-content">-->
<!--    <v-md-editor v-model="content"-->
<!--                 left-toolbar="undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code | save | emoji todo-list"-->
<!--                 :disabled-menus="[]"-->
<!--                 @upload-image="handleUploadImage"-->
<!--                 @save="handleSaveArticle"-->
<!--                 height="500px"></v-md-editor>-->
<!--  </div>-->
<!--  <div class="btn">-->
<!--    <el-button type="primary" @click="saveArticle">保存</el-button>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup>-->
<!--  import {ref, unref} from "vue";-->
<!--  import {ElMessage} from "element-plus";-->
<!--  import {articleForm, rules, ruleForm} from "scripts/admin/write/index.js";-->

<!--  // 标签-->
<!--  import {tagValue, tags} from 'scripts/admin/write/articleTag.js'-->

<!--  // 分类-->
<!--  import {-->
<!--    categorys,-->
<!--    categoryValue,-->
<!--    getSelectCategory,-->
<!--    centerDialogVisible,-->
<!--    categoryText,-->
<!--    categoryDescription,-->
<!--    categoryImage-->
<!--  } from 'scripts/admin/write/category.js'-->

<!--  // 图片上传-->
<!--  import {-->
<!--    imageUrl,-->
<!--    handleUploadImage,-->
<!--    handleAvatarSuccess,-->
<!--    beforeAvatarUpload-->
<!--  } from 'scripts/admin/write/uploadImage.js'-->

<!--  const text = ref('')-->

<!--  const content = ref('')-->

<!--  // 保存文章-->
<!--  const handleSaveArticle = (text, html) => {-->
<!--    saveOption()-->
<!--  }-->

<!--  const saveArticle = () => {-->
<!--    let save = document.getElementsByClassName('v-md-icon-save')-->
<!--    save[0].click()-->
<!--  }-->

<!--  const saveOption = async () => {-->
<!--    ElMessage.success({-->
<!--      message: '保存成功',-->
<!--      type: 'success'-->
<!--    });-->
<!--  }-->

<!--</script>-->

<!--<style scoped>-->

<!--  .article-info {-->
<!--    display: grid;-->
<!--    grid-gap: 5px;-->
<!--  }-->
<!--  .article-info .article-div {-->
<!--    display: flex;-->
<!--  }-->

<!--  .article-info .article-div > span {-->
<!--    display: inline-block;-->
<!--    min-width: 64px;-->
<!--    margin-right: 10px;-->
<!--    line-height: 32px;-->
<!--    text-align: right;-->
<!--  }-->

<!--  .title-input {-->
<!--    width: 100%;-->
<!--  }-->

<!--  .editor-content {-->
<!--    margin: 15px 0;-->
<!--  }-->

<!--  .btn {-->
<!--    display: flex;-->
<!--    justify-content: center;-->
<!--    margin-top: 10px;-->
<!--  }-->

<!--  .add-category {-->
<!--    margin: 0 5px;-->
<!--  }-->
<!--</style>-->

<!--<style>-->
<!--  .article-tag .el-select {-->
<!--    width: 100% !important;-->
<!--  }-->

<!--  .article-tag .el-select .select-trigger {-->
<!--    position: relative !important;-->
<!--  }-->

<!--  .article-bg .avatar-uploader .el-upload {-->
<!--    border: 1px dashed #20222a;-->
<!--    border-radius: 6px;-->
<!--    cursor: pointer;-->
<!--    position: relative;-->
<!--    overflow: hidden;-->
<!--  }-->
<!--  .article-bg .avatar-uploader .el-upload:hover {-->
<!--    border-color: #409EFF;-->
<!--  }-->

<!--  .article-bg .avatar-uploader-icon {-->
<!--    font-size: 16px;-->
<!--    color: #8c939d;-->
<!--    width: 40px;-->
<!--    height: 40px;-->
<!--    line-height: 40px;-->
<!--    text-align: center;-->
<!--  }-->

<!--  .article-bg .avatar {-->
<!--    width: 178px;-->
<!--    height: 178px;-->
<!--    display: block;-->
<!--  }-->

<!--  @media screen and (max-width: 1000px){-->
<!--    .article-category .el-dialog {-->
<!--      width: 60% !important;-->
<!--    }-->
<!--  }-->

<!--  @media screen and (max-width: 768px){-->
<!--    .article-category .el-dialog {-->
<!--      width: 90% !important;-->
<!--    }-->
<!--  }-->
<!--</style>-->