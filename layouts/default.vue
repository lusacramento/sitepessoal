<template>
  <div id="app" class="app container-fluid">
      <div id="header">
          <Nav />
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
import Nav from "@/components/nav/Nav"
import Footer from "@/components/footer/Footer"
export default {
    name: "DefaultLayout",
    components: { Nav, Footer }

}
</script>

<style>

</style>