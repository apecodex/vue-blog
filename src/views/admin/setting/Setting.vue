<template>
  <el-tabs type="border-card">
    <el-tab-pane>
      <template #label>
        <span><i class="el-icon-set-up"></i>网站设置</span>
      </template>
      <web-site></web-site>
    </el-tab-pane>
    <el-tab-pane label="修改密码">
      <update-password/>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
  import UpdatePassword from "views/admin/setting/UpdatePassword.vue";
  import WebSite from "views/admin/setting/WebSite.vue";
</script>

<style scoped>

</style>