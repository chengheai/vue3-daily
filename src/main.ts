import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
// @ts-ignore
import { router } from './router'
import Antd from 'ant-design-vue'
import * as antIcons from '@ant-design/icons-vue'
import 'ant-design-vue/dist/antd.css'
import './styles/common.scss'

const app = createApp(App)
app.use(router)
app.use(Antd)
app.use(createPinia())
app.mount('#app')
Object.keys(antIcons).forEach((key) => {
  // @ts-ignore
  app.component(key, antIcons[key])
})
app.config.globalProperties.$antIcons = antIcons
