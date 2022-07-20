<template>
  <div id="app" class="app">
    <header id="header" class="d-flex justify-content-between">
      <div class="d-flex">header</div>
      <div class="theme-selector d-flex justify-self-end">
        <ColorModePicker />
      </div>
    </header>
    <main id="main" class="router-view">
      <Nuxt />
    </main>
    <div id="footer">
      <Footer></Footer>
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
    'header'
    'main'
    'foot';
  grid-template-rows: 7vh 85vh 7vh;
}

header {
  grid-area: header;
}

#main {
  grid-area: main;
}

#footer {
  grid-area: foot;
}
</style>
