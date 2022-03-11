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
    meta: {
      title: '多个router-view',
    },
  },
  {
    path: '/alias',
    component: () => import('../views/alias.vue'),
    props: {
      a: true,
      b: false,
    },
    meta: {
      title: '多个path跳转相同组件',
    },
    alias: ['/alias1', '/alias2', '/alias3'],
  },
  {
    path: '/ref-reactive',
    component: () => import('../views/ref&reactive.vue'),
    meta: {
      title: 'ref与reactive区别',
    },
  },
  {
    path: '/ref',
    component: () => import('../views/ref.vue'),
    meta: {
      title: 'ref相关',
    },
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('../views/404.vue'),
    meta: {
      title: '404',
    },
  },
  {
    path: '/typing',
    component: () => import('../views/typing.vue'),
    meta: {
      title: '自动打字效果',
    },
  },
  {
    path: '/communication',
    component: () => import('../views/communication'),
    meta: {
      title: '组件通信',
    },
  },
  {
    path: '/h',
    component: () => import('../views/h'),
    meta: {
      title: '渲染函数',
    },
  },
  {
    path: '/component',
    component: () => import('../views/component'),
    meta: {
      title: '组件渲染',
    },
  },
  {
    path: '/watch-group',
    component: () => import('../views/watch-group'),
    meta: {
      title: '监听集合',
    },
  },
]
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
