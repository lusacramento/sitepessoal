<template>
  <div id="app" class="image-bg-1">
    <div id="header" class="d-flex">
      <Nav :test="imgBg" />
    </div>
    <main id="main" class="router-view d-flex">
      <Nuxt />
    </main>
    <div id="footer" class="d-flex">
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

  data() {
    return {
      imgBg: 0,
    }
  },
  created() {
    this.swapBg()
  },
  methods: {
    swapBg() {
      setInterval(() => {
        this.imgBg++
      }, 4000)
    },
  },
}
</script>

<style>
#app {
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.image-bg-1 {
  background-image: url('/fone-lu-sacramento.jpg');
}
</style>
