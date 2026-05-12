import { createRouter, createWebHistory } from '@ionic/vue-router'

import WelcomePage from '../views/WelcomePage.vue'
import FilmesPage from '../views/FilmesPage.vue'
import DetalhesFilmePage from '../views/DetalhesFilmePage.vue'

const routes = [
  {
    path: '/',
    redirect: '/welcome'
  },
  {
    path: '/welcome',
    component: WelcomePage
  },
  {
    path: '/filmes',
    component: FilmesPage
  },
  {
    path: '/detalhes/:id',
    component: DetalhesFilmePage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
