<template>
  <div class="home">
    <div class="home__caption">
      <div class="home__presentation">
        <h1 class="home__presentation-title">{{ $t('home.welcoming') }}</h1>
        <p class="home__presentation-text">{{ $t('home.description') }}</p>
        <button
          class="home__presentation-button"
          v-scroll-to="{ el: '.home__categories', offset: -85 }">
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
    width: 100%;
    height: 100%;
    flex-direction: column;

    &__caption {
      position: relative;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      width: 100%;
      height: calc(100vh - 100px);
      margin-bottom: 100px;
      background-image: url('../assets/images/Ectalion.jpg');
      background-size: cover;
    }

    &__overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba($black, 0.4), $black);

      &-stroke {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 3px;
        background-color: $gold;
        z-index: 2;

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
      align-items: center;
      padding: 40px;
      flex-direction: column;
      margin-top: 80px;
      z-index: 2;

      &-title {
        background: -webkit-linear-gradient($gold-light -20%, $gold);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 80px;
        line-height: 100px;
        margin-bottom: 50px;
      }

      &-text {
        color: $gold-light;
        font-size: $font-size-xl;
        width: 600px;
        margin-bottom: 40px;
      }

      &-button {
        font-weight: 400;
        font-size: 16px;
        border: 2px solid $gold;
        background-color: rgba($black-light, 0.8);
        color: $gold;
        cursor: pointer;
        letter-spacing: 2px;
        padding: 20px 42px;
        text-transform: uppercase;
        transition: 0.3s ease-out;

        &:hover {
          transform: scale(1.07);
        }
      }
    }

    &__categories {
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 30px;
      min-height: 100%;
      flex-wrap: wrap;
      margin-bottom: 40px;
      z-index: 2;
    }

    &__category {
      $this: &;
      position: relative;
      align-items: center;
      justify-content: center;
      width: 50%;
      height: calc(50vh - 70px);
      flex-shrink: 0;
      overflow: hidden;

      &:hover {
        #{$this}-background {
          transform: scale(1.1);
        }
      }

      &-wrapper {
        position: absolute;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        background: rgba($black, 0.5);
        z-index: 2;
      }

      &-background {
        position: absolute;
        width: 100%;
        height: 100%;
        background-size: cover;
        transition: 0.5s ease-out;
      }

      &-title {
        color: $gold-light;
        font-size: 45px;
        text-shadow: 2px 2px $black;
        text-transform: capitalize;
      }
    }

    &__diamond {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 3px solid $gold;
      box-sizing: border-box;
      flex-grow: 0;
      flex-shrink: 0;
      width: 40px;
      height: 40px;
      transform-origin: 0 0;
      transform: translateX(-8.5px) translateY(19.5px) rotate(-45deg);
      z-index: 3;

      &--inner {
        background-color: $gold;
        width: 20px;
        height: 20px;
        transform: rotate(0deg);
      }
    }
  }
</style>
