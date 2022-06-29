<template>
  <div id="home-page" class="container-fluid">
    <div class="title-layer"></div>
    <div class="center-layer">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-4 text-end">
          <div class="first-name my-4 animate__animated animate__backInRight">
            L
          </div>
          <div
            class="first-name lu my-4 animate__animated animate__backInRight"
          >
            u
          </div>
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
          <div
            class="last-name text-center animate__animated animate__rollIn animate__delay-1s"
          >
            Sacramento
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-layer">
      <div class="row d-flex text-center">
        <div class="col">
          <a
            href="/desenvolvedor-web"
            class="animate__animated animate__zoomInDown animate__delay-2s"
            >Desenvolvedor Web</a
          >
        </div>
      </div>
      <div class="row d-flex text-center">
        <div class="col">
          <a
            href="/musico-compositor-e-professor"
            class="animate__animated animate__zoomInDown animate__delay-3s"
            >Músico</a
          >
        </div>
      </div>
      <div class="row d-flex text-center">
        <div class="col">
          <a
            href="/reaja-comigo"
            class="animate__animated animate__zoomInDown animate__delay-4s"
            >Reaja!</a
          >
        </div>
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
</style>
