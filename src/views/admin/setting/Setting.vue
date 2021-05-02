<template>
  <el-tabs type="border-card">
    <el-tab-pane>
      <template #label>
        <span><i class="fa fa-cog fa-fw"></i>网站设置</span>
      </template>
      <web-site/>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span><i class="fa fa-folder fa-fw"></i>分类</span>
      </template>
      待开发...
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span><i class="fa fa-bullhorn fa-fw"></i>公告</span>
      </template>
      <bull-horn/>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span><i class="fa fa-question fa-fw"></i>关于我</span>
      </template>
      <about/>
    </el-tab-pane>
    <el-tab-pane>
      <template #label>
        <span><i class="fa fa-lock fa-fw"></i>修改密码</span>
      </template>
      <update-password/>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
  import UpdatePassword from "views/admin/setting/UpdatePassword.vue";
  import WebSite from "views/admin/setting/WebSite.vue";
  import BullHorn from "views/admin/setting/BullHorn.vue";
  import About from "views/admin/setting/About.vue";
</script>

<style scoped>

</style>