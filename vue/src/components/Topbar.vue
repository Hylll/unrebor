<template>
  <div class="topbar">
    <router-link
      class="topbar__logo"
      :to="{ name: 'Home', params: { locale: 'fr' } }"
    >
      <font-awesome-icon :icon="['fab', 'd-and-d']" />
      Unrebor
    </router-link>
    <nav class="topbar__navbar">
      <div class="topbar__sub-navbar topbar__sub-navbar--left">
        <router-link
          class="topbar__link"
          :to="{ name: 'Stories', params: { locale: 'fr' } }"
        >
          {{ $t('stories') }}
        </router-link>
        <router-link
          class="topbar__link"
          :to="{ name: 'Characters', params: { locale: 'fr' } }"
        >
          {{ $t('characters') }}
        </router-link>
      </div>
      <div class="topbar__sub-navbar topbar__sub-navbar--right">
        <router-link
          class="topbar__link"
          :to="{ name: 'Lore', params: { locale: 'fr' } }"
        >
          {{ $t('lore') }}
        </router-link>
        <router-link
          class="topbar__link"
          :to="{ name: 'Encyclopedia', params: { locale: 'fr' } }"
        >
          {{ $t('encyclopedia') }}
        </router-link>
      </div>
    </nav>
    <LanguageSwitcher class="topbar__language-switcher" />
    <span class="topbar__diamond">
      <span class="topbar__diamond topbar__diamond--inner" />
    </span>
  </div>
</template>

<script lang="ts" setup>
import LanguageSwitcher from '@/components/LanguageSwitcher.vue';
</script>

<style lang="scss" scoped>
.topbar {
  @apply fixed flex items-center justify-center;
  @apply px-12 bg-black-80 z-50;
  width: 100vw;
  height: 80px;

  &__logo {
    @apply absolute text-gold hover:text-gold-80 text-3xl;
    left: 50px;
  }

  &__navbar {
    @apply flex items-center w-full mt-5;
  }

  &__sub-navbar {
    @apply w-1/2;

    &--left, &--right {
      @apply flex items-center;
    }

    &--left {
      @apply justify-end;
    }
  }

  &__link {
    @apply text-lg text-gold-60;
    @apply px-10 pb-6 my-0 font-bold capitalize;
    border: 5px solid transparent;
    transition: 0.5s;
    letter-spacing: 1px;

    &:hover {
      @apply text-blue-60;
      border-bottom-color: #0BC4E2;
    }
  }

  &__language-switcher {
    @apply absolute;
    right: 50px;
  }

  &__diamond {
    @apply absolute flex items-center justify-center flex-shrink-0 flex-grow-0;
    @apply border-solid border-gold;
    left: 50%;
    bottom: -26px;
    border-width: 3px;
    box-sizing: border-box;
    width: 26px;
    height: 26px;
    transform-origin: 0 0;
    transform: translateX(-18.5px) rotate(-45deg);

    &--inner {
      @apply bg-gold;
      left: initial;
      bottom: initial;
      width: 10px;
      height: 10px;
      transform: rotate(0deg);
    }
  }
}
</style>
