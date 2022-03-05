<template>
  <div id="nav" class="container-fluid d-flex align-items-center">
    <div class="title animate__animated animate__swing">
      <a href="/">Lu Sacramento</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  props: {
    test: {
      type: Number,
      default: 0,
      required: false,
    },
  },

  data() {
    return {}
  },
  watch: {
    mobile(newMobile) {
      return newMobile
    },
  },

  mounted() {},

  methods: {},
}
</script>

<style scoped>
.title {
  font-family: 'Musicografi';
  font-size: 3em;
  color: rgba(233, 222, 160, 0.74);
}
</style>
