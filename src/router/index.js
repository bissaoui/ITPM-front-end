import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Formation from '../views/Formation.vue'
import Actualite from '../views/Actualite.vue'
import MotDirecteur from '../views/Institut/MotDirecteur.vue'
import Presentation from '../views/Institut/Presentation.vue'
import NotFound from '../components/NotFound.vue'
import Navire from '../views/Institut/Navire.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Formation',
    name: 'Formation',
    component: Formation
  },
  {
    path: '/Actualite',
    name: 'Actualite',
    component: Actualite
  },
  {
    path: '/instutit/Mot_Du_Directeur',
    name: 'MotDirecteur',
    component: MotDirecteur
  },
  {
    path: '/instutit/Presentation',
    name: 'Presentation',
    component: Presentation
  },
  {
    path: '/instutit/Navire',
    name: 'Navire',
    component: Navire
  },
  {
    name: 'NotFound',
    component: NotFound,
    path: '/:pathMatch(.*)*',

  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
