<template>
  <div id="app">
    <Topbar />
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Topbar from '@/components/Topbar.vue';
import Footer from '@/components/Footer.vue';
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
</style>
