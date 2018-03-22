export default class Joueur {
  constructor(id, name) {
    this.id = id;
    this.nom = name;
    this.listeScore = [];
  }
  getTotal() {
    return this.listeScore.reduce((somme, valeur) => somme + valeur);
  }
}