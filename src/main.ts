import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: App,
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
