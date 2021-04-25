// // 保存文章
// import {ElMessage} from "element-plus";
// import {articleForm} from './index.js'
// import {ref} from "vue";
//
// const text = ref('')
// const html = ref('')
//
// const saveArticle = () => {
//   let save = document.getElementsByClassName('v-md-icon-save')
//   save[0].click()
// }
//
// const saveOption = async (t, h) => {
//   if (articleForm.value.articleTitle !== '' &&
//       articleForm.value.articleTag.length !== 0
//       && articleForm.value.categoryValue !== ''
//       && articleForm.value.imageUrl !== ''
//       && articleForm.value.articleContent !== '' ) {
//     text.value = t
//     html.value = h
//   } else {
//     if (articleForm.value.articleTitle === '') {
//       ElMessage.error({
//         message: '请输入文章标题',
//         type: 'error'
//       });
//     } else if (articleForm.value.articleTag.length === 0) {
//       ElMessage.error({
//         message: '请至少选择一个标签',
//         type: 'error'
//       });
//     } else if (articleForm.value.categoryValue === '') {
//       ElMessage.error({
//         message: '请选择一个分类',
//         type: 'error'
//       });
//     } else if (articleForm.value.imageUrl === '') {
//       ElMessage.error({
//         message: '请上传一张背景图',
//         type: 'error'
//       });
//     } else if (articleForm.value.articleContent === '') {
//       ElMessage.error({
//         message: '请编写文章内容！',
//         type: 'error'
//       });
//     }
//
//   }
// }
//
// const handleSaveArticle = (text, html) => {
//   saveOption(text, html)
// }
//
// export {
//   saveArticle,
//   handleSaveArticle,
//   text,
//   html
// }