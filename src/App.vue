<template>
  <div id="app">
    <Topbar></Topbar>
    <Home msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
  import Topbar from './components/Topbar';
  import Home from './components/Home.vue';

  export default {
    name: 'App',
    components: {
      Topbar,
      Home,
    },
  };
</script>

<style lang="scss">
  @import "./assets/scss/reset";
  @import "./assets/scss/common";

  #app {
    font-family: Beaufort, Helvetica, Arial, sans-serif;
    flex-direction: column;
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
