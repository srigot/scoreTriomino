import * as types from './mutation_types'

export default {
  creerNouvellePartie ({ commit }, listeJoueurs) {
    return new Promise((resolve) => {
      const liste = []
      listeJoueurs.forEach((element, index) => {
        liste.push({ id: index + 1, nom: element, listeScore: [] })
      })
      commit(types.INIT_LISTE, liste)
      resolve()
    })
  },
  ajouterScore ({ commit }, score) {
    commit(types.UPDATE_SCORE, score)
  },
  retirerScore ({ commit }) {
    commit(types.UNDO_SCORE)
  }
}
