import Pagination from './MyPagination.vue'

let MyPagination = {}

MyPagination.install = function (Vue) {
    Vue.component(Pagination.name, Pagination)
}

export default MyPagination