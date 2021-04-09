import { createApp } from 'vue'

import router from './router'
import store from './store'

import App from './App.vue'
// ElementPlus
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

// 编写markdown
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import '@kangc/v-md-editor/lib/plugins/tip/tip.css';
// 展示markdown
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';

VueMarkdownEditor.use(vuepressTheme);
VMdPreview.use(vuepressTheme);

const app = createApp(App)
app.use(router).use(store).use(ElementPlus).use(VueMarkdownEditor).use(VMdPreview);

// 修改浏览器 title
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

app.mount('#app')
