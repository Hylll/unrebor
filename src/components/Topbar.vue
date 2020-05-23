<template>
  <div class="topbar">
    <router-link
      class="topbar__logo"
      :to="`/${currentPath}/`">
      Unrebor
    </router-link>
    <nav class="topbar__navbar">
      <div class="topbar__sub-navbar topbar__sub-navbar--left">
        <router-link
          class="topbar__link"
          to="stories">
          {{ $t('stories') }}
        </router-link>
        <router-link
          class="topbar__link"
          to="characters">
          {{ $t('characters') }}
        </router-link>
      </div>
      <div class="topbar__sub-navbar topbar__sub-navbar--right">
        <router-link
          class="topbar__link"
          to="lore">
          {{ $t('lore') }}
        </router-link>
        <router-link
          class="topbar__link"
          to="encyclopedia">
          {{ $t('encyclopedia') }}
        </router-link>
      </div>
    </nav>
    <LanguageSwitcher class="topbar__language-switcher"></LanguageSwitcher>
    <span class="topbar__diamond">
      <span class="topbar__diamond topbar__diamond--inner"></span>
    </span>
  </div>
</template>

<script>
  import LanguageSwitcher from '@/components/Language-switcher';
  export default {
    name: 'Topbar',
    components: { LanguageSwitcher },
    computed: {
      currentPath() {
        return this.$route.params.locale;
      }
    },
  };
</script>

<style lang="scss" scoped>
  .topbar {
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 80px;
    padding: 0 50px;
    background-color: $black-light;

    &__logo {
      position: absolute;
      left: 50px;
      color: $gold;
      font-size: 40px;
    }

    &__navbar {
      width: 100%;
      margin: 20px 0 0;
    }

    &__sub-navbar {
      width: 50%;

      &--left {
        justify-content: flex-end;
      }
    }

    &__link {
      font-size: $font-size-l;
      color: $gold-light;
      padding: 8px 15px 24px;
      margin: 0 20px;
      border: 4px solid transparent;
      transition: 0.3s;
      font-weight: bold;
      letter-spacing: 1px;
      text-transform: capitalize;

      &:hover {
        border-bottom: 4px solid $blue;
      }
    }

    &__language-switcher {
      position: absolute;
      right: 50px;
    }

    &__diamond {
      position: absolute;
      left: 50%;
      bottom: -26px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 3px solid $gold;
      box-sizing: border-box;
      flex-grow: 0;
      flex-shrink: 0;
      width: 26px;
      height: 26px;
      transform-origin: 0 0;
      transform: translateX(-18.5px) rotate(-45deg);

      &--inner {
        left: initial;
        bottom: initial;
        background-color: $gold;
        width: 10px;
        height: 10px;
        transform: rotate(0deg);
      }
    }
  }
</style>
