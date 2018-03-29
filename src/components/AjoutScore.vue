<template>
  <div class="ajoutScore">
    <b-container class="bv-example-row">
        <b-row>
          <b-col sm="6"><h4>Joueur : {{ nomJoueurCourant }}</h4></b-col>
          <b-col sm="3">
            <b-form-input ref="score" v-model="valeur" type="number" size="4"
              placeholder="Score" number @change="validerSaisie"></b-form-input>
          </b-col>
          <b-col sm="3">
            <b-button @click="clickUndo" variant="primary">Undo</b-button>
          </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'AjoutScore',
  data () {
    return {
      valeur: null
    }
  },
  mounted () {
    this.$refs.score.focus()
  },
  computed: mapGetters(['nomJoueurCourant']),
  methods: {
    ...mapActions(['ajouterScore', 'retirerScore']),
    validerSaisie () {
      this.ajouterScore(this.valeur)
      this.valeur = null
    },
    clickUndo () {
      this.retirerScore()
      this.$refs.score.focus()
    }
  }
}
</script>

<style scoped lang="scss">
</style>
