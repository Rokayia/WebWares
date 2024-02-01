import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MentionsLegales from '../views/MentionsLegales.vue'
import PolitiqueDeConfidentialite from '../views/PolitiqueDeConfidentialité.vue'
import ConditionsUtilisation from '../views/ConditionsUtilisation.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { path: '/mentions-legales', component: MentionsLegales },
  { path: '/politique-de-confidentialite', component: PolitiqueDeConfidentialite },
  { path: '/conditions-utilisation', component: ConditionsUtilisation }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
