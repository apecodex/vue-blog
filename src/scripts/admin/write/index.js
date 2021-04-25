import {ref} from "vue";
// import {saveArticle, text, html} from './article.js'
import {ElMessage, ElNotification} from "element-plus";


const ruleForm = ref(null)

// 表单
const articleForm = ref({
  articleTitle: '',
  articleTag: [],
  categoryValue: '',
  imageUrl: 'https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg',
  articleContent: ''
})

// markdown
const text = ref('')
const html = ref('')

const clearArticleForm = () => {
  articleForm.value.articleTitle = ''
  articleForm.value.articleTag = []
  articleForm.value.categoryValue = ''
  // articleForm.value.imageUrl = ''
  articleForm.value.articleContent = ''
}

const checkArticleForm = () => {
  return articleForm.value.articleTitle !== '' &&
      articleForm.value.articleTag.length !== 0 &&
      articleForm.value.categoryValue !== ''  &&
      articleForm.value.imageUrl !== '' &&
      articleForm.value.articleContent !== ''
}

const validateTitle = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入标题'));
  } else if (value.length > 20) {
    callback(new Error('不能超过20过字'));
  } else {
    callback();
  }
}

const validateTag = (rule, value, callback) => {
  if (value.length === 0) {
    callback(new Error('至少要选择一个标签'));
  } else if (value.length > 10) {
    callback(new Error('不能超过10个标签'));
  } else {
    callback();
  }
}

const validateCategory = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入标题'));
  } else if (value.length > 20) {
    callback(new Error('不能超过20过字'));
  } else {
    callback();
  }
}

const validateImageUrl = (rule, value, callback) => {
  if (articleForm.value.imageUrl === '') {
    callback(new Error('请上传图片'));
  } else {
    callback();
  }
}

const rules = ref({
  articleTitle: [
    { required: true, validator: validateTitle, trigger: 'blur' }
  ],
  articleTag: [
    { required: true, validator: validateTag, trigger: 'blur' }
  ],
  categoryValue: [
    { required: true, validator: validateCategory, trigger: 'blur' }
  ],
  // imageUrl: [
  //   { required: true, validator: validateImageUrl, trigger: 'blur' }
  // ],
})

// 提交
const submitForm = (t, h) => {
  ruleForm.value.validate((valid) => {
    if (valid) {
      saveArticle()
      console.log(t, h)
      if (t.value === '') {
        ElMessage.error({
          message: '文章内容？',
          type: 'error'
        });
        return false
      }
      if (checkArticleForm() && text.value !== '') {
        clearArticleForm()
        ElNotification({
          title: '成功',
          message: '保存成功',
          type: 'success'
        })
      }

    } else {
      console.log('error submit!!');
      return false;
    }
  });
}

const handleSaveArticle = (t, h) => {
  text.value = t
  html.value = h
}

const saveArticle = () => {
  let save = document.getElementsByClassName('v-md-icon-save')
  save[0].click()
}

export {
  articleForm,
  rules,
  ruleForm,
  text,
  html,
  saveArticle,
  submitForm,
  handleSaveArticle
}