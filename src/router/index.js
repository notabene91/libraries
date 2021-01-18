import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'list',
    component: () => import('../views/List.vue')
  },
  {
    path: '/library/:id',
    name: 'library',
    component: () => import('../views/Library.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
