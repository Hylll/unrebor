<template>
  <div class="language-switcher">
    <p
        @click="setLocale('fr')"
        class="language-switcher__button">
      Fr
    </p>
    <span class="language-switcher__separator">|</span>
    <p
        @click="setLocale('en')"
        class="language-switcher__button">
      En
    </p>
  </div>
</template>

<script>
export default {
  name: 'Language-switcher',
  methods: {
    setLocale(locale) {
      if (locale !== this.$route.params.locale) {
        this.$router.push({
          params: { locale },
        });
      }
      this.$i18n.locale = locale;
    },
  },
};
</script>

<style lang="scss" scoped>
.language-switcher {
  @apply flex items-center text-gold;

  &__button {
    @apply cursor-pointer p-2;

    &:hover {
      @apply font-bold;
    }
  }
}
</style>
