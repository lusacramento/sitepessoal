<template>
  <div id="app">
    <div id="color-mode">
      <ColorModePicker />
    </div>
    <main id="main" class="router-view">
      <Nuxt />
    </main>
    <footer id="footer">
      <Footer />
    </footer>
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
#app {
  display: grid;
  padding: 0;
  margin: 0;

  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-template-rows: 13vh 80vh 7vh;
}

#color-mode {
  display: flex;
  justify-content: right;
}

* {
  box-sizing: border-box;
  margin: 0 !important;
  padding: 0 !important;
}

header {
  grid-area: header;
}

main {
  grid-area: main;
}

footer {
  grid-area: footer;
}
</style>
