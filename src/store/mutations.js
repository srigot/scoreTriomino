/* eslint no-param-reassign: ["error",
{ "props": true, "ignorePropertyModificationsFor": ["state"] }] */

import * as types from './mutation_types'

export default {
  [types.INIT_LISTE] (state, liste) {
    state.listeJoueurs = liste
    if (liste.length > 0) {
      state.indexJoueurCourant = 0
    } else {
      state.indexJoueurCourant = null
    }
  },
  [types.UPDATE_SCORE] (state, score) {
    if (state.indexJoueurCourant !== null) {
      const numberScore = parseInt(score, 10)
      const joueurCourant = state.listeJoueurs[state.indexJoueurCourant]
      if (joueurCourant !== undefined && !Number.isNaN(numberScore)) {
        joueurCourant.listeScore.unshift(numberScore)
      }
      const idSuivant = (state.indexJoueurCourant + 1) % state.listeJoueurs.length
      state.indexJoueurCourant = idSuivant
    }
  },
  [types.UNDO_SCORE] (state) {
    if (state.indexJoueurCourant !== null) {
      let idPrecedent = state.indexJoueurCourant - 1
      if (idPrecedent < 0) {
        idPrecedent = state.listeJoueurs.length - 1
      }
      state.indexJoueurCourant = idPrecedent
      const joueurCourant = state.listeJoueurs[state.indexJoueurCourant]
      if (joueurCourant !== undefined) {
        joueurCourant.listeScore.shift()
      }
    }
  }
}
