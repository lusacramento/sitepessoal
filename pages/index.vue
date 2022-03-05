<template>
  <div id="home-page" class="container-fluid row-big">
    <div class="row row-big align-content-center">
      <div class="col-7 col-lg-8"></div>
      <div class="col-5 col-lg-4 bg-col animate__animated animate__backInRight">
        <div class="font-white py-1 pt-5">
          <a href="/music">MUSIC</a>
        </div>
        <div class="font-white py-1">
          <a href="/web-dev"> WEB<br />DEV</a>
        </div>
        <div class="font-black py-1">
          <a href="/contact">CONTACT</a>
        </div>
        <div class="font-black pb-5">
          <a href="/about">ABOUT</a>
        </div>
      </div>
    </div>
    <!-- <div
      class="row row-big align-items-center justify-content-around text-center"
    >
      <div class="col-5 menu-font">
      </div>
      <div class="col-5 menu-font">
      </div>
    </div>
    <div
      class="row row-big align-items-center justify-content-around text-center"
    >
      <div class="col-5 menu-font">
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  layout: 'default',
}
</script>

<style>
.row-big {
  height: 72vh;
}

.font-black {
  font-family: Smooch Sans;
  color: black;
  /* font-size: 2.5em; */
  font-size: 2.5em;
}

.font-white {
  font-family: Smooch Sans;
  color: white;
  /* font-size: 2.5em; tamanho para cel */
  font-size: 2.5em;
}

.bg-col {
  background-color: rgba(0, 0, 0, 0.123);
  border-radius: 50px 0px 0px 50px;
}
</style>
