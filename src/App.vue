<template>
  <div id="app" @scroll="handleScroll">
    <div
      class="top-background"
      align-v="start"
      :style="{ backgroundImage: getBackgroundImg }"
    >
      <NavBar />
    </div>
    <router-view />
    <AppFooter />
    <div v-if="showScrollToTop" class="scroll-to-top" @click="scrollToTop">
      <img src="@/assets/up-arrow.png" alt="up-arrow" />
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import AppFooter from './components/AppFooter.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    AppFooter,
  },
  data() {
    return {
      showScrollToTop: false,
    }
  },
  methods: {
    handleScroll() {
      this.showScrollToTop = window.scrollY > 200
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
  },
  computed: {
    getBackgroundImg() {
      let curPath = this.$route.path
      let imageUrl
      switch (curPath) {
        case '/':
          imageUrl = require('@/assets/background1.jpg')
          break
        case '/about':
          imageUrl = require('@/assets/background2.jpg')
          break
        default:
          imageUrl = require('@/assets/background1.jpg')
      }
      return `url(${imageUrl})`
    },
  },
  mounted() {
    // Listen for the scroll event on the window
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    // Remove the scroll event listener when the component is destroyed
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style>
#app {
  /* background-color: beige; */
  font-family: 'Noto Sans TC', sans-serif;
  font-weight: 700;
  width: 100%;
}

.top-background {
  height: 100vh;
  width: 100%; /* Ensure full width */
  background-size: cover;
  background-position: 50% -5%;
}

.scroll-to-top {
  background-color: rgba(122, 110, 110, 0.23); /* Semi-transparent white */
  padding: 5px;
  border-radius: 40px;
  position: fixed;
  bottom: 70px;
  right: 20px;
  cursor: pointer;
}

.scroll-to-top img {
  width: 35px; /* Adjust the size of the image */
  height: auto;
}

@media (max-width: 767px) {
  .scroll-to-top {
    position: fixed;
    bottom: 80px;
    right: 8px;
    cursor: pointer;
  }

  .scroll-to-top img {
    width: 30px; /* Adjust the size of the image */
    height: auto;
  }
}
</style>
