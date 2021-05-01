<template>
  <el-form :model="websiteDescForm" :rules="rules" ref="websiteDescFormRef" label-position="right" label-width="80px" class="websitedesc-ruleForm">
    <el-form-item label="个性签名" size="mini" prop="desc">
      <el-space>
        <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="websiteDescForm.desc"
            maxlength="80"
            show-word-limit
            autocomplete="off"
            style="width: 260px"
            class="textarea-y"
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
const websiteDescFormRef = ref(null)
const loading = ref(false)
const websiteDescForm = ref({
  desc: 'some description some description',
})

const validateDesc = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('不能为空'))
  } else if (value.length > 80) {
    callback(new Error('最多80个字符'))
  } else {
    callback()
  }
}

const rules = ref({
  desc: [
    { required: true, validator: validateDesc, trigger: 'blur' }
  ]
})

const save = () => {
  websiteDescFormRef.value.validate((valid) => {
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

<style>

  /* 文本框Y轴的滚动条 */
  .websitedesc-ruleForm .textarea-y textarea::-webkit-scrollbar  {
    width: 6px;
  }

  .websitedesc-ruleForm .textarea-y textarea::-webkit-scrollbar-thumb  {
    border-radius: 4px;
    box-shadow: inset 0 0 6px rgb(38, 37, 37);
    background: rgb(38, 37, 37);
    background-clip: border-box;
  }
</style>