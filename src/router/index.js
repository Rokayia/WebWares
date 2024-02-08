import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TestView from "../views/TestVue.vue";
import MentionsLegales from "../views/MentionsLegales.vue";
import PolitiqueDeConfidentialite from "../views/PolitiqueDeConfidentialité.vue";
import ConditionsUtilisation from "../views/ConditionsUtilisation.vue";

import ConnectUser from "../views/ConnexionUser.vue";
import InscriptionUser from "../views/InscriptionUser.vue";

import DetailsView from '../views/DetailsProduct.vue'

import compoRecapClient from '../views/RecapCommandePageTest.vue'

import RecapLivraison from '../views/LivraisonBackOffice.vue'


import PageModificationCategories from '@/views/PageModificationCategories.vue'




import MyOrder from '../views/OrderUser.vue'
import CategoriesAdminView from "../views/CategoriesProductsAdmin.vue";

import CategoriesView from '../views/CategoriesProducts.vue'
import ListProductsView from '../views/ListProducts.vue'


import BackOfficeGestionProduitsView from '../views/BackOfficeGestionProduits.vue'


import ListUsers from "../views/BackOfficeGestionUsers.vue";


// import pageModalUser from '@/components/ModalUser.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },

  {
    path: "/test",
    name: "test",
    component: TestView,
  },


  {
    path: '/RecapLivraison',
    name: 'RecapLivraison',
    component: RecapLivraison,
},

  //  {
  //   path: '/modalUser',
  //   name: 'test',
  //   component: pageModalUser,
  // },



  {
    path: '/page-modification-categories',
    name: 'PageModificationCategories',
    component: PageModificationCategories
  },



  {
    path: '/recapClient',
    name: 'nomRecapClient',
    component: compoRecapClient,
},


  { path: "/mentions-legales",    name: "mentionslegales",component: MentionsLegales },

  {
    path: "/politique-de-confidentialite",   name: "politiquedeconfidentialite",
    component: PolitiqueDeConfidentialite,
  },
  { path: "/conditions-utilisation",  name: "conditionsutilisation", component: ConditionsUtilisation },

  {
    path: "/connect",
    name: "connect",
    component: ConnectUser,
  },
 

  {
    path: "/inscription",
    name: "inscription",
    component: InscriptionUser,
  },
  {

    path: "/listProducts",
    name: "listproduits",
    component: ListProductsView,},

{   path: '/myOrder',
name: 'myorder',
component: MyOrder},
 
{
    path: '/categorieProduct/:id',
    name: 'categorieproduits',
  
    component:CategoriesView

  },
  {
    path: "/detailsProduct/:id",
    name: "detailsproduits",


    component: DetailsView,
  },
  {
  path: "/ListUsers",
  name: "ListUsers",
  component: ListUsers,
  },
  {
    path: "/categorieProductAdmin",
    name: "categorieproduitsadmin",

    component: CategoriesAdminView,
  },

  {
    path: "/backofficegestionproduits",
    name: "backofficegestionproduits",

    component: BackOfficeGestionProduitsView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
