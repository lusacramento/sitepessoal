<template>
  <div id="app" :class="{ darkTheme: isDarkMode, lightTheme: !isDarkMode }">
    <ThemesSelector :is-dark-mode="isDarkMode" @props="load" />
    <main id="main" class="router-view">
      <Nuxt />
    </main>
  </div>
</template>

<script>
import ThemesSelector from '~/components/ThemesSelector.vue'
export default {
  name: 'DefaultLayout',

  components: { ThemesSelector },

  data() {
    return {
      isDarkMode: false,
    }
  },

  methods: {
    load(payload) {
      this.isDarkMode = payload.isDarkMode
    },
  },
}
</script>

<style></style>
