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
    path: '/props',
    component: () => import('../views/props'),
    meta: {
      title: 'setup参数',
    },
  },
  {
    path: '/watch',
    component: () => import('../views/watch.vue'),
    meta: {
      title: 'watch watchEffect 监听',
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
  {
    path: '/route',
    component: () => import('../views/route'),
    meta: {
      title: 'route第一层',
    },
    children: [
      {
        path: 'first',
        component: () => import('../views/route/child'),
        meta: {
          title: 'route第二层',
        },
        children: [
          {
            path: 'second',
            component: () => import('../views/route/child1'),
            meta: {
              title: 'route第三层',
            },
          },
        ],
      },
    ],
  },
  {
    path: '/route-mut',
    components: {
      default: () => import('../views/route-mut/first.vue'),
      a: () => import('../views/route-mut/second.vue'),
      b: () => import('../views/route-mut/three.vue'),
    },
  },
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
