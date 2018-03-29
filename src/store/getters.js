export default {
  nomJoueurCourant: (state) => {
    if (state.indexJoueurCourant != null) {
      return state.listeJoueurs[state.indexJoueurCourant].nom
    }
    return ''
  }
}
