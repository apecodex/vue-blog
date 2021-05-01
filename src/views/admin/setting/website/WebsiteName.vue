<template>
  <el-form :model="websiteNameForm" :rules="rules" ref="websiteNameFormRef" label-position="right" label-width="80px" class="websiteName-ruleForm">
    <el-form-item label="网站名称" size="mini" prop="name">
      <el-space>
        <el-input
            type="text"
            placeholder="请输入内容"
            v-model="websiteNameForm.name"
            maxlength="10"
            show-word-limit
            autocomplete="off"
            style="width: 200px"
        >
        </el-input>
        <el-button type="primary" :loading="loading" @click="save">{{ loading ? '保存中': '保存' }}</el-button>
      </el-space>
    </el-form-item>
  </el-form>
</template>

<script setup>
import {ref} from 'vue'
import {ElMessage} from "element-plus";
const websiteNameFormRef = ref(null)
const loading = ref(false)
const websiteNameForm = ref({
  name: 'apecode',
})

const validateName = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('不能为空'))
  } else if (value.length > 10) {
    callback(new Error('最多10个字符'))
  } else {
    callback()
  }
}

const rules = ref({
  name: [
    { required: true, validator: validateName, trigger: 'blur' }
  ]
})

const save = () => {
  websiteNameFormRef.value.validate((valid) => {
    if (valid) {
      loading.value = !loading.value
      let timeout;
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        loading.value = !loading.value
        ElMessage.success({
          message: '保存成功',
          type:'success'
        })
      }, 3000 )
    } else {
      return false
    }
  })

}
</script>

<style scoped>

</style>