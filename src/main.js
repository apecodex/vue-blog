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
// 主题
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
// Tip 提示
import '@kangc/v-md-editor/lib/plugins/tip/tip.css';
// 表情包
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css';
// 公式
import createKatexPlugin from '@kangc/v-md-editor/lib/plugins/katex/cdn';
// 流程图
import createMermaidPlugin from '@kangc/v-md-editor/lib/plugins/mermaid/cdn';
import '@kangc/v-md-editor/lib/plugins/mermaid/mermaid.css';
// 任务列表
import createTodoListPlugin from '@kangc/v-md-editor/lib/plugins/todo-list/index';
import '@kangc/v-md-editor/lib/plugins/todo-list/todo-list.css';
// 代码行号
import createLineNumbertPlugin from '@kangc/v-md-editor/lib/plugins/line-number/index';
// 高亮代码行
import createHighlightLinesPlugin from '@kangc/v-md-editor/lib/plugins/highlight-lines/index';
import '@kangc/v-md-editor/lib/plugins/highlight-lines/highlight-lines.css';
// 快捷复制代码
import createCopyCodePlugin from '@kangc/v-md-editor/lib/plugins/copy-code/index';
import '@kangc/v-md-editor/lib/plugins/copy-code/copy-code.css';

VueMarkdownEditor
  .use(vuepressTheme,{
    codeHighlightExtensionMap: {
      vue: 'html',
    }
  })
  .use(createEmojiPlugin())
  .use(createKatexPlugin())
  .use(createMermaidPlugin())
  .use(createTodoListPlugin())
  .use(createLineNumbertPlugin())
  .use(createHighlightLinesPlugin())
  .use(createCopyCodePlugin());

const app = createApp(App)
app.use(router).use(store).use(ElementPlus).use(VueMarkdownEditor);

// 修改浏览器 title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

app.mount('#app')
