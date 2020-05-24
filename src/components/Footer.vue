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
    height: 100px;
    background-color: $black-light;
    align-items: center;
    justify-content: center;
    color: $gold-light;
  }
</style>
