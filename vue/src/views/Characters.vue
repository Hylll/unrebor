<template>
  <div class="characters">
    <ComingSoon />
  </div>
</template>

<script setup>
import ComingSoon from '@/components/ComingSoon.vue';
</script>

<style lang="scss" scoped>
  .characters {
    margin-top: 80px; // The size of the topbar
    width: 100%;
    min-height: calc(100vh - 80px);
  }
</style>
