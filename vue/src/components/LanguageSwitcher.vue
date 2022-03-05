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

<script setup>
import { useRoute, useRouter } from 'vue-router';
import i18n from '@/plugins/i18n'

const router = useRouter();
const route = useRoute();

function setLocale(locale) {
  if (locale !== route.params.locale) {
    router.push({
      params: { locale },
    });
  }
  i18n.global.locale = locale;
}
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
