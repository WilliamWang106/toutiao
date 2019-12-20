import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import Home2 from '../views/Home/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Login'
  },
  {
    path: '/home',
    component: Home,
    children: [
      { path: '', component: Home2 }
    ]
  },
  {
    path: '/Login',
    component: Login
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
