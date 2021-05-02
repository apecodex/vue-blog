<template>
  <p>当前公告: <span style="color: crimson">{{ entitiestoUtf16(content) }}</span></p>
  <br>
  <comment :btnText="loading ? '发布中':'发布'" :content="content" :onSubmit="onSubmit" :loading="loading"></comment>
</template>

<script setup>
  import {entitiestoUtf16, utf16toEntities} from 'utils/utils.js'
  import {ref} from "vue";
  import {ElMessage} from "element-plus";
  const loading = ref(false)

  const content = ref('some text some text some text')

  const onSubmit = (e, a) => {
    loading.value = !loading.value
    let timeout;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      loading.value = !loading.value
      content.value = a
      console.log(a);
      ElMessage.success({
        message: '发布成功',
        type:'success'
      })
    }, 3000 )

    e.preventDefault()
  }
</script>

<style scoped>

</style>