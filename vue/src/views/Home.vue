<template>
  <div class="home overflow-x-hidden">
    <div
      class="home__caption"
      :style="{ backgroundImage: `url('${path}/Ectalion.jpg')` }"
    >
      <div class="home__presentation">
        <h1 class="home__presentation-title">
          {{ $t('home.welcoming') }}
        </h1>
        <p class="home__presentation-text">
          {{ $t('home.description') }}
        </p>
        <button
          v-scroll-to="{ el: '.home__categories', offset: -85, easing: 'ease-out' }"
          class="home__presentation-button"
        >
          {{ $t('home.explore') }}
        </button>
      </div>
      <div class="home__overlay">
        <div class="home__overlay-stroke home__overlay-stroke--left" />
        <div class="home__overlay-stroke home__overlay-stroke-thin home__overlay-stroke-thin--left" />
        <div class="home__overlay-stroke home__overlay-stroke--right" />
        <div class="home__overlay-stroke home__overlay-stroke-thin home__overlay-stroke-thin--right" />
      </div>
    </div>

    <!-- world -->
    <div class="home__world">
      <div class="home__world-overlay" />
      <div class="home__world-map">
        <img
          :src="`${path}/maps/unrebor-map-clean.png`"
          alt="unrebor's map"
        >
      </div>
      <div class="home__world-presentation">
        <p>{{ $t('home.a-world-to-explore') }}</p>
        <router-link
          :to="{ name: 'Encyclopedia', params: { locale: 'fr' } }"
          class="home__presentation-button"
        >
          {{ $t('home.explore-world') }}
        </router-link>
      </div>
    </div>

    <!-- categories -->
    <div class="home__categories">
      <router-link
        v-for="(category, index) in categories"
        :key="index"
        :to="category.link"
        class="home__category"
      >
        <div class="home__category-wrapper">
          <h2 class="home__category-title">
            {{ $t(category.title) }}
          </h2>
          <font-awesome-icon
            class="ml-2 text-gold-60 text-2xl lg:text-3xl"
            :icon="['fas', 'arrow-right']"
          />
        </div>
        <div
          :style="category.style"
          class="home__category-background"
        />
      </router-link>
      <span class="home__diamond">
        <span class="home__diamond home__diamond--inner" />
      </span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { s3Path } from "@/constants/s3Path";

const path = s3Path;

const categories = ref({
  stories: {
    title: 'stories',
        link: 'stories',
        style: {
      backgroundImage: `url(${new URL(`${s3Path}/stories_bg.jpg`, import.meta.url).href})`,
    },
  },
  characters: {
    title: 'characters',
        link: 'characters',
        style: {
      backgroundImage: `url(${new URL(`${s3Path}/characters_bg.jpg`, import.meta.url).href})`,
    },
  },
  lore: {
    title: 'lore',
        link: 'lore',
        style: {
      backgroundImage: `url(${new URL(`${s3Path}/lore_bg.jpg`, import.meta.url).href})`,
    },
  },
  encyclopedia: {
    title: 'encyclopedia',
        link: 'encyclopedia',
        style: {
      backgroundImage: `url(${new URL(`${s3Path}/encyclopedia_bg.jpg`, import.meta.url).href})`,
    },
  },
});
</script>

<style lang="scss" scoped>
.home {
  @apply flex flex-col items-center w-full h-full;

  &__caption {
    @apply relative flex items-center justify-center flex-shrink-0 w-full;
    height: calc(100vh - 100px);
    background-size: cover;
  }

  &__overlay {
    @apply absolute w-full h-full;
    background: linear-gradient(rgba(#111318, 0.4), #111318);

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
      @apply text-7xl mb-12 text-center;
      background: -webkit-linear-gradient(#C4B998 -20%, #C28F2C);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    &-text {
      @apply text-xl text-gold-60 mb-10 max-w-[600px];
    }

    &-button {
      @apply cursor-pointer py-5 px-10 uppercase;
      @apply border-2 border-solid border-blue-60 bg-black bg-opacity-80 text-blue-60;
      letter-spacing: 2px;
      transition: 0.3s ease-out;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  &__world {
    @apply relative flex flex-col items-center justify-center z-10 mb-24;

    &-overlay {
      @apply w-full h-24;
      @apply bg-gradient-to-b from-transparent to-black;
    }

    &-presentation {
      @apply absolute flex flex-col items-center max-w-2xl px-10;
      text-shadow: 2px 2px #111318;

      p {
        @apply text-5xl text-center text-gold-60 mb-10;
      }
    }

    &-map {
      @apply flex justify-center w-full bg-black;

      img {
        @apply w-3/4 opacity-25;
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
    @apply w-full lg:w-1/2 h-[200px] lg:h-[calc(50vh-70px)];

    &:hover {
      #{$this}-background {
        transform: scale(1.1);
      }
    }

    &-wrapper {
      @apply absolute flex items-center justify-center w-full h-full p-10;
      @apply bg-black/50 z-10;
    }

    &-background {
      @apply absolute w-full h-full;
      background-size: cover;
      transition: 0.5s ease-out;
    }

    &-title {
      @apply text-gold-60;
      @apply text-3xl lg:text-5xl capitalize;
      text-shadow: 2px 2px #111318;
    }
  }

  &__diamond {
    @apply hidden lg:flex;
    @apply absolute items-center justify-center flex-grow-0 flex-shrink-0 z-20;
    @apply border-2 border-gold;
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
