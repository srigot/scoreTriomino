import actions from '@/store/actions';
import * as types from '@/store/mutation_types';
import Joueur from '@/modele/Joueur';

const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;

chai.use(sinonChai);
describe('store', () => {
  describe('actions', () => {
    let mockCommit;

    beforeEach(() => {
      mockCommit = sinon.stub();
    });

    describe('creerNouvellePartie', () => {
      describe('Cas d\'une liste vide', () => {
        it('doit appeler la mutation INIT_LISTE avec la liste vide', () => {
          actions.creerNouvellePartie({ commit: mockCommit }, []);
          expect(mockCommit).to.have.been.calledWith(types.INIT_LISTE, []);
        });
      });

      describe('Cas d\'une liste a un seul element', () => {
        it('doit appeler la mutation INIT_LISTE avec un joueur', () => {
          actions.creerNouvellePartie({ commit: mockCommit }, ['Toto']);
          expect(mockCommit).to.have.been.calledWith(types.INIT_LISTE, [new Joueur(1, 'Toto')]);
        });
      });

      describe('Cas d\'une liste a plusieurs elements', () => {
        it('doit appeler la mutation INIT_LISTE avec la liste ', () => {
          actions.creerNouvellePartie({ commit: mockCommit }, ['Toto', 'Titi', 'Tata']);
          expect(mockCommit).to.have.been.calledWith(
            types.INIT_LISTE,
            [new Joueur(1, 'Toto'), new Joueur(2, 'Titi'), new Joueur(3, 'Tata')],
          );
        });
      });
    });

    describe('ajouterScore', () => {
      it('doit appeller la mutation UPDATE_SCORE', () => {
        actions.ajouterScore({ commit: mockCommit }, 123, 456);
        expect(mockCommit).to.have.been.calledWith(types.UPDATE_SCORE, { id: 123, score: 456 });
      });
    });
  });
});
