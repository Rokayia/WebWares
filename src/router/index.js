import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import MentionsLegales from '../views/MentionsLegales.vue'
import PolitiqueDeConfidentialite from '../views/PolitiqueDeConfidentialité.vue'
import ConditionsUtilisation from '../views/ConditionsUtilisation.vue'


import ConnectUser from '../views/ConnexionUser.vue'
import InscriptionUser from '../views/InscriptionUser.vue'

import DetailsView from '../views/DetailsProduct.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/listProducts',
    name: 'listproduits',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ListProducts.vue')
  },
  {
    path: '/detailsProduct/:id',
    name: 'detailsproduits',
  
    component:DetailsView
  },

  { path: '/mentions-legales', component: MentionsLegales },
  { path: '/politique-de-confidentialite', component: PolitiqueDeConfidentialite },
  { path: '/conditions-utilisation', component: ConditionsUtilisation },

  {

    path: '/listProducts',
    name: 'listproduits',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TestVue.vue')

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
    
  },
  {

    path: '/listProducts',
    name: 'listproduits',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ListProducts.vue')
  },
  {
    path: '/detailsProduct/:id',
    name: 'detailsproduits',
  
    component:DetailsView
  },

  { path: '/mentions-legales', component: MentionsLegales },
  { path: '/politique-de-confidentialite', component: PolitiqueDeConfidentialite },
  { path: '/conditions-utilisation', component: ConditionsUtilisation },

  {

    path: '/listProducts',
    name: 'listproduits',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/TestVue.vue')

  },
  {
      path: '/connect',
    name: 'connect',
    component: ConnectUser}


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
