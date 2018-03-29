<template>
  <div class="home">
    <AjoutScore/>
    <GrilleScore/>
  </div>
</template>

<script>
// @ is an alias to /src
import GrilleScore from '@/components/GrilleScore.vue'
import AjoutScore from '@/components/AjoutScore.vue'

export default {
  name: 'home',
  components: {
    GrilleScore,
    AjoutScore
  }
}
</script>
