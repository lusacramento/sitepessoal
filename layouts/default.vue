<template>
  <div id="app" class="app container-fluid">
    <div id="nav">
      <ColorModePicker />
    </div>
    <main id="main" class="router-view">
      <Nuxt />
    </main>
    <div id="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import ColorModePicker from '~/components/ColorModePicker.vue'

export default {
  name: 'DefaultLayout',

  components: { Footer, ColorModePicker },
}
</script>

<style>
div.app {
  display: grid;
  padding: 0;
  margin: 0;

  grid-template-areas:
    'nav'
    'main'
    'foot';
  grid-template-rows: 7vh 85vh 7vh;
}

#nav {
  grid-area: nav;
}

#main {
  grid-area: main;
}

#footer {
  grid-area: foot;
}
</style>
