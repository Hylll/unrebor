<template>
  <div class="footer">
    <p>{{ $t('footer.thanks') }}.</p>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.footer {
  @apply flex items-center justify-center;
  @apply text-gold-60 bg-black-80;
  height: 100px;
}
</style>
