import { createRouter, createWebHistory } from "vue-router";

const Main = () => import('views/Main.vue')
const Home = () => import('views/blog/home/Home.vue')
const ACNav = () => import('views/blog/acnav/acNav.vue')
const Archive = () => import('views/blog/acnav/archive/Archive.vue')
const Category = () => import('views/blog/acnav/category/Category.vue')
const ArticleList = () => import('views/blog/acnav/category/articles/ArticleList.vue')
const Tags = () => import('views/blog/tags/Tags.vue')
const Message = () => import('views/blog/message/Message.vue')
const NavLink = () => import('views/blog/navlink/NavLink.vue')
const About = () => import('views/blog/about/About.vue')
const Article = () => import('views/blog/article/Article.vue')

// 用户设置界面
const UserInfo = () => import('views/userInfo/UserInfo.vue')
const UserProfile = () => import('views/userInfo/profile/UserProfile.vue')
const UserComment = () => import('views/userInfo/comment/UserComment.vue')
const UserMessage = () => import('views/userInfo/message/UserMessage.vue')
const UserLog = () => import('views/userInfo/log/UserLog.vue')

const Login = () => import('views/login/Login.vue')
const AdminLogin = () => import('views/login/AdminLogin.vue')

// 管理员后台
const Admin = () => import('views/admin/Admin.vue')
const DashBoard = () => import('views/admin/dashboard/DashBoard.vue')
const Users = () => import('views/admin/users/Users.vue')

const PageError = () => import('components/error/PageError.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {
          path: '/home',
          name: 'Home',
          redirect: '/',
        },
        {
          path: '/acnav',
          component: ACNav,
          children: [
            {
              path: '/acnav',
              name: 'AcNav',
              redirect: '/acnav/archive'
            },
            {
              path: '/acnav/archive',
              name: 'Archive',
              component: Archive
            },
            {
              path: '/acnav/category',
              name: 'Category',
              component: Category
            },
            {
              path: '/acnav/category/articles',
              component: ArticleList,
            },
          ]
        },
        {
          path: '/tags',
          component: Tags
        },
        {
          path: '/message',
          name: 'Message',
          component: Message
        },
        {
          path: '/navlink',
          name: 'navlink',
          component: NavLink
        },
        {
          path: '/about',
          name: 'About',
          component: About
        },
        {
          path: '/article/:id',
          name: 'Article',
          component: Article
        },
      ]
    },
    //  用户后台
    {
      path: '/user',
      component: UserInfo,
      redirect: '/user/profile',
      meta: {
        title: '用户管理',
      },
      children: [
        {
          path: '/user/profile',
          component: UserProfile,
          meta: {
            title: '用户管理-日志',
          }
        },
        {
          path: '/user/comment',
          component: UserComment,
          meta: {
            title: '用户管理-评论',
          }
        },
        {
          path: '/user/message',
          component: UserMessage,
          meta: {
            title: '用户管理-消息',
          }
        },
        {
          path: '/user/log',
          component: UserLog,
          meta: {
            title: '用户管理-日志',
          }
        },
      ]
    },
    //  管理员后台
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      redirect: '/admin/dashboard',
      meta: {
        title: 'Admin',
      },
      children: [
        {
          path: '/admin/dashboard',
          component: DashBoard,
        },
        {
          path: '/admin/users',
          name: 'Users',
          component: Users
        },
      ]
    },
    {
      path: '/admin/login',
      component: AdminLogin,
      meta: {
        title: '管理员登录',
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        title: '登录',
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: "NotFound",
      component: PageError,
      meta: {
        title: 'Page Not Found',
      }
    }
  ]
});

export default router