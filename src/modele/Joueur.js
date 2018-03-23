export default class Joueur {
  constructor(id, name) {
    this.id = id;
    this.nom = name;
    this.listeScore = [];
  }
  getTotal() {
    return this.listeScore.reduce((somme, valeur) => valeur + somme, 0);
  }

  ajouterScore(score) {
    const numberScore = parseInt(score, 10);
    if (!Number.isNaN(numberScore)) {
      this.listeScore.unshift(numberScore);
    }
  }

  retirerScore() {
    this.listeScore.shift();
  }
}
