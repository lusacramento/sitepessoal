<template>
  <div id="nav" class="container-fluid d-flex align-items-center">
    <div class="title">Lu Sacramento</div>
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
@font-face {
  font-family: 'Musicografi';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('~assets/fonts/Musicografi.ttf') format('truetype');
}

.title {
  font-family: 'Musicografi';
  font-size: 2.5em;
  color: rgba(233, 222, 160, 0.74);
}
</style>
