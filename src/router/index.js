import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/views/LayoutView.vue'),
    children: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: '首页',
        component: () => import('@/views/home/IndexView'),
        children: [
        ]
      }, {
        path: '/around',
        name: '附近',
        component: () => import('@/views/around/IndexView')
      }, {
        path: '/publish',
        name: '发布',
        component: () => import('@/views/publish/IndexView')
      }, {
        path: '/message',
        name: '消息',
        component: () => import('@/views/message/IndexView')
      }, {
        path: '/my',
        name: '我的',
        component: () => import('@/views/my/IndexView')
      }
    ]
  },
  {
    path: '/picker-region',
    name: 'picker',
    component: () => import('@/components/PickerRegion.vue')
  }

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
