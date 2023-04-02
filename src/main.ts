/*
 * @Author: yin
 * @Date: 2023-03-26 22:29:27
 * @LastEditTime: 2023-04-02 15:15:08
 * @LastEditors: yin
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import 'virtual:windi.css'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue';
// import { createPinia } from 'pinia'
import store from '@/store'

import './style/index.scss'
import './style.css'

// import router from './router/index'
import router from '@/router'
import '@/polyfill/polyfill'

// createApp(App).mount('#app')
const app = createApp(App)
app.use(Antd)
app.use(store)
app.use(router)
app.mount('#app')
