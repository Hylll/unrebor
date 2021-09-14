<template>
  <div class="stories">
    <header>
      <h1>{{ $t('stories') }}</h1>
    </header>
    <div class="stories__container">
      <ul>
        <li
            v-for="(story, index) in stories"
            :key="index"
            :style="{ backgroundImage: `url(${require(`@/assets/images/${story.background}`)})` }">
          <router-link
              :to="{ name: 'Adventure', params: { id: story.id } }"
              class="stories__story">
            <h2>{{ story.title }}</h2>
            <p>{{ story.description }}</p>
            <button>
              <span>
                {{ $t('read') }}
                <i class="icon-arrow-right"/>
              </span>
            </button>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import storiesFixtures from '../fixtures/stories.json';

/* eslint-disable global-require */
export default {
  name: 'Stories',
  data() {
    return {
      stories: storiesFixtures,
    };
  },
};
</script>

<style lang="scss" scoped>
.stories {
  @apply mt-20 w-full;
  min-height: calc(100vh - 80px); // The size of the topbar
  background-image: url('../assets/images/Vaalyniel.jpg');
  background-size: cover;

  header {
    @apply flex justify-center items-end;
    @apply text-gold-80;
    background: linear-gradient(180deg, transparent, rgba(#111318, 0.95));
    height: 150px;

    h1 {
      @apply text-7xl tracking-wider -mb-8 capitalize;
    }
  }

  &__container {
    @apply w-full h-screen bg-black bg-opacity-95;
    @apply p-12 pt-20;

    ul {
      @apply flex flex-wrap justify-center;

      li {
        @apply flex border border-solid border-blue-80 bg-cover;
        @apply list-none;
        margin: 2%;
        width: 46%;
        max-width: 600px;
        height: 250px;
        transition: 0.4s;

        &:hover {
          transform: scale(1.05);
          transform-origin: center;
        }
      }
    }
  }

  &__story {
    @apply relative w-full h-full p-10 pb-16 overflow-hidden;
    @apply text-gold-60 bg-black bg-opacity-50;

    &:hover {
      button {
        @apply visible;
        transform: translateY(-56px);
      }
    }

    h2 {
      @apply text-4xl;
    }

    p {
      @apply mt-4 leading-5 overflow-ellipsis;
    }

    button {
      @apply absolute w-full h-14 left-0 -bottom-14 p-3;
      @apply invisible flex justify-center items-center text-blue-60 border-t border-blue-60;
      @apply uppercase leading-4 font-bold bg-black bg-opacity-90;
      transition: 0.4s ease-out;

      &:hover {
        span {
          transform: translateX(10px);
        }
      }

      span {
        @apply flex items-center tracking-wider;
        transition: transform 0.3s ease-out;

        i {
          @apply ml-3;
        }
      }
    }
  }
}
</style>
