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
  [types.UNDO_SCORE](state) {
    if (state.joueurCourant !== null) {
      let idSuivant = state.joueurCourant.id - 2;
      if (idSuivant < 0) {
        idSuivant = state.listeJoueurs.length - 1;
      }
      state.joueurCourant = state.listeJoueurs[idSuivant];
      state.joueurCourant.retirerScore();
    }
  },
};
