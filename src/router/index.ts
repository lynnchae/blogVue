import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/Index.vue'
import blog from '../views/Blog.vue'
import about from '../views/About.vue'
import contact from '../views/Contact.vue'
import admin from '../views/Admin.vue'
import album from '../views/Album.vue'

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
  },{
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/admin',
    name: 'admin',
    component: admin
  },
  {
    path: '/album',
    name: 'album',
    component: album
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
  routes,
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition
    }else {
      return {x: 0,y: 0}
    }
  }
})

export default router
