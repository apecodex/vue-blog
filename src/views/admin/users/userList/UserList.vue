<template>
  <table>
    <thead>
    <tr>
      <th class="th th-username">用户名</th>
      <th class="th th-id">id</th>
      <th class="th th-sex">性别</th>
      <th class="th th-email">邮箱</th>
      <th class="th th-qq">QQ</th>
      <th class="th th-wechat">微信</th>
      <th class="th th-register">注册时间</th>
      <th class="th th-last">最后登录</th>
      <th class="th th-status">状态</th>
    </tr>
    </thead>
    <tbody>
      <tr-item @click="openHandle(userData[index])" @contextmenu.prevent v-for="(item, index) of userData"
               :username="item.username"
               :id="item.id"
               :sex="item.sex"
               :email="item.email"
               :qq="item.qq"
               :wechat="item.wechat"
               :register="item.register"
               :last="item.last"
               :status="item.status"/>
    </tbody>
  </table>

  <el-drawer
      title="修改用户信息"
      v-model="drawer"
      :before-close="handleClose"
      :direction="direction"
      :destroy-on-close="true"
      custom-class="user-drawer"
      size="400px"
      >

    <div class="drawer-container">
      <div class="img">
        <img src="~assets/svg/login/avatar.svg" alt="">
      </div>
      <el-form :model="form" label-width="80px" label-position="top">
        <el-form-item class="bottom-style">
          <span class="label">用户名</span>
          <el-input size="mini" v-model="form.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item class="center-style">
          <el-radio-group v-model="form.sex" size="small">
            <el-space>
              <el-radio-button size="mini" label="男"></el-radio-button>
              <el-radio-button size="mini" label="女"></el-radio-button>
            </el-space>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <span class="label">邮箱</span>
          <el-input size="mini" v-model="form.email" placeholder="邮箱"></el-input>
        </el-form-item>
        <el-form-item>
          <span class="label">QQ</span>
          <el-input size="mini" v-model="form.qq" placeholder="QQ"></el-input>
        </el-form-item>
        <el-form-item class="bottom-style">
          <span class="label">Wechat</span>
          <el-input size="mini" v-model="form.wechat" placeholder="微信"></el-input>
        </el-form-item>
        <el-form-item class="center-style">
          <el-switch
              v-model="form.status"
              active-color="#13ce66"
              inactive-color="#ff4949" >
          </el-switch>
        </el-form-item>
        <el-form-item class="center-style">
          <el-button round @click="closeHandle">取消</el-button>
          <el-button type="primary" roundmd>保存</el-button>
        </el-form-item>
      </el-form>
    </div>
  </el-drawer>

</template>

<script setup>
  import TrItem from "views/admin/users/userList/TrItem.vue";

  import {computed, ref, watch, watchEffect} from "vue";
  import MessageBox from "element-plus/es/el-message-box";
  import {ElMessage} from "element-plus";

  const drawer = ref(false)
  const direction = ref('rtl')
  const drawerData = ref({})


  const form = ref({
    username: '',
    sex: '',
    email: '',
    qq: '',
    wechat: '',
    status: ''
  })

  const openHandle = data => {
    drawerData.value = {}
    drawer.value = true
    drawerData.value = data

    form.value.username = drawerData.value.username
    form.value.sex = drawerData.value.sex
    form.value.email = drawerData.value.email
    form.value.qq = drawerData.value.qq
    form.value.wechat = drawerData.value.wechat
    form.value.status = drawerData.value.status
  }

  const closeHandle = () => {
    drawer.value = false
    ElMessage({
      type: 'info',
      message: '已取消修改'
    });
  }

  const handleClose = (done) => {
    MessageBox.confirm('发现内容已经修改，是否保存？', '提示',{
      confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
    }).then(() => {
      ElMessage({
        type: 'success',
        message: '保存成功!'
      });
    }).catch(() => {
      ElMessage({
        type: 'info',
        message: '已取消修改'
      });
    })
    done();
  }

  const userData = ref([
    {username: 'apecode1', id: '123456', sex: '男', email: 'apecode@qq.com', qq: '1473018671', wechat: 'apecodewx', register: '2021-1-1', last: '2021-1-1', status: true},
    {username: 'apecode2', id: '123456', sex: '女', email: '84651618@qq.com', qq: '84651618', wechat: 'wqdsadw', register: '2021-1-1', last: '2021-1-1', status: false},
    {username: 'apecode3', id: '123456', sex: '男', email: '53722057@qq.com', qq: '53722057', wechat: 'dsadqw', register: '2021-1-1', last: '2021-1-1', status: true},
    {username: 'apecode4', id: '123456', sex: '男', email: '456385236@qq.com', qq: '456385236', wechat: 'sdaswdsdq', register: '2021-1-1', last: '2021-1-1', status: true},
    {username: 'apecode5', id: '123456', sex: '男', email: '245414467@qq.com', qq: '245414467', wechat: 'xcawsdq', register: '2021-1-1', last: '2021-1-1', status: false},
    {username: 'apecode6', id: '123456', sex: '男', email: 'apecode@qq.com', qq: '1473018671', wechat: 'apecodewx', register: '2021-1-1', last: '2021-1-1', status: true},
    {username: 'apecode7', id: '123456', sex: '女', email: 'apecode@qq.com', qq: '1473018671', wechat: 'apecodewx', register: '2021-1-1', last: '2021-1-1', status: true},
    {username: 'apecode8', id: '123456', sex: '男', email: 'apecode@qq.com', qq: '1473018671', wechat: 'apecodewx', register: '2021-1-1', last: '2021-1-1', status: true},
    {username: 'apecode9', id: '123456', sex: '男', email: 'apecode@qq.com', qq: '1473018671', wechat: 'apecodewx', register: '2021-1-1', last: '2021-1-1', status: false},
    {username: 'apecode10', id: '123456', sex: '男', email: 'apecode@qq.com', qq: '1473018671', wechat: 'apecodewx', register: '2021-1-1', last: '2021-1-1', status: true},
  ])
</script>

<style scoped>

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 800px;
    font-weight: bolder;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-bottom: 10px;
  }

  thead th {
    padding: 7px 5px;
    background: #6e0832;
    height: 100%;
    color: #ffffff;
  }

  thead th:first-child {
    border-radius: 4px 0 0 4px;
  }

  thead th:last-child {
    border-radius: 0 4px 4px 0;
  }

  th.th-username {
    text-align: left;
  }

  /* drawer */
  .drawer-container div.img {
    width: 80px;
    height: 80px;
    margin: 0 auto 20px;
  }

  .drawer-container div.img img {
    width: 100%;
  }

  .label {
    position: absolute;
    top: -26px;
    left: 5px;
    font-size: 14px;
    z-index: 1;
  }

</style>

<style>
  /* 修改原样式 */
  .user-drawer input {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
    font-weight: 600;
    padding: 0 5px;
  }

  .user-drawer input::placeholder {
    font-size: 12px;
  }

  .user-drawer header {
    font-size: 22px;
    font-weight: bolder;
  }

  .user-drawer section {
    padding: 0 6px;
    max-height: 800px;
    overflow-y: auto;
  }

  .bottom-style {
    margin-bottom: 0;
  }

  .center-style {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 996px){
    .user-drawer {
      width: 40% !important;
    }
  }

  @media screen and (max-width: 768px){
    /* 移动端会变成全屏，这里避免让它变成全屏 */
    .el-message-box {
      width: 95%;
    }

    .user-drawer {
      width: 50% !important;
    }
  }

  @media screen and (max-width: 480px) {
    .user-drawer {
      width: 100% !important;
    }
  }
</style>