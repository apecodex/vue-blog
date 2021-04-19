<template>
  <div class="item">
    <header>
      <span class="img">
        <a href="##">
          <img :src="messageFrom.avatar" alt="">
        </a>
      </span>
      <div class="user-info">
        <div>
          <span>{{ messageFrom.name }}</span>
          <small>{{ messageTime }}</small>
        </div>
      </div>
    </header>
    <div class="content text-scrollbar-y">
      <p v-for="(item, index) in content(contents)" :key="index">
        {{ item }}
      </p>
    </div>
    <div class="btn-box">
      <el-popover
          placement="bottom"
          :width="400"
          trigger="click"
          popper-class="popover-style"
      >
        <template #reference>
          <button class="reply">回复</button>
        </template>
        <!-- 评论 -->
        <comment action="" rows="4" btnText="回复" :onSubmit="onSubmit"></comment>
      </el-popover>
      <button :class="{'show': contentShow, 'no-show': !contentShow}" @click="showBtn">{{ contentShow ? '不展示':'展示' }}</button>
      <el-popconfirm
          confirmButtonText='好的'
          cancelButtonText='不用了'
          icon="el-icon-info"
          iconColor="red"
          @confirm="deleteMessage"
          @cancel="cancel"
          title="确定删除该留言吗？"
      >
        <template #reference>
          <button class="delete">删除</button>
        </template>
      </el-popconfirm>
      <el-popover
          placement="bottom"
          :width="400"
          trigger="click"
          popper-class="popover-style"
      >
        <template #reference>
          <button class="update">修改</button>
        </template>
        <!-- 评论 -->
        <comment action="" rows="4" btnText="修改" :content="entitiestoUtf16(contents)" :onSubmit="onSubmit"></comment>
      </el-popover>
    </div>
  </div>
</template>

<script setup>
  import Comment from "common/comment/Comment.vue"
  import {entitiestoUtf16, utf16toEntities} from 'utils/utils.js'
  import {defineEmit, defineProps, ref} from "vue";
  import {ElMessage} from "element-plus";

  const emit = defineEmit(['delete'])

  const props = defineProps({
    messageFrom: {},
    messageTime: String,
    isShow: {
      type: Boolean,
      default: true
    },
    contents: {
      type: String,
      default: ''
    },
    currentIndex: Number
  })

  // 处理换行
  const content = ref(text => {
    text = entitiestoUtf16(text)
    return text.split('\n')
  })

  // 删除留言
  const deleteMessage = () => {
    emit('delete', props.currentIndex)
  }

  // 取消删除
  const cancel = () => {
    ElMessage('已取消');
  }

  // 处理是否展示该评论
  const contentShow = ref(props.isShow)

  const showBtn = () => {
    contentShow.value = !contentShow.value
    ElMessage.success({
      message: '修改成功!',
      type: 'success'
    });
  }

  const onSubmit = (e, a) => {
    console.log(a);

    e.preventDefault()
  }
</script>

<style scoped>
  .item {
    background: #111111;
    padding: 5px 10px;
    border-radius: 6px;
  }

  .item header {
    display: flex;
    align-items: baseline;
    width: 100%;
  }

  .item span.img {
    margin-right: 15px;
  }

  .item span a {
    display: inline-block;
    width: 42px;
    height: 42px;
  }

  .item span.img img {
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    vertical-align: middle;
  }

  .item .user-info {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .item .user-info span {
    font-weight: bold;
  }

  .item .user-info small {
    font-size: 12px;
    padding: 0 10px;
  }

  .item .content {
    margin: 5px 0;
    min-height: 55px;
    max-height: 70px;
    overflow-y: auto;
  }

  .item .btn-box button {
    padding: 1px 8px;
    outline: none;
    background: transparent;
    border: 0;
    color: #ffffff;
    border-radius: 4px;
    margin-right: 10px;
  }

  .item .btn-box button:hover {
    background: #ffffff;
    color: #20222a;
  }

  .item .btn-box .reply {
    background: #03a9f4;
    color: #ffffff;
  }

  .item .btn-box .show {
    background: #149708;
    color: #ffffff;
  }

  .item .btn-box .no-show {
    background: #6e0832;
    color: #ffffff;
  }

  .item .btn-box .delete {
    background: #ff0000;
    color: #ffffff;
  }

  .item .btn-box .update {
    background: #4c267e;
    color: #ffffff;
  }
</style>