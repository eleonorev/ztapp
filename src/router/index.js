import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/Index'
import Profil from '@/Profil'
import Home from '@/Home'
import Arrondissements from '@/Arrondissements'


// Styleguide
import Styleguide from '@/_styleguide/Styleguide'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Profil',
      name: 'Profil',
      component: Profil
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Arrondissements',
      name: 'Arrondissements',
      component: Arrondissements
    },
    {
      path: '/Styleguide',
      name: 'Styleguide',
      component: Styleguide
    }
  ]
})
