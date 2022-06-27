<template>
  <div id="themes-selector" class="top-layer">
    <img
      class="img"
      :src="activedTheme.url"
      :alt="activedTheme.alt"
      @mouseover="activedTheme.url = imageMouseOver(activedTheme)"
      @mouseleave="activedTheme.url = imageMouseLeave(activedTheme)"
      @click="activedTheme = swapTheme(activedTheme)"
    />
  </div>
</template>

<script>
import imgJpgLight from '@/assets/imgs/light.jpg'
import imgJpgDark from '@/assets/imgs/dark.jpg'
import imgGifLight from '@/assets/imgs/light.gif'
import imgGifDark from '@/assets/imgs/dark.gif'

export default {
  name: 'ThemesSelector',

  props: {
    isDarkMode: Boolean,
  },

  data() {
    return {
      //   isDarkMode: true,

      themeLight: {
        url: imgJpgLight,
        alt: 'light',
        drop: imgGifDark,
        undrop: imgJpgLight,
      },

      themeDark: {
        url: imgJpgDark,
        alt: 'dark',
        drop: imgGifLight,
        undrop: imgJpgDark,
      },
      activedTheme: null,
    }
  },
  created() {
    if (this.isDarkMode) {
      this.activedTheme = this.themeDark
    } else {
      this.activedTheme = this.themeLight
    }
  },

  methods: {
    imageMouseOver(img) {
      return img.drop
    },
    imageMouseLeave(img) {
      return img.undrop
    },

    swapTheme(img) {
      if (this.isDarkMode) {
        img = this.themeLight
      } else {
        img = this.themeDark
      }
      this.sendProps()
      return img
    },

    sendProps() {
      this.$emit('props', {
        isDarkMode: !this.isDarkMode,
      })
    },
  },
}
</script>

<style>
#themes-selector {
  display: flex;
  justify-content: right;
}

.img {
  width: 35px;
  height: 35px;
  cursor: pointer;
  border: solid 1px rgba(0, 0, 0, 0.5);
}
</style>
