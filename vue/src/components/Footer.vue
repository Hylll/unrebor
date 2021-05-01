<template>
  <div class="footer">
    <p>{{ $t('footer.thanks') }}.</p>
  </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss" scoped>
.footer {
  @apply flex items-center justify-center;
  @apply text-gold-80 bg-black-80;
  height: 100px;
}
</style>
