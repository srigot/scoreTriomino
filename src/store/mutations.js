/* eslint no-param-reassign: ["error",
{ "props": true, "ignorePropertyModificationsFor": ["state"] }] */

import * as types from './mutation_types';

export default {
  [types.INIT_LISTE](state, liste) {
    state.listeJoueurs = liste;
    if (liste.length > 0) {
      [state.joueurCourant] = liste;
    } else {
      state.joueurCourant = null;
    }
  },
  [types.UPDATE_SCORE](state, score) {
    if (state.joueurCourant !== null) {
      state.joueurCourant.ajouterScore(score);
      const idSuivant = state.joueurCourant.id % state.listeJoueurs.length;
      state.joueurCourant = state.listeJoueurs[idSuivant];
    }
  },
};
