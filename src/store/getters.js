export default {
  nomJoueurCourant: (state) => {
    if (state.joueurCourant != null) {
      return state.joueurCourant.nom;
    }
    return '';
  },
};
