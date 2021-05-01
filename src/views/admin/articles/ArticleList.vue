<template>
  <el-table
      :data="tableData"
      style="width: 100%">
    <el-table-column type="expand">
      <template #default="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="文章名称">
            <span>{{ props.row.title }}</span>
          </el-form-item>
          <el-form-item label="标签">
            <span>{{ props.row.tags.join(', ') }}</span>
          </el-form-item>
          <el-form-item label="文章 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <el-form-item label="发布时间">
            <span>{{ props.row.createTime }}</span>
          </el-form-item>
          <el-form-item label="文章分类">
            <span>{{ props.row.category }}</span>
          </el-form-item>
          <el-form-item label="最后修改">
            <span>{{ props.row.lastTime }}</span>
          </el-form-item>
          <el-form-item label="评论量">
            <span>{{ props.row.commentNum }}</span>
          </el-form-item>
          <el-form-item label="阅读量">
            <span>{{ props.row.readNum }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
        label="文章名称"
        prop="title"
        width="210">
    </el-table-column>
    <el-table-column
    label="作者"
    align="center"
    width="180">
    <template #default="scope">
      <el-popover effect="light" trigger="hover" placement="top" >
        <template #default>
          <div  style="display: flex;flex-direction: column;align-items: center;margin-bottom: 5px">
            <el-avatar :size="50" src="http://localhost:3000/src/assets/img/head.jpg"></el-avatar>
          </div>
          <p>id: {{ scope.row.id }}</p>

        </template>
        <template #reference>
          <div class="name-wrapper">
            <a href="javascript:;"><el-tag size="medium">{{ scope.row.author }}</el-tag></a>
          </div>
        </template>
      </el-popover>
    </template>
    </el-table-column>
    <el-table-column
        label="创建时间"
        prop="createTime" align="center">
    </el-table-column>
    <el-table-column
        label="状态" align="center">
      <template #default="scope">
        <el-popconfirm
            confirmButtonText='好的'
            cancelButtonText='不用了'
            icon="el-icon-info"
            iconColor="red"
            title="是否改变文章状态"
            @confirm="changeArticleState(scope.$index, scope.row)"
        >
          <template #reference>
            <el-tag
                :type="scope.row.state === true ? 'success' : 'danger'"
                disable-transitions>{{scope.row.state ? '已发布':'未发布'}}</el-tag>
          </template>
        </el-popconfirm>
      </template>
    </el-table-column>
    <el-table-column width="210"  align="center">
      <template #header>
        <el-autocomplete
            v-model="state"
            :fetch-suggestions="querySearchAsync"
            placeholder="查找文章"
            @select="handleSelect"
        ></el-autocomplete>
      </template>
      <template #default="scope">
        <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">
          <router-link :to="{path: '/admin/write',query: {id: scope.row.id}}">Edit</router-link>
        </el-button>
        <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup>
  import {tableData, handleEdit, handleDelete, changeArticleState} from "scripts/admin/articles/table";
  import {
    restaurants,
    state,
    handleSelect,
    querySearchAsync,
    loadAll
  } from "scripts/admin/articles/search";

  import {onMounted} from "vue";

  onMounted(() => {
    restaurants.value = loadAll();
  });
</script>

<style scoped>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>