// import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
//
// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]
//
// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })
//
// export default router
// import Vue from 'vue'
import VueRouter from 'vue-router'

// Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/task21',
    name: 'Task 2.1',
    component: () => import('../views/task21.vue')
  },
  {
    path: '/task21',
    name: 'Task 2.1',
    component: () => import('../views/task22.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router;
