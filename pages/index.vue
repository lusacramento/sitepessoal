<template>
  <div id="home-page" class="container-fluid">
    <div
      class="center-layer row d-flex justify-content-center align-items-center"
    >
      <div class="col-4 text-end">
        <h1 class="lu my-4">L</h1>
        <h1 class="lu my-4">u</h1>
      </div>
      <div class="col-3 d-flex justify-content-center">
        <img
          class="img-profile"
          :src="imgProfile"
          alt="Imagem da face de Lu Sacramento"
        />
      </div>
      <div class="col-4"></div>
    </div>
    <div class="row d-flex text-center">
      <div class="col">
        <h2 class="text-center">Sacramento</h2>
        <h3><a href="/desenvolvedor-web">Desenvolvedor Web</a></h3>
        <h3><a href="/musico-compositor-e-professor">Músico</a></h3>
        <h3><a href="/reaja-comigo">Reaja!</a></h3>
      </div>
    </div>
  </div>
</template>

<script>
import imgProfile from '~/assets/imgs/img-lusacramento.jpg'
export default {
  name: 'HomePage',
  layout: 'default',
  data() {
    return {
      imgProfile,
    }
  },
}
</script>

<style>
.img-profile {
  width: 300px;
  border-radius: 10px 10px 30px 100px;
}
.center-layer {
  height: 45vh;
}
</style>
