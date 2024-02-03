import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import MentionsLegales from '../views/MentionsLegales.vue'
import PolitiqueDeConfidentialite from '../views/PolitiqueDeConfidentialité.vue'
import ConditionsUtilisation from '../views/ConditionsUtilisation.vue'


import ConnectUser from '../views/ConnexionUser.vue'
import InscriptionUser from '../views/InscriptionUser.vue'

import DetailsView from '../views/DetailsProduct.vue'

import MyOrder from '../views/OrderUser.vue'


import CategoriesView from '../views/CategoriesProducts.vue'
import ListProductsView from '../views/ListProducts.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },


  { path: '/mentions-legales', component: MentionsLegales },
  { path: '/politique-de-confidentialite', component: PolitiqueDeConfidentialite },
  { path: '/conditions-utilisation', component: ConditionsUtilisation },


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
    component: ListProductsView
   
  },
  {
    path: '/detailsProduct/:id',
    name: 'detailsproduits',
  
    component:DetailsView
  },
  {

    path: '/myOrder',
  name: 'myorder',
  component: MyOrder

    path: '/categorieProduct/:id',
    name: 'categorieproduits',
  
    component:CategoriesView
  },


 



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
