// 上传图片
import {ref} from "vue";
import {ElMessage} from "element-plus";
import {articleForm} from './index.js'

// markdown 上传图片
const handleUploadImage = (event, insertImage, files) =>
{
  // 拿到 files 之后上传到文件服务器，然后向编辑框中插入对应的内容
  console.log(files);

  // 此处只做示例
  insertImage({
    url:
        'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1269952892,3525182336&fm=26&gp=0.jpg',
    desc: '七龙珠',
    width: 'auto',
    height: 'auto',
  });
}

// 上传文章背景图
const handleAvatarSuccess = (res, file) => {
  console.log(res,file)
  articleForm.value.imageUrl = URL.createObjectURL(file.raw);
}
const beforeAvatarUpload = (file) => {
  console.log(file)
  const isJPG = file.type === 'image/jpeg' || file.type === 'image/png';
  const isLt2M = file.size / 1024 / 1024 < 5;

  if (!isJPG) {
    ElMessage.error('图片只能是 JPG 或 PNG 格式!');
  }
  if (!isLt2M) {
    ElMessage.error('图片大小不能超过 5MB!');
  }
  return isJPG && isLt2M;
}

export {
  handleUploadImage,
  handleAvatarSuccess,
  beforeAvatarUpload
}