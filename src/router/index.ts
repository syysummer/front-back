import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

// Views
import Index from '@/views/Entry/index.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'StartUp',
    component: () =>
      import('../views/startUpPage/index.vue')
  },
  {
    path: '/Index',
    name: 'Index',
    component: Index,
    children: []
  },
  {
    path: '/BootGuide/:step', // 开机指引
    name: 'BootGuide',
    component: () =>
      import('../views/BootGuide/BootGuide.vue')
  },
  {
    path: '*',
    name: '404',
    component: NotFound
  }
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
