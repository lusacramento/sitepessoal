<template>
  <div id="nav">
    <div class="row">
      <div class="col-10">
        <div v-if="!mobile">
          <p class="title">Lu Sacramento</p>
          ;
        </div>
        <div v-else>
          <p class="title">LS</p>
        </div>
      </div>
      <div class="col-2 img-header"></div>
    </div>
  </div>
</template>

<script>
import IconHeader from '@/assets/imgs/logo-ls-header.png'
export default {
  name: 'NavBar',

  data() {
    return {
      icons: {
        logoHeader: {
          url: IconHeader,
          altText: 'Logotipo Lu Sacramento',
        },
      },
      mobile: true,
    }
  },
    watch: {
      mobile(newMobile) {
        return newMobile
      }
    },

  mounted() {
    this.mobile = this.mobileVerify()
  },


  methods: {
    mobileVerify() {
      let isMobile = false
      if (
        navigator.userAgentData !== undefined &&
        navigator.userAgentData.mobile
      ) {
        isMobile = true;
      }
      return isMobile
    },
  },
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
  color: rgba(255, 217, 0, 0.726);
}
</style>
