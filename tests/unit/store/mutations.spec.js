import mutations from '@/store/mutations'
import * as types from '@/store/mutation_types'

const { expect } = require('chai')

const j1Tata = { id: 1, nom: 'Tata', listeScore: [] }
const j1 = { id: 1, nom: 'Toto', listeScore: [] }
const j2 = { id: 2, nom: 'Titi', listeScore: [] }

describe('store', () => {
  describe('mutations', () => {
    describe(types.INIT_LISTE, () => {
      const state = { listeJoueurs: j1Tata, indexJoueurCourant: 0 }
      it('doit remplacer la liste par celle en parametre', () => {
        mutations[types.INIT_LISTE](state, [j1, j2])
        expect(state.listeJoueurs.length).to.equal(2)
        expect(state.listeJoueurs[0].nom).to.equal('Toto')
        expect(state.listeJoueurs[1].nom).to.equal('Titi')
      })
      it('doit configurer l\'index sur le 1er de la liste', () => {
        expect(state.indexJoueurCourant).to.equal(0)
      })
    })

    describe(types.UPDATE_SCORE, () => {
      const state = { listeJoueurs: [], indexJoueurCourant: null }

      beforeEach(() => {
        state.listeJoueurs = [j1, j2]
        j1.listeScore = [20]
        j2.listeScore = []
        state.indexJoueurCourant = 0
      })

      describe('Ajout d\'un score avec indexJoueurCourant est null', () => {
        it('ne doit rien changer', () => {
          state.indexJoueurCourant = null
          mutations[types.UPDATE_SCORE](state, 123)
          expect(state.listeJoueurs.length).to.equal(2)
          expect(state.listeJoueurs[0].listeScore.length).to.equal(1)
          expect(state.listeJoueurs[1].listeScore.length).to.equal(0)
          expect(state.indexJoueurCourant).to.be.a('null')
        })
      })

      describe('Ajout du premier score', () => {
        it('doit ajouter un premier score au joueur', () => {
          state.indexJoueurCourant = 1
          mutations[types.UPDATE_SCORE](state, 12)
          expect(state.listeJoueurs.length).to.equal(2)
          expect(state.listeJoueurs[1].listeScore.length).to.equal(1)
          expect(state.listeJoueurs[1].listeScore[0]).to.equal(12)
          expect(state.indexJoueurCourant).to.equal(0)
        })
      })
      describe('Ajout du second score', () => {
        it('doit incrementer le joueur du score indique', () => {
          state.indexJoueurCourant = 0
          mutations[types.UPDATE_SCORE](state, 12)
          expect(state.listeJoueurs.length).to.equal(2)
          expect(state.listeJoueurs[0].listeScore.length).to.equal(2)
          expect(state.listeJoueurs[0].listeScore[0]).to.equal(12)
          expect(state.indexJoueurCourant).to.equal(1)
        })
      })
    })

    describe(types.UNDO_SCORE, () => {
      j1.listeScore = [20, 10]
      j2.listeScore = [5]
      const state = { listeJoueurs: [], indexJoueurCourant: null }

      beforeEach(() => {
        state.listeJoueurs = [j1, j2]
        state.indexJoueurCourant = 0
      })

      it('doit decrementer le dernier score', () => {
        state.indexJoueurCourant = 1
        mutations[types.UNDO_SCORE](state)
        expect(state.listeJoueurs.length).to.equal(2)
        expect(state.listeJoueurs[0].listeScore.length).to.equal(1)
        expect(state.listeJoueurs[0].listeScore[0]).to.equal(20)
        expect(state.indexJoueurCourant).to.equal(0)
      })

      it('doit revenir au dernier si premier', () => {
        state.indexJoueurCourant = 0
        mutations[types.UNDO_SCORE](state)
        expect(state.listeJoueurs.length).to.equal(2)
        expect(state.listeJoueurs[1].listeScore.length).to.equal(0)
        expect(state.indexJoueurCourant).to.equal(1)
      })
    })
  })
})
