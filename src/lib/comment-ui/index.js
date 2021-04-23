import Comment from './Comment/Comment.vue'
import CommentShow from './CommentShow/CommentShow.vue'

let CommentUi = {}

CommentUi.install = function (Vue) {
  Vue.component(Comment.name, Comment)
  Vue.component(CommentShow.name, CommentShow)
}

export default CommentUi