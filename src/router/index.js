import { createRouter, createWebHistory } from "vue-router";

const Home = () => import('views/blog/home/Home.vue')
const ACNav = () => import('views/blog/acnav/acNav.vue')
const Archive = () => import('views/blog/acnav/archive/Archive.vue')
const Category = () => import('views/blog/acnav/category/Category.vue')
const Tags = () => import('views/blog/tags/Tags.vue')
const Message = () => import('views/blog/message/Message.vue')
const Project = () => import('views/blog/project/Project.vue')
const About = () => import('views/blog/about/About.vue')

const PageError = () => import('components/error/PageError.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      redirect: '/'
    },
    {
      path: '/acnav',
      component: ACNav,
      children: [
        {
          path: '/acnav',
          redirect: '/acnav/archive'
        },
        {
          path: '/acnav/archive',
          component: Archive
        },
        {
          path: '/acnav/category',
          component: Category
        }
      ]
    },
    {
      path: '/tags',
      component: Tags,
      children: [
        {
          path: '/tags/:tag',
          component: Tags,
        }
      ]
    },
    {
      path: '/message',
      component: Message
    },
    {
      path: '/project',
      component: Project
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/404',
      name: "NotFound",
      component: PageError
    }, {
      path: "/:catchAll(.*)", // 此处需特别注意置于最底部
      redirect: "/404"
    }
  ]
});

export default router