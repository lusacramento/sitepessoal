<template>
  <div id="home-page" class="container">
    <div class="row justify-content-around">
      <div class="col-5 square d-flex">
        <div
          class="col-12 border-menu align-self-center text-center justify-content-center"
        >
          music
        </div>
      </div>
      <div class="col-5 square d-flex">
        <div
          class="col-12 border-menu align-self-center text-center justify-content-center"
        >
          web-developer
        </div>
      </div>
    </div>
    <div class="row justify-content-around">
      <div class="col-5 square d-flex">
        <div
          class="col-12 border-menu align-self-center text-center justify-content-center"
        >
          about
        </div>
      </div>
      <div class="col-5 square d-flex">
        <div
          class="col-12 border-menu align-self-center text-center justify-content-center"
        >
          contact
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'default',
}
</script>

<style scoped>
.square {
  height: 35vh;
  border: solid 1px blue;
}

.border-menu {
  border: solid 1px red;
  background-color: rgba(211, 179, 157, 0.4);
}
</style>
