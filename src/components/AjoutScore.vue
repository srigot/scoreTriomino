<template>
  <div v-if="nomJoueurCourant !== ''" class="ajoutScore">
    <b-container>
        <b-row>
          <b-col sm="3"><h4>{{ nomJoueurCourant }}</h4></b-col>
          <b-col sm="2">
            <b-button id="pioche" @click="clickPioche" variant="primary">{{ pioche > 2 ? 'Non joué' : 'Pioche' }} <b-badge variant="light">{{ pioche }}</b-badge></b-button>
          </b-col>
          <b-col sm="auto">
            <b-form-input ref="score" v-model.number="valeur" type="number" size="4"
              placeholder="Score" number @keyup.enter.native="validerSaisie"></b-form-input>
          </b-col>
          <b-col sm="1">
            <b-button id="undo" @click="clickUndo" variant="primary">Undo</b-button>
          </b-col>
        </b-row>
    </b-container>
  </div>
  <div v-else>
    <b-alert show variant="warning">Créer une nouvelle partie : <b-link to="/new">lien</b-link></b-alert>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AjoutScore',
  data () {
    return {
      valeur: null,
      pioche: 0
    }
  },
  mounted () {
    this.$refs.score.focus()
  },
  computed: mapGetters(['nomJoueurCourant']),
  methods: {
    ...mapActions(['ajouterScore', 'retirerScore']),
    resetCompteurs () {
      this.valeur = null
      this.pioche = 0
    },
    validerSaisie () {
      let score = this.pioche * (-5)
      score += this.valeur

      this.ajouterScore(score)
      this.resetCompteurs()
    },
    clickUndo () {
      this.retirerScore()
      this.resetCompteurs()
      this.$refs.score.focus()
    },
    clickPioche () {
      if (this.pioche < 3) {
        this.pioche++
      } else {
        // Click sur non joue
        this.valeur = -10
        this.validerSaisie()
      }
      this.$refs.score.focus()
    }
  }
}
</script>

<style scoped lang="scss">
</style>
