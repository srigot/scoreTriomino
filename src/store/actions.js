import Joueur from '@/modele/Joueur';
import * as types from './mutation_types';

export default {
  creerNouvellePartie({ commit }, listeJoueurs) {
    return new Promise((resolve) => {
      const liste = [];
      listeJoueurs.forEach((element, index) => {
        liste.push(new Joueur(index + 1, element));
      });
      commit(types.INIT_LISTE, liste);
      resolve();
    });
  },
  ajouterScore({ commit }, score) {
    commit(types.UPDATE_SCORE, score);
  },
  retirerScore({ commit }) {
    commit(types.UNDO_SCORE);
  },
};
