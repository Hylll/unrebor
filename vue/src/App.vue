<template>
  <div id="app">
    <Topbar/>
    <transition name="fade">
      <router-view/>
    </transition>
    <Footer/>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer,
    Topbar,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/reset";

#app {
  @apply flex flex-col;
  @apply w-full bg-black text-white;
  font-family: Beaufort, Helvetica, Arial, sans-serif;
}

@font-face {
  font-family: 'Beaufort';
  src: url('./assets/fonts/Beaufort Medium.eot');
  src: url('./assets/fonts/Beaufort Medium.eot?#iefix') format('embedded-opentype'),
  url('./assets/fonts/Beaufort Medium.woff2') format('woff2'),
  url('./assets/fonts/Beaufort Medium.woff') format('woff'),
  url('./assets/fonts/Beaufort Medium.ttf') format('truetype');
  font-weight: normal;
}

.fade-enter-active, .fade-leave-active {
  transform: scale(1);
  transition: .7s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: scale(1.025);
  opacity: 0;
}
</style>
