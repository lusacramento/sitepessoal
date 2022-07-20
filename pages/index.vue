<template>
  <div id="home-page" class="container-fluid">
    <img
      class="img-profile img-fluid"
      :src="imgProfile"
      alt="Imagem da face de Lu Sacramento"
    />
    <div class="row bloco-0"></div>
    <div
      class="row bloco-1 d-flex align-items-center justify-content-center text-center"
    >
      <div
        class="col-5 col-lg-8 first-name animate__animated animate__backInRight"
      >
        L
      </div>
      <div class="col-7 col-lg-4"></div>
      <div
        class="col-5 col-lg-8 first-name animate__animated animate__backInRight"
      >
        U
      </div>
      <div class="col-7 col-lg-4"></div>
    </div>
    <div class="row bloco-2 d-flex align-items-center text-center">
      <div
        class="col last-name animate__animated animate__rollIn animate__delay-1s"
      >
        SACRAMENTO
      </div>
    </div>
    <div class="row bloco-3 d-flex align-items-center text-center nav-menu">
      <div class="col-12">
        <NuxtLink to="/desenvolvimento-web" class="a"
          >Desenvolvimento Web</NuxtLink
        >
        <div class="col-12">
          <NuxtLink to="/musica" class="a"> Música </NuxtLink>
        </div>
        <div class="col-12">
          <NuxtLink to="/reaja-comigo" class="a"> Reaja! </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgProfile from '~/assets/imgs/img-lusacramento.jpg'
export default {
  name: 'HomePage',
  layout: 'index',
  data() {
    return {
      imgProfile,
    }
  },
}
</script>

<style>
#home-page {
  height: 100%;
}

.bloco-0 {
  height: 10%;
}
.bloco-1 {
  height: 45%;
}

.bloco-2 {
  height: 13%;
}

.bloco-3 {
  height: 30%;
}
.img-profile {
  display: inline-block;
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  border-radius: 10px 10px 30px 100px;
}

.first-name {
  color: var(--first-name-color);
  font-family: 'Bebas Neue', cursive;
  font-weight: 700 !important;
}

.nav-menu {
  font-size: 1.3rem;
  text-decoration: none !important;
  font-weight: 200;
}

.last-name {
  color: var(--last-name-color);
  font-family: 'Bebas Neue', cursive;
}

/* MEDIA QUERY NOTE */
@media (min-width: 991.96px) {
  .first-name {
    font-size: 5rem !important;
  }
  .last-name {
    font-size: 3.5rem !important;
    letter-spacing: 23px;
  }
}

/* MEDIA QUERY MOBILE */
@media (max-width: 991.98px) {
  .first-name {
    font-size: 4rem !important;
  }

  .last-name {
    font-size: 2.6rem !important;
    letter-spacing: 12px;
    margin-top: 15px;
  }

  .menu-item {
    padding-top: 1px;
  }
}
</style>
