import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  strictMode: true
})

export default new Vuex.Store({
  state: {
    listeJoueurs: [],
    indexJoueurCourant: null
  },
  mutations: {
    ...mutations,
    RESTORE_MUTATION: vuexLocal.RESTORE_MUTATION
  },
  actions,
  getters,
  plugins: [vuexLocal.plugin]
//  strict: true,
})
