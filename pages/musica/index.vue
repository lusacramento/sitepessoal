<template>
  <div id="musica-page" class="container-fluid justify-content-center">
    <h1>Música</h1>
    <UnderConstruction />

    <!-- <h1>{{ title }}</h1>
    <h2>Músico</h2>
    <h2>Compositor</h2>
    <h2>Professor</h2> -->
  </div>
</template>

<script>
import UnderConstruction from '~/components/UnderConstruction.vue'
export default {
  name: 'MusicoCompositorEProfessor',

  components: {
    UnderConstruction,
  },

  data() {
    return {
      title: 'Música',
    }
  },
}
</script>

<style></style>
