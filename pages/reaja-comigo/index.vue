<template>
  <div id="reaja-comigo">
    <UnderConstruction />
  </div>
</template>

<script>
// import UnderConstruction from '~/components/UnderConstruction.vue'
export default {
  name: 'ReajaComigo',
  components: {
    // UnderConstruction,
  },
    layout: 'pages',
    data() {
      return {
        title: "Reaja Comigo",
      }
    },
     created() {
     this.$bus.$emit('props', {
      title: this.title,
    })
  },
}
</script>

<style></style>
