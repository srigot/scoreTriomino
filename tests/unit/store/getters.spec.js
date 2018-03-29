import getters from '@/store/getters'

const { expect } = require('chai')

const j1 = { id: 1, nom: 'Toto', listeScore: [] }

describe('store', () => {
  describe('getters', () => {
    const state = { listeJoueurs: [j1], indexJoueurCourant: 0 }
    describe('nomJoueurCourant', () => {
      expect(getters.nomJoueurCourant(state)).to.equal('Toto')
    })
  })
})
