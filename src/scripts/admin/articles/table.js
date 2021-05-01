import {ref} from "vue";
import {ElMessage} from "element-plus";

const tableData = ref( [{
    id: '12987122',
    title: '关于我的博客开发历程',
    author: 'apecode',
    createTime: '2021-01-01',
    lastTime: '2021-01-01',
    state: true,
    tags: ['Java', 'Python', 'Go'],
    category: 'Java',
    commentNum: 9999,
    readNum: 9999,
},{
    id: '12987122',
    title: '关于我的博客开发历程',
    author: 'apecode',
    createTime: '2021-01-01',
    lastTime: '2021-01-01',
    state: true,
    tags: ['Java', 'Python', 'Go'],
    category: 'Java',
    commentNum: 9999,
    readNum: 9999,
},{
    id: '12987122',
    title: '关于我的博客开发历程',
    author: 'apecode',
    createTime: '2021-01-01',
    lastTime: '2021-01-01',
    state: true,
    tags: ['Java', 'Python', 'Go'],
    category: 'Java',
    commentNum: 9999,
    readNum: 9999,
},{
    id: '12987122',
    title: '关于我的博客开发历程',
    author: 'apecode',
    createTime: '2021-01-01',
    lastTime: '2021-01-01',
    state: true,
    tags: ['Java', 'Python', 'Go'],
    category: 'Java',
    commentNum: 9999,
    readNum: 9999,
}])

const handleEdit = (index, row) => {
    // console.log(index, row);
}
const handleDelete = (index, row) => {
    // console.log(index, row);
}

// 修改文章状态
const changeArticleState = (index, item) => {
    if (item.id === tableData.value[index].id) {
        tableData.value[index].state = !tableData.value[index].state
        ElMessage.success({
            message: '修改成功',
            type: 'success'
        });
    }
}

export {
    tableData,
    handleEdit,
    handleDelete,
    changeArticleState
}