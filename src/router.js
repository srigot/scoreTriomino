import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import NouvellePartie from './views/NouvellePartie.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/new',
      name: 'new',
      component: NouvellePartie
    }
  ]
})
