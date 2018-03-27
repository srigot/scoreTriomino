import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  state: {
    listeJoueurs: [],
    indexJoueurCourant: null,
  },
  mutations,
  actions,
  getters,
  plugins: [vuexLocal.plugin],
});
