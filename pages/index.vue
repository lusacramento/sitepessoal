<template>
  <div id="home-page" class="d-flex">
    <img
      class="img-profile img-fluid"
      :src="imgProfile"
      alt="Imagem da face de Lu Sacramento"
    />
    <div class="container-fluid align-items-center">
      <div class="row justify-content-center">
        <div class="col-4 col-lg-1">
          <div
            class="first-name my-1 my-lg-4 animate__animated animate__backInRight"
          >
            L
          </div>
          <div
            class="first-name my-1 my-lg-4 animate__animated animate__backInRight"
          >
            u
          </div>
        </div>
        <div class="col-5 col-lg-3"></div>
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

      <div class="row menu-item d-flex text-center">
        <div class="col">
          <NuxtLink to="/desenvolvimento-web" class="a">
            Desenvolvimento Web
          </NuxtLink>
        </div>
      </div>
      <div class="row menu-item d-flex text-center">
        <div class="col">
          <NuxtLink to="/musica" class="a"> Música </NuxtLink>
        </div>
      </div>
      <div class="row menu-item d-flex text-center">
        <div class="col">
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
  layout: 'default',
  data() {
    return {
      imgProfile,
    }
  },
}
</script>

<style>
#home-page {
  align-items: center;
  justify-content: center;
  height: 100%;
}
.img-profile {
  display: inline-block;
  position: absolute;
  top: 39%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  border-radius: 10px 10px 30px 100px;
}

.teste {
  width: auto;
  height: auto;
}

.first-name {
  color: var(--first-name-color);
  font-family: 'Bebas Neue', cursive;
  font-weight: 700 !important;
}

@media (min-width: 991.96px) {
  .last-name {
    font-size: 3.8rem !important;
    letter-spacing: 15px;
  }
  .first-name {
    font-size: 5rem !important;
    letter-spacing: 20px;
  }
  .menu-item {
    padding-top: 1px;
  }
}

@media (max-width: 991.98px) {
  .last-name {
    font-size: 2.5rem !important;
    letter-spacing: 9px;
  }
  .first-name {
    font-size: 4rem !important;
    letter-spacing: 5px;
    margin-bottom: 30px !important;
  }
}
.last-name {
  color: var(--last-name-color);
  font-family: 'Bebas Neue', cursive;
  /* font-size: 1.8rem !important; */
  font-weight: 700 !important;
}
</style>
