<template>
  <div class="btn">
    <button v-if="reply" @click="openReply" class="reply" :class="{'dark': dark}">回复</button>
    <button v-if="comment" @click="openComments" class="comment"  :class="{'dark': dark}">评论(99+)</button>
    <button v-if="show" :class="{'show': contentShow, 'no-show': !contentShow}" @click="showBtn">{{ contentShow ? '不展示':'展示' }}</button>
    <el-popconfirm
        v-if="delete"
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
    <el-popover v-if="update"
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
</template>

<script setup>
  import {entitiestoUtf16, utf16toEntities} from 'utils/utils.js'

  import {defineEmit, defineProps, ref} from "vue";
  import {ElMessage} from "element-plus";

  const emit = defineEmit(['openReply', 'openComments', 'delete'])
  const props = defineProps({
    dark: {
      type: Boolean,
      default: false
    },

    // 需要那些按钮
    reply: { // 回复
      type: Boolean,
      default: true
    },
    comment: {  // 评论
      type: Boolean,
      default: false
    },
    show: { // 评论展示
      type: Boolean,
      default: false
    },
    delete: { // 删除评论
      type: Boolean,
      default: false
    },
    update: { // 修改评论
      type: Boolean,
      default: false
    },

    contents: {
      type: String,
      default: ''
    },
    currentIndex: Number,

  })

  const replyShow = ref(false)
  const commentsShow = ref(false)

  // 打开回复输入框
  const openReply = () => {
    replyShow.value = !replyShow.value
    emit('openReply', replyShow.value)
  }

  // 打开评论
  const openComments = () => {
    commentsShow.value = !commentsShow.value
    emit('openComments', commentsShow.value)

  }

  // 删除留言
  const deleteMessage = () => {
    emit('delete', props.currentIndex)
  }

  // 取消删除
  const cancel = () => {
    ElMessage('已取消');
  }

  // 处理是否展示该评论
  const contentShow = ref(props.show)

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
  .btn button {
    padding: 1px 8px;
    outline: none;
    background: #ffffff;
    border: 0;
    color: #20222a;
    border-radius: 4px;
    margin-right: 10px;
    margin-bottom: 5px;
  }

  .btn button.dark {
    background: transparent;
    color: #ffffff;
  }

  .show {
    background: #149708 !important;
    color: #ffffff !important;
  }

  .no-show {
    background: #6e0832 !important;
    color: #ffffff !important;
  }

  .delete {
    background: #ff0000 !important;
    color: #ffffff !important;
  }

  .update {
    background: #4c267e !important;
    color: #ffffff !important;
  }

  .btn button:hover {
    background: #20222a !important;
    color: #ffffff!important;
  }

  .btn button.dark:hover {
    background: #ffffff !important;
    color: #20222a!important;
  }

</style>