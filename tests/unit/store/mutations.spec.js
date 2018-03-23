import mutations from '@/store/mutations';
import * as types from '@/store/mutation_types';
import Joueur from '@/modele/Joueur';

const { expect } = require('chai');

describe('store', () => {
  describe('mutations', () => {
    describe(types.INIT_LISTE, () => {
      const j1 = new Joueur(1, 'Tata');
      const state = { listeJoueurs: j1, joueurCourant: j1 };
      it('doit remplacer la liste par celle en parametre', () => {
        mutations[types.INIT_LISTE](state, [new Joueur(1, 'Toto'), new Joueur(2, 'Titi')]);
        expect(state.listeJoueurs.length).to.equal(2);
        expect(state.listeJoueurs[0].nom).to.equal('Toto');
        expect(state.listeJoueurs[1].nom).to.equal('Titi');
      });
      it('doit configurer le joueurCourant sur le 1er de la liste', () => {
        expect(state.joueurCourant).to.be.an('Object');
        expect(state.joueurCourant.id).to.equal(1);
      });
    });

    describe(types.UPDATE_SCORE, () => {
      const j1 = new Joueur(1, 'Toto');
      j1.ajouterScore(20);
      const j2 = new Joueur(2, 'Titi');
      const state = { listeJoueurs: [], joueurCourant: null };

      beforeEach(() => {
        state.listeJoueurs = [];
        state.joueurCourant = j1;

        state.listeJoueurs.push(j1);
        state.listeJoueurs.push(j2);
      });

      describe('Ajout d\'un score avec joueurCourant est null', () => {
        it('ne doit rien changer', () => {
          state.joueurCourant = null;
          mutations[types.UPDATE_SCORE](state, 123);
          expect(state.listeJoueurs.length).to.equal(2);
          expect(state.listeJoueurs[0].getTotal()).to.equal(20);
          expect(state.listeJoueurs[1].getTotal()).to.equal(0);
          expect(state.joueurCourant).to.be.a('null');
        });
      });

      describe('Ajout du premier score', () => {
        it('doit ajouter un premier score au joueur', () => {
          state.joueurCourant = j2;
          mutations[types.UPDATE_SCORE](state, 12);
          expect(state.listeJoueurs.length).to.equal(2);
          expect(state.listeJoueurs[1].getTotal()).to.equal(12);
          expect(state.joueurCourant).to.be.an('Object');
          expect(state.joueurCourant.id).to.equal(1);
        });
      });
      describe('Ajout du second score', () => {
        it('doit incrementer le joueur du score indique', () => {
          state.joueurCourant = j1;
          mutations[types.UPDATE_SCORE](state, 12);
          expect(state.listeJoueurs.length).to.equal(2);
          expect(state.listeJoueurs[0].getTotal()).to.equal(32);
          expect(state.joueurCourant).to.be.an('Object');
          expect(state.joueurCourant.id).to.equal(2);
        });
      });
    });

    describe(types.UNDO_SCORE, () => {
      const j1 = new Joueur(1, 'Toto');
      j1.ajouterScore(20);
      j1.ajouterScore(10);
      const j2 = new Joueur(2, 'Titi');
      j2.ajouterScore(5);
      const state = { listeJoueurs: [], joueurCourant: null };

      beforeEach(() => {
        state.listeJoueurs = [];
        state.joueurCourant = j1;

        state.listeJoueurs.push(j1);
        state.listeJoueurs.push(j2);
      });

      it('doit decrementer le dernier score', () => {
        state.joueurCourant = j2;
        mutations[types.UNDO_SCORE](state);
        expect(state.listeJoueurs.length).to.equal(2);
        expect(state.listeJoueurs[0].getTotal()).to.equal(20);
        expect(state.joueurCourant).to.be.an('Object');
        expect(state.joueurCourant.id).to.equal(1);
      });

      it('doit revenir au dernier si premier', () => {
        state.joueurCourant = j1;
        mutations[types.UNDO_SCORE](state);
        expect(state.listeJoueurs.length).to.equal(2);
        expect(state.listeJoueurs[1].getTotal()).to.equal(0);
        expect(state.joueurCourant).to.be.an('Object');
        expect(state.joueurCourant.id).to.equal(2);
      });
    });
  });
});
