import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('../views/dashboard.vue'),
    meta: {
      title: '首页',
    },
  },
  {
    path: '/watch',
    component: () => import('../views/watch.vue'),
    meta: {
      title: 'watch监听',
    },
  },
  {
    path: '/base',
    component: () => import('../views/base.vue'),
    meta: {
      title: 'base基础',
    },
  },
  {
    path: '/test',
    component: () => import('../views/test.vue'),
    meta: {
      title: 'test测试',
    },
  },
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
