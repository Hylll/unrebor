<template>
  <div class="lore">
    <ComingSoon />
  </div>
</template>

<script lang="ts" setup>
import ComingSoon from '@/components/ComingSoon.vue';
</script>

<style lang="scss" scoped>
  .lore {
    margin-top: 80px; // The size of the topbar
    width: 100%;
    min-height: calc(100vh - 80px);
  }
</style>
