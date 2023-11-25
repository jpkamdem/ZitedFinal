import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Interview from '../views/Interview'
import Parcours from '../views/Parcours'
import Musiques from '../views/Musiques'
import Univers from '../views/Univers'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/interview',
    name: 'Interview',
    component: Interview
  },
  {
    path: '/parcours',
    name: 'Parcours',
    component: Parcours
  },
  {
    path: '/musiques',
    name: 'Musiques',
    component: Musiques
  },
  {
    path: '/univers',
    name: 'Univers',
    component: Univers
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
