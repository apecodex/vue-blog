<template>
  <div class="website-friend-link-container">
    <el-form label-position="right" label-width="80px">
      <el-form-item label="友情链接">
        <el-tag
            :key="index"
            v-for="(link, index) of dynamicFriendLinks"
            closable
            effect="dark"
            :disable-transitions="false"
            @close="handleClose(tag)">
          {{ link.name }}
        </el-tag>
        <el-button class="button-new-tag" size="small" @click="showInput">+ 新增友链</el-button>
      </el-form-item>
    </el-form>

    <el-dialog title="新增链接" v-model="dialogFormVisible">
      <el-form :model="newFriendLinkForm" ref="newFriendLinkRef" :rules="newFriendLinkRules" label-width="80px">
        <el-form-item label="友链名称" prop="name">
          <el-input v-model="newFriendLinkForm.name" maxlength="20" show-word-limit autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="链接" prop="link">
          <el-input v-model="newFriendLinkForm.link" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
    <span class="dialog-footer">
      <el-button size="small" @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" size="small" :loading="loading" @click="save">{{ loading ? '保存中': '保存' }}</el-button>
    </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import {ElMessage, ElMessageBox} from "element-plus";

const loading = ref(false)
const dialogFormVisible = ref(false)
const dynamicFriendLinks = ref([
  {'name': 'github', 'icon': 'fa-github', isLink: true, 'description': 'https://github.com/rookiesmile'},
  {'name': 'wechat', 'icon': 'fa-weixin', isLink: false, 'description': 'apecodewx'},
  {'name': 'qq', 'icon': 'fa-qq', isLink: false, 'description': '1473018671'},
  {'name': 'email', 'icon': 'fa-envelope', isLink: false, 'description': 'apecode@qq.com'},
])

const newFriendLinkForm = ref({
  name: '',
  link: ''
})

const newFriendLinkRef = ref(null)

const validateName = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('友链名不能为空'))
  } else if (value.length > 20) {
    callback(new Error('最多20个字'))
  } else {
    callback()
  }
}

const validateLink = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('链接不能为空'))
  } else {
    callback()
  }
}

const newFriendLinkRules = ref({
  name: [{ required: true, validator: validateName, trigger: 'blur' }],
  link: [{ required: true, validator: validateLink, trigger: 'blur' }],
})

const checkForm = () => {
  return newFriendLinkForm.value.name !== '' &&
      newFriendLinkForm.value.link !== ''
}

const handleClose = (tag) => {
  ElMessageBox.confirm('确定删除该友链吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    dynamicFriendLinks.value.splice(dynamicFriendLinks.value.indexOf(tag), 1);
    ElMessage({
      message: '删除成功',
      type: 'success'
    });
  }).catch(() => {
    ElMessage({
      message: '已取消删除',
      type: 'info'
    })
  })
}

const showInput = () => {
  dialogFormVisible.value = !dialogFormVisible.value
}

const save = () => {
  newFriendLinkRef.value.validate((valid) => {
    if (valid) {
      if (checkForm()) {
        loading.value = !loading.value
        let timeout;
        clearTimeout(timeout);
        timeout = setTimeout(() => {
          loading.value = !loading.value
          dynamicFriendLinks.value.push({'name': newFriendLinkForm.value.name, 'icon': newFriendLinkForm.value.icon, isLink: newFriendLinkForm.value.isLink, 'description': newFriendLinkForm.value.desc})
          showInput()
          ElMessage.success({
            message: '保存成功',
            type:'success'
          })
        }, 3000 )
      }
    } else {
      return false
    }
  })
}
</script>

<style scoped>

</style>

<style>
.website-friend-link-container .el-tag + .el-tag {
  margin-left: 10px;
}
.website-friend-link-container .button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.website-friend-link-container .input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}

@media screen and (max-width: 1000px){
  .website-friend-link-container .el-dialog {
    width: 60% !important;
  }
}

@media screen and (max-width: 768px){
  .website-friend-link-container .el-dialog {
    width: 95% !important;
  }
}
</style>