import actions from '@/store/actions';

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
      it('doit appeler la mutation INIT_LISTE', () => {
        actions.creerNouvellePartie({ commit: mockCommit }, []);
      });
    });

    describe('ajouterScore', () => {
      it('doit appeller la mutation UPDATE_SCORE', () => {
        actions.ajouterScore({ commit: mockCommit }, 123, 456);
        expect(mockCommit).to.have.been.calledWith('UPDATE_SCORE', { id: 123, score: 456 });
      });
    });
  });

  describe('mutations', () => {

  });
});
