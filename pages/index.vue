<template>
  <div
    id="home-page"
    class="container-fluid row-big"
    :class="{ darkTheme: isDarkMode, lightTheme: !isDarkMode }"
  >
    <div class="icontheme">
      <img
        class="img"
        :src="activedTheme.url"
        :alt="activedTheme.alt"
        @mouseover="activedTheme.url = imageMouseOver(activedTheme)"
        @mouseleave="activedTheme.url = imageMouseLeave(activedTheme)"
        @click="activedTheme = imageClick(activedTheme)"
      />
    </div>
  </div>
</template>

<script>
import imgJpgLight from '@/assets/imgs/light.jpg'
import imgJpgDark from '@/assets/imgs/dark.jpg'
import imgGifLight from '@/assets/imgs/light.gif'
import imgGifDark from '@/assets/imgs/dark.gif'

export default {
  name: 'HomePage',
  layout: 'default',

  data() {
    return {
      isDarkMode: false,

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
  watch: {
    activedTheme(newActivedTheme) {
      return newActivedTheme
    },
  },

  created() {
    if (this.isDarkMode) {
      this.activedTheme = this.themeDark
    } else {
      this.activedTheme = this.themeLight
    }
    // eslint-disable-next-line no-console
    console.log(this.activedTheme)
  },

  methods: {
    imageMouseOver(img) {
      return img.drop
    },
    imageMouseLeave(img) {
      return img.undrop
    },

    imageClick(img) {
      if (this.isDarkMode) {
        img = this.themeLight
        this.isDarkMode = false
      } else {
        this.isDarkMode = true
        img = this.themeDark
      }
      return img
    },
  },
}
</script>

<style>
.lightTheme {
  background-color: #fff !important;
}

.darkTheme {
  background-color: #000 !important;
}

.icontheme {
  display: flex;
  justify-content: right;
}

.img {
  width: 50px;
  height: 50px;
  cursor: pointer;
  border: solid 1px grey;
}
</style>
