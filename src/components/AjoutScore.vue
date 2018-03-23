<template>
  <div class="ajoutScore">
    <b-container class="bv-example-row">
        <b-row>
          <b-col sm="6"><h4>Joueur : {{ nomJoueurCourant }}</h4></b-col>
          <b-col sm="3">
            <b-form-input v-model="valeur" type="number" size="4"
              placeholder="Score" number @change="validerSaisie"></b-form-input>
          </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'AjoutScore',
  data() {
    return {
      valeur: null,
    };
  },
  computed: mapGetters(['nomJoueurCourant']),
  methods: {
    ...mapActions(['ajouterScore']),
    validerSaisie() {
      console.log('validerSaisie');
      this.ajouterScore(this.valeur);
      this.valeur = null;
    },
  },
};
</script>

<style scoped lang="scss">
</style>
