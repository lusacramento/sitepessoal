<template>
  <div id="app" :class="{ darkTheme: isDarkMode, lightTheme: !isDarkMode }">
    <div id="color-mode">
      <ColorModePicker />
    </div>
    <!-- <header id="header">
      <ThemesSelector :is-dark-mode="isDarkMode" @props="load" />
    </header> -->
    <main id="main" class="router-view">
      <Nuxt />
    </main>
    <footer id="footer">
      <Footer />
    </footer>
  </div>
</template>

<script>
// import ThemesSelector from '~/components/ThemesSelector.vue'
import Footer from '~/components/Footer.vue'
import ColorModePicker from '~/components/ColorModePicker.vue'

export default {
  name: 'DefaultLayout',

  components: { Footer, ColorModePicker },

  data() {
    return {
      isDarkMode: true,
      cookie: null,
      expire30Days: 60 * 60 * 24 * 30 * 1000,
    }
  },
  beforeMount() {},

  mounted() {
    this.cookie = this.getCookie('theme')
    // eslint-disable-next-line no-console
    console.log('this.cookie: ', this.cookie)
    // eslint-disable-next-line eqeqeq
    this.cookie === 'dark'
      ? (this.isDarkMode = true)
      : (this.isDarkMode = false)
  },

  methods: {
    load(payload) {
      this.isDarkMode = payload.isDarkMode
      this.isDarkMode
        ? this.setCookie('theme', 'dark', this.expire30Days)
        : this.setCookie('theme', 'light', this.expire30Days)
    },

    getCookie(key) {
      const cookies = document.cookie.split('; ')
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].split('=')
        if (cookie[0] === key) {
          return cookie[1]
        }
      }
      return null
    },

    setCookie(key, value, days) {
      const date = new Date()
      date.setTime(date.getTime() + days)
      document.cookie = `${key}=${value};expires=${date.toUTCString()}`
      const cookie = document.cookie
      // eslint-disable-next-line no-console
      console.log(`cookie criado: ${cookie}`)
    },
  },
}
</script>

<style>
#app {
  display: grid;
  padding: 0;
  margin: 0;

  grid-template-areas:
    'header'
    'main'
    'footer';
  grid-template-rows: 13vh 80vh 7vh;
}

#color-mode {
  display: flex;
  justify-content: right;
}

* {
  box-sizing: border-box;
  margin: 0 !important;
  padding: 0 !important;
}

header {
  grid-area: header;
}

main {
  grid-area: main;
}

footer {
  grid-area: footer;
}
</style>
