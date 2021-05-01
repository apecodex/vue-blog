import {ref} from "vue";
import {ElLoading, ElMessage, ElNotification} from "element-plus";

const ruleForm = ref(null)

// 表单
const articleForm = ref({
  articleTitle: '',
  articleTag: [],
  categoryValue: '',
  imageUrl: 'https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg',
  articleContent: ''
})

const clearArticleForm = () => {
  articleForm.value.articleTitle = ''
  articleForm.value.articleTag = []
  articleForm.value.categoryValue = ''
  // articleForm.value.imageUrl = ''
  articleForm.value.articleContent = ''
}

const checkArticleForm = () => {
  if (articleForm.value.articleTitle === '') {
    ElMessage.error('请输入文章标题');
    return false
  } else if ( articleForm.value.articleTag.length === 0 ) {
    ElMessage.error('至少要选一个标签');
    return false
  } else if ( articleForm.value.categoryValue === '') {
    ElMessage.error('请选择分类');
    return false
  } else if (articleForm.value.imageUrl === '') {
    ElMessage.error('请上传一张背景图');
    return false
  } else if (articleForm.value.articleContent === '') {
    ElMessage.error('未编写文章主体内容');
    return false
  } else {
    return true
  }
}

// 验证标题
const validateTitle = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入标题'));
  } else if (value.length > 20) {
    callback(new Error('不能超过20过字'));
  } else {
    callback();
  }
}

// 验证标签
const validateTag = (rule, value, callback) => {
  if (value.length === 0) {
    callback(new Error('至少要选择一个标签'));
  } else if (value.length > 10) {
    callback(new Error('不能超过10个标签'));
  } else {
    callback();
  }
}

// 验证分类
const validateCategory = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入标题'));
  } else if (value.length > 20) {
    callback(new Error('不能超过20过字'));
  } else {
    callback();
  }
}

// 验证背景图
const validateImageUrl = (rule, value, callback) => {
  if (articleForm.value.imageUrl === '') {
    callback(new Error('请上传图片'));
  } else {
    callback();
  }
}

// 表单规则
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

    const checkResult = checkArticleForm()
    if (valid) {
      if (checkResult && t !== '' && h !== '') {
        let loadingInstance = ElLoading.service({
          target: '.article-write-container'
        });
        clearArticleForm()
        ElNotification({
          title: '成功',
          message: '保存成功',
          type: 'success'
        })
        loadingInstance.close()
      }
    } else {
      return false;
    }
  });
}

const handleSaveArticle = (t, h) => {
  if (t === true) {
    saveArticle()
  } else {
    submitForm(t,h)
  }
}

const saveArticle = () => {
  let save = document.getElementsByClassName('v-md-icon-save')
  save[0].click()
}

// 清除
const clearAll = () => {
  articleForm.value.articleTitle = ''
  articleForm.value.articleTag = []
  articleForm.value.categoryValue = ''
  articleForm.value.imageUrl = 'https://i.loli.net/2021/04/05/ioqHfzTkVlByubS.jpg'
  articleForm.value.articleContent = ''
}

export {
  articleForm,
  rules,
  ruleForm,
  handleSaveArticle,
  clearAll
}