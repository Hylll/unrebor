<template>
  <div class="home">
    <div class="home__caption">
      <div class="home__presentation">
        <h1 class="home__presentation-title">{{ $t('home.welcoming') }}</h1>
        <p class="home__presentation-text">{{ $t('home.description') }}</p>
        <button
            class="home__presentation-button"
            v-scroll-to="{ el: '.home__categories', offset: -85, easing: 'ease-out' }">
          {{ $t('home.explore') }}
        </button>
      </div>
      <div class="home__overlay">
        <div class="home__overlay-stroke home__overlay-stroke--left"></div>
        <div class="home__overlay-stroke home__overlay-stroke-thin home__overlay-stroke-thin--left"></div>
        <div class="home__overlay-stroke home__overlay-stroke--right"></div>
        <div class="home__overlay-stroke home__overlay-stroke-thin home__overlay-stroke-thin--right"></div>
      </div>
    </div>
    <div class="home__categories">
      <router-link
          :key="index"
          :to="category.link"
          class="home__category"
          v-for="(category, index) in categories">
        <div class="home__category-wrapper">
          <h2 class="home__category-title">{{ $t(category.title) }}</h2>
        </div>
        <div :style="category.style" class="home__category-background"></div>
      </router-link>
      <span class="home__diamond">
        <span class="home__diamond home__diamond--inner"></span>
      </span>
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
export default {
  name: 'Home',
  data() {
    return {
      categories: {
        stories: {
          title: 'stories',
          link: 'stories',
          style: {
            backgroundImage: `url(${require('../assets/images/stories_bg.jpg')})`,
          },
        },
        characters: {
          title: 'characters',
          link: 'characters',
          style: {
            backgroundImage: `url(${require('../assets/images/characters_bg.jpg')})`,
          },
        },
        lore: {
          title: 'lore',
          link: 'lore',
          style: {
            backgroundImage: `url(${require('../assets/images/lore_bg.jpg')})`,
          },
        },
        encyclopedia: {
          title: 'encyclopedia',
          link: 'encyclopedia',
          style: {
            backgroundImage: `url(${require('../assets/images/encyclopedia_bg.jpg')})`,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  @apply flex flex-col w-full h-full;

  &__caption {
    @apply relative flex items-center justify-center flex-shrink-0 w-full;
    @apply mb-24;
    height: calc(100vh - 100px);
    background-image: url('../assets/images/Ectalion.jpg');
    background-size: cover;
  }

  &__overlay {
    @apply absolute w-full h-full;
    background: linear-gradient(rgba(#111, 0.4), #111);

    &-stroke {
      @apply absolute w-full;
      @apply bottom-0 bg-gold z-10;
      height: 3px;

      &-thin {
        height: 1px;

        &--left {
          transform: rotate(45deg);
          left: -320px;
        }

        &--right {
          transform: rotate(-45deg);
          right: -320px;
        }
      }

      &--left {
        transform: rotate(45deg);
        left: -300px;
      }

      &--right {
        transform: rotate(-45deg);
        right: -300px;
      }
    }
  }

  &__presentation {
    @apply flex items-center flex-col;
    @apply p-10 mt-20 z-10;

    &-title {
      @apply text-7xl mb-12;
      background: -webkit-linear-gradient(#C4B998 -20%, #C28F2C);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      line-height: 100px;
    }

    &-text {
      @apply text-xl text-gold-80 mb-10;
      width: 600px;
    }

    &-button {
      @apply cursor-pointer py-5 px-10 uppercase;
      @apply border-2 border-solid border-gold bg-black bg-opacity-80 text-gold;
      letter-spacing: 2px;
      transition: 0.3s ease-out;

      &:hover {
        transform: scale(1.07);
      }
    }
  }

  &__categories {
    @apply flex items-center justify-center flex-wrap w-full;
    @apply p-8 min-h-full mb-10 z-10;
  }

  &__category {
    $this: &;
    @apply relative flex items-center justify-center w-1/2 flex-shrink-0 overflow-hidden;
    height: calc(50vh - 70px);

    &:hover {
      #{$this}-background {
        transform: scale(1.1);
      }
    }

    &-wrapper {
      @apply absolute flex items-center justify-center w-full h-full;
      @apply bg-black bg-opacity-50 z-10;
    }

    &-background {
      @apply absolute w-full h-full;
      background-size: cover;
      transition: 0.5s ease-out;
    }

    &-title {
      @apply text-gold-80;
      @apply text-5xl capitalize;
      text-shadow: 2px 2px #111;
    }
  }

  &__diamond {
    @apply absolute flex items-center justify-center flex-grow-0 flex-shrink-0 z-20;
    border-width: 3px;
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    transform-origin: 0 0;
    transform: translateX(-8.5px) translateY(19.5px) rotate(-45deg);

    &--inner {
      @apply bg-gold;
      width: 20px;
      height: 20px;
      transform: rotate(0deg);
    }
  }
}
</style>
