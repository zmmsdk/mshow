import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入home组件和login组件
import home from '../views/Home/index.vue'
import login from '../views/login/login.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login', component: login },
  // 注册home组件和login组件
  { path: '/home', component: home },
  { path: '/login', component: login }
  // {
  //   path: '/about',
  //   // name: 'about',
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
