<template>
  <div class="grilleScore">
    <div class="container">
      <table class="table">
        <thead>
          <th v-for="joueur in listeJoueurs" :key="joueur.id">
            {{ joueur.nom }}
          </th>
        </thead>
        <thead>
          <th v-for="joueur in listeJoueurs" :key="joueur.id">
            {{ joueur.listeScore.reduce((somme, valeur) => valeur + somme, 0) }}
          </th>
        </thead>
        <tbody>
          <td v-for="joueur in listeJoueurs" :key="joueur.id">
            <div v-for="(score, index) in joueur.listeScore" :key="index">{{ score }}</div>
          </td>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'GrilleScore',
  computed: mapState(['listeJoueurs'])
}
</script>

<style scoped lang="scss">
</style>
