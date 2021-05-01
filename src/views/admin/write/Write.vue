<template>
  <div class="article-write-container">
    <el-form :model="articleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px">
      <!-- 标题 -->
      <el-form-item label="文章标题" prop="articleTitle">
        <el-input
            type="text"
            placeholder="请输入内容"
            v-model="articleForm.articleTitle"
            size="small"
            maxlength="20"
            show-word-limit
        />
      </el-form-item>
      <!-- 标签 -->
      <el-form-item label="标签" prop="articleTag" class="article-tag">
        <el-select
            v-model="articleForm.articleTag"
            multiple
            filterable
            allow-create
            size="small"
            default-first-option
            placeholder="请选择文章标签">
          <el-option
              v-for="item in tags"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <!-- 分类 -->
      <el-form-item label="分类" prop="categoryValue">
        <el-select v-model="articleForm.categoryValue" clearable placeholder="请选择" size="small">
          <el-option
              v-for="item in categorys"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
        <el-button size="mini" class="add-category"  @click="centerDialogVisible = true">新增分类</el-button>
      </el-form-item>
      <!--背景图片-->
      <el-form-item label="背景图" prop="imageUrl">
        <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
        >
          <img v-if="articleForm.imageUrl" :src="articleForm.imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <!-- markdown -->
      <v-md-editor v-model="articleForm.articleContent"
                   left-toolbar="undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code | save | emoji todo-list"
                   :disabled-menus="[]"
                   @upload-image="handleUploadImage"
                   @save="handleSaveArticle"
                   height="500px"></v-md-editor>
      <el-form-item>
        <div class="submitBtn">
          <el-button type="primary" @click="handleSaveArticle(true)">提交</el-button>
          <el-button type="info" @click="clearAll">清空</el-button>
        </div>
      </el-form-item>
    </el-form>

    <!-- 新增分类表单 -->
    <el-dialog
        title="新增分类"
        v-model="centerDialogVisible"
        width="40%"
        center>
      <el-form :model="categoryForm" status-icon :rules="categoryRules" ref="categoryRef" label-width="100px">
        <el-form-item label="分类名称" prop="categoryText">
          <el-input v-model="categoryForm.categoryText" maxlength="10" show-word-limit placeholder="请输入内容"></el-input>
        </el-form-item>
        <el-form-item label="分类说明" prop="categoryDescription">
          <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4}"
              placeholder="请输入内容"
              maxlength="80"
              show-word-limit
              v-model="categoryForm.categoryDescription">
          </el-input>
        </el-form-item>
        <el-form-item label="分类背景" prop="categoryImage">
          <el-input placeholder="请输入背景图链接" v-model="categoryForm.categoryImage">
            <template #prepend>仅Https</template>
          </el-input>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="closeNewCategory">取 消</el-button>
          <el-button type="primary" @click="saveNewCategory">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { articleForm, rules, ruleForm, handleSaveArticle, clearAll } from "scripts/admin/write/index";
// 标签
import {tagValue, tags} from 'scripts/admin/write/articleTag'

// 分类
import {
  categorys,
  categoryValue,
  getSelectCategory,
  centerDialogVisible,
  categoryText,
  categoryDescription,
  categoryImage,
  //  新增分类
  categoryForm,
  categoryRef,
  categoryRules,
  closeNewCategory,
  saveNewCategory
} from 'scripts/admin/write/category'

// 图片上传
import {
  handleUploadImage,
  handleAvatarSuccess,
  beforeAvatarUpload
} from 'scripts/admin/write/uploadImage'

import {useRoute} from "vue-router";
const route = useRoute()

if (route.query.id !== undefined) {
  articleForm.value.articleTitle = '关于我的博客的开发历程'
  articleForm.value.articleTag = ['Java', 'Python']
  articleForm.value.categoryValue = '编程'
  articleForm.value.imageUrl = 'https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg'
  articleForm.value.articleContent = '# hello'
}

</script>

<style scoped>
  .article-write-container {
    background: #ffffff;
    border-radius: 6px;
    padding: 10px;
  }

  .add-category {
    margin: 0 5px;
  }

  .submitBtn {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-left: -100px;
  }
</style>

<style>
.article-write-container .article-tag .el-select {
  width: 100% !important;
}

.article-write-container .el-select .select-trigger {
  position: relative !important;
}

.article-write-container .avatar-uploader .el-upload {
  border: 1px dashed #20222a;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.article-write-container .avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.article-write-container .avatar-uploader-icon {
  font-size: 16px;
  color: #8c939d;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
}

.article-write-container .avatar {
  width: 178px;
  height: 178px;
  display: block;
}

@media screen and (max-width: 1000px){
  .article-category .el-dialog {
    width: 60% !important;
  }
}

@media screen and (max-width: 768px){
  .article-category .el-dialog {
    width: 90% !important;
  }
}
</style>