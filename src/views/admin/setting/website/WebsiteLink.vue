<template>
  <div class="website-link-container">
    <el-form label-position="right" label-width="80px">
      <el-form-item label="个人链接">
        <el-tag
            :key="index"
            v-for="(link, index) of dynamicLinks"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)">
          <i style="color: #000000" class="fa fa-fw" :class="[link.icon]" aria-hidden="true"></i>{{ link.name }}
        </el-tag>
        <el-button class="button-new-tag" size="small" @click="showInput">+ 新增链接</el-button>
      </el-form-item>
    </el-form>

    <el-dialog title="新增链接" v-model="dialogFormVisible">
      <el-form :model="newLinkForm" ref="newLinkRef" :rules="newLinkRules" label-width="80px">
        <el-form-item label="链接名称" prop="name">
          <el-input v-model="newLinkForm.name" maxlength="10" show-word-limit autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="图标" prop="icon">
          <p>图标仅支持<b><a href="http://www.fontawesome.com.cn/">fontawesome</a></b><br/>效果：<i class="fa fa-fw" :class="[newLinkForm.icon]"></i></p>
          <el-input v-model="newLinkForm.icon" autocomplete="off" placeholder="例：fa-bath"></el-input>
        </el-form-item>
        <el-form-item label="能否跳转" >
          <el-radio v-model="newLinkForm.isLink" :label="true">能</el-radio>
          <el-radio v-model="newLinkForm.isLink" :label="false">不能</el-radio>
        </el-form-item>
        <el-form-item label="描述" prop="desc">
          <el-input v-if="newLinkForm.isLink" v-model="newLinkForm.desc" autocomplete="off" placeholder="请输入可跳转的链接"></el-input>
          <el-input v-else v-model="newLinkForm.desc" autocomplete="off" maxlength="20" show-word-limit placeholder="请描述该链接"></el-input>
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
  const dynamicLinks = ref([
    {'name': 'github', 'icon': 'fa-github', isLink: true, 'description': 'https://github.com/rookiesmile'},
    {'name': 'wechat', 'icon': 'fa-weixin', isLink: false, 'description': 'apecodewx'},
    {'name': 'qq', 'icon': 'fa-qq', isLink: false, 'description': '1473018671'},
    {'name': 'email', 'icon': 'fa-envelope', isLink: false, 'description': 'apecode@qq.com'},
  ])

  const newLinkForm = ref({
    name: '',
    icon: '',
    isLink: true,
    desc: ''
  })

  const newLinkRef = ref(null)

  const validateName = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('链接名不能为空'))
    } else if (value.length > 10) {
      callback(new Error('最多10个字'))
    } else {
      callback()
    }
  }

  const validateIcon = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('图标不能为空'))
    } else {
      callback()
    }
  }

  const validateDesc = (rule, value, callback) => {
    if (newLinkForm.value.isLink) {
      if (value === '') {
        callback(new Error('不能为空'))
      } else if (value.length > 20) {
        callback(new Error('最多20个字符'))
      } else {
        callback()
      }
    } else {
      if (value === '') {
        callback(new Error('链接不能为空'))
      } else {
        callback()
      }
    }

  }

  const newLinkRules = ref({
    name: [{ required: true, validator: validateName, trigger: 'blur' }],
    icon: [{ required: true, validator: validateIcon, trigger: 'blur' }],
    desc: [{ required: true, validator: validateDesc, trigger: 'blur' }],
  })

  const checkForm = () => {
    return newLinkForm.value.name !== '' &&
        newLinkForm.value.icon !== '' &&
        newLinkForm.value.desc !== ''
  }

  const handleClose = (tag) => {
    ElMessageBox.confirm('确定删除该链接吗？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(() => {
      dynamicLinks.value.splice(dynamicLinks.value.indexOf(tag), 1);
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
    newLinkRef.value.validate((valid) => {
      if (valid) {
        if (checkForm()) {
          loading.value = !loading.value
          let timeout;
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            loading.value = !loading.value
            dynamicLinks.value.push({'name': newLinkForm.value.name, 'icon': newLinkForm.value.icon, isLink: newLinkForm.value.isLink, 'description': newLinkForm.value.desc})
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
  .website-link-container .el-tag + .el-tag {
    margin-left: 10px;
  }
  .website-link-container .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .website-link-container .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }

  @media screen and (max-width: 1000px){
    .website-link-container .el-dialog {
      width: 60% !important;
    }
  }

  @media screen and (max-width: 768px){
    .website-link-container .el-dialog {
      width: 95% !important;
    }
  }
</style>