import { createRouter, createWebHistory } from "vue-router";

const Blog = () => import('views/blog/Blog.vue')
const Home = () => import('views/blog/home/Home.vue')
const Archive = () => import('views/blog/archive/Archive.vue')
const Category = () => import('views/blog/category/Category.vue')
const Tags = () => import('views/blog/tags/Tags.vue')
const Message = () => import('views/blog/message/Message.vue')
const About = () => import('views/blog/about/About.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Blog,
      redirect: '/home',
      children: [
        {
          path: '/home',
          component: Home
        },
        {
          path: '/archive',
          component: Archive
        },
        {
          path: '/category',
          component: Category
        },
        {
          path: '/tags',
          component: Tags
        },
        {
          path: '/message',
          component: Message
        },
        {
          path: '/about',
          component: About
        }
      ]
    },
  ]
});

export default router