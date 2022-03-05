<template>
  <div id="home-page" class="container-fluid row-big">
    <div class="row row-big align-content-end">
      <div class="col-7 col-lg-8"></div>
      <div class="col-5 col-lg-4">
        <div class="font-white py-4">
          <a href="/music">MUSIC</a>
        </div>
        <div class="font-white py-4">
          <a href="/web-dev"> WEB<br />DEV</a>
        </div>
        <div class="font-black py-4">
          <a href="/contact">CONTACT</a>
        </div>
        <div class="font-black pb-3">
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
  height: 70vh;
}

.font-black {
  font-family: Smooch Sans;
  color: black;
  font-size: 2.5em;
}

.font-white {
  font-family: Smooch Sans;
  color: white;
  font-size: 2.5em;
}
</style>
