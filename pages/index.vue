<template>
  <div id="home-page" class="container fluid d-flex">
    <div class="row align-items-center justify-content-center">
      <div class="col">
        <div class="square"></div>
      </div>
      <div class="col">
        <div class="square"></div>
      </div>
      <div class="col">
        <div class="square"></div>
      </div>
      <div class="col">
        <div class="square"></div>
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
  width: 130px;
  height: 130px;
  border: solid 1px blue;
  background-color: rgba(211, 179, 157, 0.4);
}
</style>
