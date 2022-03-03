<template>
  <div id="app" class="container-fluid">
    <div id="header" class="container-fluid">
      <Nav />
    </div>
    <main id="main" class="router-view">
      <Nuxt />
    </main>
    <div id="footer" class="container-fluid">
    <Footer />
    </div>
  </div>
</template>

<script>
import Nav from '@/components/nav/Nav'
import Footer from '@/components/footer/Footer'
export default {
  name: 'DefaultLayout',
  components: { Nav, Footer },
}
</script>

<style>
#app {
  background-image: url("/fone-lu-sacramento.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}</style>
