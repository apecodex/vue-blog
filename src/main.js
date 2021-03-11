import { createApp } from 'vue'

import router from './router'
import store from './store'

import App from './App.vue'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import 'font-awesome/css/font-awesome.min.css'

const app = createApp(App)
app.use(router).use(store).use(ElementPlus)
app.mount('#app')
