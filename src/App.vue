<template>
  <div id="app">
    <Topbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
  import Topbar from '@/components/Topbar';
  import Footer from '@/components/Footer';

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
    width: 100%;
    font-family: Beaufort, Helvetica, Arial, sans-serif;
    flex-direction: column;
    background-color: #111111;
    color: #C28F2C;
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
