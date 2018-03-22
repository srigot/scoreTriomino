import Joueur from '@/modele/Joueur';
import * as types from './mutation_types';

export default {
  creerNouvellePartie({ commit }, listeJoueurs) {
    const liste = [];
    listeJoueurs.forEach((element, index) => {
      liste.push(new Joueur(index + 1, element));
    });
    commit(types.INIT_LISTE, liste);
  },
  ajouterScore({ commit }, id, score) {
    commit(types.UPDATE_SCORE, { id, score });
  },
};
