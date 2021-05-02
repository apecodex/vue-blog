<template>
  <comment rows="6" :btnText="loading ? '发布中':'发布'" :content="content()" :onSubmit="onSubmit" :loading="loading"></comment>
</template>

<script setup>
import {entitiestoUtf16, utf16toEntities} from 'utils/utils.js'
import {ref} from "vue";
import {ElMessage} from "element-plus";
const loading = ref(false)

const data = {'text': 'welcome', 'aboutTitle': '努力奔跑',
    'content': [
  '深入钻研自己所学，无论学习什么都要搞清楚，弄明白。',
  '多读书，无论题材，多多涉猎，充实自己。',
  '多健身、运动，对生活充满热情，做个阳光大男孩。',
  '多写博客，记录成长的点点滴滴。'
]
}

const content = ref(text => {
  let s = ''
  let num = data.content.length
  data.content.forEach((item,index,array)=>{
    s+=item
    if (num !== index+1) {
      s +='\n'
    }
  })
  return s
  // text = entitiestoUtf16(text)
  // return text.split('\n')
})
// const content = ref('some text some text some text')

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