<template>
  <div class="home">
    <div class="home__caption">
      <div class="home__presentation-wrapper"></div>
    </div>
    <div class="home__categories">
      <router-link
        :key="index"
        class="home__category"
        :to="category.link"
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
      flex-shrink: 0;
      width: 100%;
      height: 100vh;
      background-image: url('../assets/images/Ectalion.jpg');
      background-size: cover;
    }

    &__presentation-wrapper {
      width: 100%;
      height: 100%;
      background: rgba($black, 0.5);
    }

    &__categories {
      align-items: center;
      justify-content: center;
      width: 100%;
      padding: 30px;
      min-height: 100%;
      flex-wrap: wrap;
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
        font-size: $font-size-xxl;
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
