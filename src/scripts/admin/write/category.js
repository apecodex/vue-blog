//category.js
import { ref } from "vue";
import {ElMessage, ElNotification} from "element-plus";

const categoryRef = ref(null)

// 选择的值
const categoryValue = ref('')

// 标题及按钮居中
const centerDialogVisible = ref(false)
// 分类标题
const categoryText = ref('')
// 分类介绍
const categoryDescription = ref('')
// 分类图片
const categoryImage = ref('')

const categorys = ref([{
  value: 'Java',
  label: 'Java'
}, {
  value: 'Python',
  label: 'Python'
}, {
  value: 'Go',
  label: 'Go'
}, {
  value: 'JS',
  label: 'JS'
}, {
  value: 'Vue',
  label: 'Vue'
}])

// 返回已经选中的分类名称
const getSelectCategory = () => {
  return categoryValue.value
}

const categoryForm = ref({
  categoryText: '',
  categoryDescription: '',
  categoryImage
})

// 验证分类名称
const validateValue = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入分类名称'));
  } else if (value.length > 10) {
    callback(new Error('不能超过10过字'));
  } else {
    callback();
  }
}

// 验证分类说明
const validateDescription = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入该分类的说明'));
  } else if (value.length > 80) {
    callback(new Error('不能超过80过字'));
  } else {
    callback();
  }
}
// 验证分类背景图
const validateImageLink = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('分类需要一个背景图'));
  } else if (!value.startsWith('https') || !value.substring(0,5) == 'https') {
    callback(new Error('只允许https的图片'));
  } else {
    callback();
  }
}

const categoryRules = ref({
  categoryText: [
    { required: true, validator: validateValue,  trigger: 'blur' }
  ],
  categoryDescription: [
    { required: true, validator: validateDescription,  trigger: 'blur' }
  ],
  categoryImage: [
    { required: true, validator: validateImageLink,  trigger: 'blur' }
  ],
})

// 取消 新增分类
const closeNewCategory = () => {
  categoryForm.value.categoryText = ''
  categoryForm.value.categoryDescription = ''
  categoryForm.value.categoryImage = ''
  centerDialogVisible.value = !centerDialogVisible.value
  ElMessage('已取消');
}

// 保存 新增分类
const saveNewCategory = () => {
  categoryRef.value.validate((valid) => {
    if (valid) {
      if (categoryForm.value.categoryText !== '' && categoryForm.value.categoryDescription !== '' && categoryForm.value.categoryImage !== '') {
        ElNotification({
          title: '成功',
          message: '保存成功',
          type: 'success'
        })
        categoryForm.value.categoryText = ''
        categoryForm.value.categoryDescription = ''
        categoryForm.value.categoryImage = ''
        centerDialogVisible.value = !centerDialogVisible.value
      } else {
        ElNotification({
          title: '保存失败',
          message: '请重新保存',
          type: 'error'
        })
      }
    } else {
      ElMessage.warning({
        message: '请确认无误！',
        type: 'warning'
      });
      return false;
    }
  });
}


export {
  categorys,
  categoryValue,
  getSelectCategory,
  centerDialogVisible,
  categoryText,
  categoryDescription,
  categoryImage,
  categoryRef,
  categoryForm,
  categoryRules,
  closeNewCategory,
  saveNewCategory
}