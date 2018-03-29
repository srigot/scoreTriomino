<template>
  <div class="nouvellePartie">
    <FormulaireJoueurs/>
  </div>
</template>

<script>
// @ is an alias to /src
import FormulaireJoueurs from '@/components/FormulaireJoueurs.vue'

export default {
  name: 'home',
  components: {
    FormulaireJoueurs
  }
}
</script>
