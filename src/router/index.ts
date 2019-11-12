import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../pages/index/index.vue'
import blog from '../pages/blog/blog.vue'
import about from '../pages/about/about.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'index',
    component: index
  },{
    path: '/b/:title',
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
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
