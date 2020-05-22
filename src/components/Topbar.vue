<template>
  <div class="topbar">
    <a
      href="#"
      class="topbar__logo">
      Unrebor
    </a>
    <nav class="topbar__navbar">
      <a
        href="#"
        class="topbar__link">
        Stories
      </a>
      <a
        href="#"
        class="topbar__link">
        Characters
      </a>
      <a
        href="#"
        class="topbar__link">
        Lore
      </a>
      <a
        href="#"
        class="topbar__link">
        Encyclopedia
      </a>
    </nav>
    <span class="topbar__diamond">
      <span class="topbar__diamond topbar__diamond--inner"></span>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'Topbar',
  };
</script>

<style lang="scss" scoped>
  .topbar {
    position: fixed;
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
      margin: 20px auto 0;
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

      &:hover {
        border-bottom: 4px solid $blue;
      }
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
      transform: translateX(-19.5px) rotate(-45deg);

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
