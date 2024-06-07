import 'element-plus/theme-chalk/index.css';
import './main-lib';
import './style.css';

import { createApp } from 'vue';

import ElementPlus from 'element-plus';

import App from './App.vue';

const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
