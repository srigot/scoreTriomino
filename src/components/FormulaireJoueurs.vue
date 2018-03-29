<template>
  <div class="formulaireJoueurs container">
    <b-button @click="ajouterJoueur" variant="primary">Ajouter un joueur</b-button>
    <b-button @click="supprimerJoueur" variant="primary">Supprimer un joueur</b-button>
    <b-form @submit="onSubmit">
      <b-form-input v-for="(joueur, index) in joueurs" :key="index"
        v-model="joueurs[index]"
        required
        placeholder="Nom du joueur">
      </b-form-input>
      <b-button type="submit" variant="primary">Valider</b-button>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FormulaireJoueurs',
  data () {
    return {
      joueurs: []
    }
  },
  methods: {
    ...mapActions(['creerNouvellePartie']),
    ajouterJoueur () {
      this.joueurs.push(`Joueur ${this.joueurs.length + 1}`)
    },
    supprimerJoueur () {
      this.joueurs.pop()
    },
    onSubmit () {
      console.log('Submit')
      this.creerNouvellePartie(this.joueurs).then(() => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<style scoped lang="scss">
</style>
