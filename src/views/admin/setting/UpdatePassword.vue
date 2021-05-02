<template>
  <el-form :model="websiteUpdatePassForm" :rules="rules" ref="websiteUpdatePassFormRef" label-position="right" label-width="80px" class="websiteName-ruleForm">
    <el-form-item label="旧密码" size="mini" prop="oldPass">
      <el-input type="password" v-model="websiteUpdatePassForm.oldPass" autocomplete="off" show-password style="width: 220px"></el-input>
    </el-form-item>
    <el-form-item label="密码" size="mini" prop="pass">
      <el-input type="password" v-model="websiteUpdatePassForm.pass" autocomplete="off" show-password style="width: 220px"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" size="mini" prop="checkPass">
      <el-input type="password" v-model="websiteUpdatePassForm.checkPass" autocomplete="off" show-password style="width: 220px"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" :loading="loading" @click="save">{{ loading ? '保存中': '保存' }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import {ref} from 'vue'
import {ElMessage} from "element-plus";
const websiteUpdatePassFormRef = ref(null)
const loading = ref(false)
const websiteUpdatePassForm = ref({
  oldPass: '',
  pass: '',
  checkPass: ''
})

const clearForm = () => {
  websiteUpdatePassForm.value.oldPass = ''
  websiteUpdatePassForm.value.pass = ''
  websiteUpdatePassForm.value.checkPass = ''
}

const validateOldPass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入旧密码'))
  } else {
    callback()
  }
}

let validatePass = (rule, value, callback) => {

  if (value === '') {
    callback(new Error('请输入密码'));
  } else {
    let re = new RegExp('^(?![0-9]+$)(?![a-z]+$)(?![A-Z]+$)(?!([^(0-9a-zA-Z)])+$).{6,20}')
    let result = re.test(value)
    if (!result) {
      callback(new Error('密码包含 数字,英文,字符中的两种以上，长度6-20'))
    }
    // if (websiteUpdatePassForm.value.checkPass !== '') {
    //   websiteUpdatePassForm.value.validateField('checkPass');
    // }
    callback();
  }
};
let validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'));
  } else if (value !== websiteUpdatePassForm.value.pass) {
    callback(new Error('两次输入密码不一致!'));
  } else {
    callback();
  }
};

const rules = ref({
  oldPass: [
    { required: true, validator: validateOldPass, trigger: 'blur' }
  ],
  pass: [
    { required: true, validator: validatePass, trigger: 'blur' }
  ],
  checkPass: [
    { required: true, validator: validatePass2, trigger: 'blur' }
  ]
})

const save = () => {
  websiteUpdatePassFormRef.value.validate((valid) => {
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
        clearForm()
      }, 3000 )
    } else {
      return false
    }
  })

}
</script>

<style scoped>

</style>