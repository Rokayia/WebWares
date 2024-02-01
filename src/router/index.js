import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConnectUser from '../views/ConnexionUser.vue'
import InscriptionUser from '../views/InscriptionUser.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/connect',
    name: 'connect',
    component: ConnectUser
  },

  {
    path: '/inscription',
    name: 'inscription',
    component: InscriptionUser
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
