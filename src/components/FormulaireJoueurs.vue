<template>
  <div class="formulaireJoueurs container">
    <b-row class="justify-content-center">
      <b-button @click="ajouterJoueur" variant="secondary">+</b-button>
      <b-button @click="supprimerJoueur" variant="secondary">-</b-button>
    </b-row>
    <b-form @submit="onSubmit">
      <b-row class="justify-content-center" v-for="(joueur, index) in joueurs" :key="index">
        <b-form-input
          v-model="joueurs[index]"
          required
          :placeholder="listePlaceHolder[index]">
        </b-form-input>
      </b-row>
      <b-row class="justify-content-center">
        <b-button type="submit" variant="primary">Valider</b-button>
      </b-row>
    </b-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FormulaireJoueurs',
  data () {
    return {
      joueurs: [],
      listePlaceHolder: []
    }
  },
  methods: {
    ...mapActions(['creerNouvellePartie']),
    ajouterJoueur () {
      this.listePlaceHolder.push(`Joueur ${this.listePlaceHolder.length + 1}`)
      this.joueurs.push('')
    },
    supprimerJoueur () {
      this.joueurs.pop()
      this.listePlaceHolder.pop()
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
button {
  margin-left: 2px
}
.row {
  margin-bottom: 2px
}
</style>
