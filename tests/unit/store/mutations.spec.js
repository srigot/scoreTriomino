import mutations from '@/store/mutations';
import * as types from '@/store/mutation_types';
import Joueur from '@/modele/Joueur';

const { expect } = require('chai');

describe('store', () => {
  describe('mutations', () => {
    describe(types.INIT_LISTE, () => {
      it('doit remplacer la liste par celle en parametre', () => {
        const state = { listeJoueurs: ['Tata'] };
        mutations[types.INIT_LISTE](state, ['Toto', 'Titi']);
        expect(state.listeJoueurs.length).to.equal(2);
        expect(state.listeJoueurs[0]).to.equal('Toto');
        expect(state.listeJoueurs[1]).to.equal('Titi');
      });
    });

    describe(types.UPDATE_SCORE, () => {
      const state = { listeJoueurs: [] };
      beforeEach(() => {
        state.listeJoueurs = [];
        const j1 = new Joueur(1, 'Toto');
        j1.ajouterScore(20);

        state.listeJoueurs.push(j1);
        state.listeJoueurs.push(new Joueur(2, 'Titi'));
      });

      describe('Ajout d\'un score sur un id inexistant', () => {
        it('ne doit rien changer', () => {
          mutations[types.UPDATE_SCORE](state, 3, 123);
          expect(state.listeJoueurs.length).to.equal(2);
          expect(state.listeJoueurs[0].getTotal()).to.equal(20);
          expect(state.listeJoueurs[1].getTotal()).to.equal(0);
        });
      });

      describe('Ajout du premier score', () => {
        it('doit ajouter un premier score au joueur', () => {
          mutations[types.UPDATE_SCORE](state, 2, 12);
          expect(state.listeJoueurs.length).to.equal(2);
          expect(state.listeJoueurs[0].getTotal()).to.equal(20);
          expect(state.listeJoueurs[1].getTotal()).to.equal(12);
        });
      });
      describe('Ajout du second score', () => {
        it('doit incrementer le joueur du score indique', () => {
          mutations[types.UPDATE_SCORE](state, 1, 12);
          expect(state.listeJoueurs.length).to.equal(2);
          expect(state.listeJoueurs[0].getTotal()).to.equal(32);
          expect(state.listeJoueurs[1].getTotal()).to.equal(0);
        });
      });
    });
  });
});
