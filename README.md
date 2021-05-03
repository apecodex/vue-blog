# vue3 + vite2 打造前后端分离的个人博客系统（前端部分）

### 简介
刚学完vue，练手的一个项目，因为有课，断断续续写了大概2个月不到吧。

之前就有一个博客，是用github+hexo搭建的[点我访问](https://liuyangxiong.cn)，对于这种快速生成的博客，刚接触时，因为不会写，是现成的，所以还是比较喜欢的。

但是现在不一样了，学了点皮毛，想自己写一个前后端分离的个人博客系统，现在这个是前端部分的内容，
因为我是学后端的，所以，后端也正在开发中，等写完了，就接在一起。单看前端部分，我个人还是比较喜欢的

### 项目计划
> - 全局页面功能
>    - [x] 导航 
>    - [x] 页脚
>    - [x] 回到顶部
>    - [x] 看板娘
    

> - 首页 
>   - [x] 公告
>   - [x] 文章展示
>   - [x] 分页
>   - [ ] 搜索框
>   - [x] 用户
>     - [x] 已登录展示(可跳转至用户管理页面)
>     - [x] 登录按钮(可跳转至用户登录页面)
>   - [x] 个人信息展示
>     - [x] 昵称
>     - [x] 头像
>     - [x] 个性签名
>     - [x] 个人链接
>     - [x] 打赏
>   - [x] 最新评论
>   - [x] 最热文章
>   - [x] 热门标签
>   - [x] 友情链接
    
> - 归档&分类
>    - [x] 导航
>        - [x] 归档页面
>        - [x] 分类页面
    
> - 标签
>    - [x] 导航
>        - [x] 点击标签列出所有相关文章
    
> - 留言
>    - [x] 当前已经登录的用户
>    - [x] 留言框
>    - [x] 已留言展示
    
> - [ ] 导航

> - [x] 关于我

> - 用户管理
>    - [x] 头像
>    - [x] 个人资料
>    - [ ] 我的评论
>    - [ ] 我的消息
>    - [ ] 登录日志
>    - [ ] 退出
>    - [ ] 回到博客

> - 用户登录
>   - [x] 登录
>   - [x] 注册

> - 后台
>    - [x] 仪表盘
>    - [x] 用户列表
>    - [x] 消息
>    - [ ] 留言
>    - [x] 博文列表
>    - [x] 新增博文
>    - [x] 设置
>        - [x] 网站设置
>        - [ ] 分类
>        - [x] 公告
>        - [x] 关于我
>        - [x] 修改密码
>    - [x] 退出

> - 管理员登录
>   - [x] 登录

### 项目结构

```text
│  .gitignore
│  README.md     
|  mock                生成假数据
│  public              静态文件
|  src                 
└───────
|      |  assets       静态文件(css、img、svg...)
|      |  common       公共组件
|      |  components   页面拆分后的小组件
|      |  lib          插件
|      |  router       vue-router路由
|      |  scripts      js
|      |  store        vuex
|      |  utils        工具
|      |  views        视图
|  App.vue             vue主入口
│  main.js             入口
|  index.html          模板
|  LICENSE             
│  package.json        
│  vite.config.js      vite配置文件
└
```

### 开发环境

`vite@2.2.1`
`vue@3.0.7`
`vue-router@4.0.4`
`vuex@4.0.0`
`@kangc/v-md-editor@2.2.2`
`axios@0.21.1`
`element-plus@1.0.2-beta.33`
`mockjs@1.1.0`

### 运行

``` shell
>>> git clone https://github.com/rookiesmile/vue-blog
>>> cd vue-blog
>>> npm i vite
>>> npm i serve -g
>>> npx vite build
>>> serve -s dist
```

浏览器访问：[http://localhost:5000](http://localhost:5000)

### 效果

#### 首页
![首页1.PNG](https://i.loli.net/2021/05/03/GHSoYLivaxmsT4Q.png)
![首页2.PNG](https://i.loli.net/2021/05/03/OZB7FTgo2ynK9Ja.png)

#### 归档&分类
![归档_分类.PNG](https://i.loli.net/2021/05/03/HQxXoKrdGPk5DhZ.png)
![归档_分类2.PNG](https://i.loli.net/2021/05/03/JskzXHMYZNIc5eo.png)

#### 标签
![标签.PNG](https://i.loli.net/2021/05/03/SrzUcwaCoYdk4y5.png)

#### 留言
![留言.PNG](https://i.loli.net/2021/05/03/wXF93eA4tC7G6hL.png)

#### 关于我
![关于我.PNG](https://i.loli.net/2021/05/03/yY2bvxc8NXeznqE.png)

#### 用户管理
![用户管理.png](https://i.loli.net/2021/05/03/sfZozaKJ1qTUmGx.png)

#### 用户登录与注册
![用户登录.png](https://i.loli.net/2021/05/03/CJp1mEdnrDSvtj5.png)
![用户注册.png](https://i.loli.net/2021/05/03/bw563AUE9xLvRu8.png)

#### 后台
![后台-仪表盘.png](https://i.loli.net/2021/05/03/bczpYMLhdnoCr5K.png)
![后台-用户.png](https://i.loli.net/2021/05/03/fxLdGKmVAQtnCbX.png)
![后台-消息.png](https://i.loli.net/2021/05/03/4uoAhSbl8XsIECH.png)
这里为什么是黑色的主题？答：因为我觉得好看
![后台-博文列表.png](https://i.loli.net/2021/05/03/bRMxqWZQC7kF6dj.png)
![后台-新文章.png](https://i.loli.net/2021/05/03/9MbEAiXZpmHGKe7.png)
![后台-设置.png](https://i.loli.net/2021/05/03/HXdBloaIWcQ9mP2.png)

#### 后台登录
![后台-登录.png](https://i.loli.net/2021/05/03/gaTKtO9h4Dyfx1G.png)

还有好多坑没填，慢慢搞了~