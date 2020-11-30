import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Inscription from '../views/Inscription.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/inscription',
    name: 'Inscription',
    component: Inscription
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
