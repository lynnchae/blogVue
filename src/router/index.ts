import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/Index.vue'
import blog from '../views/Blog.vue'
import about from '../views/About.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },{
    path: '/b/:id',
    name: 'blog',
    component: blog
  },{
    path: '/about',
    name: 'about',
    component: about
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
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
