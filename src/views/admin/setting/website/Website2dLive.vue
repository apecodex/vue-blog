<template>
  <el-form label-width="80px">
    <el-form-item label="看板娘">
      <el-switch v-model="value" :loading="loading" @change="beforeChange"></el-switch>
    </el-form-item>
  </el-form>
</template>

<script setup>
import {ref} from "vue";
import {ElMessage} from "element-plus";

const value = ref(true)
const loading = ref(false)

const beforeChange = () => {
  loading.value = true
  return new Promise(resolve => {
    setTimeout(() => {
      if (value.value) {
        loading.value = false
        ElMessage.success('开启成功')
      } else {
        loading.value = false
        ElMessage.success('关闭成功')
      }
      return resolve(true)
    }, 1000)
  })
}
</script>

<style scoped>

</style>