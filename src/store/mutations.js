/* eslint no-param-reassign: ["error",
{ "props": true, "ignorePropertyModificationsFor": ["state"] }] */

import * as types from './mutation_types';

export default {
  [types.INIT_LISTE](state, liste) {
    state.listeJoueurs = liste;
  },
  [types.UPDATE_SCORE](state, id, score) {
    state.listeJoueurs.forEach((item) => {
      if (item.id === id) {
        item.ajouterScore(score);
      }
    });
  },
};
