<template>
  <div id="app" class="app">
    <header id="header">
      <Nav />
    </header>
    <main id="main" class="router-view">
      <div
        id="music-page"
        class="container-fluid d-flex justify-content-around align-items-center"
      >
        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-12 col-lg-3 col-xl-3">
            <h1 class="title text-center">Música</h1>
          </div>
          <div class="description col-12 col-lg-8 col-xxl-6">
            <Nuxt />
          </div>
        </div>
      </div>
    </main>
    <div id="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue'
import Nav from '~/components/Nav.vue'

export default {
  name: 'DefaultLayout',

  components: { Footer, Nav },
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
