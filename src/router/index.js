import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Interview from '../views/Interview'
import Parcours from '../views/Parcours'

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
    components: Parcours
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
