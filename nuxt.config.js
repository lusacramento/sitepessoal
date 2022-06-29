export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // server
  server: {
    host: '0',
    port: 4000,
  },

  // router for github pages
  router: {
    base: '/sitepessoal/',
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'sitepessoal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/default.css',
    '@/assets/css/fonts.css',
    'animate.css/animate.compat.css',
    '@/assets/css/customCSS.scss',
    '@/assets/css/themes.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['plugins/animate.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // svg
    '@nuxtjs/svg',
    // color mode
    '@nuxtjs/color-mode',
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // googlefonts
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Bebas+Neue': true,
          // wght: [500],
        },
        display: 'swap',
        download: true,
        prefetch: true,
        preconnect: true,
        preload: true,
      },
    ],
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // 'bootstrap',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'pt-BR',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
