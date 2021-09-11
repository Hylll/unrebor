<template>
  <div class="stories">
    <header>
      <h1>Stories</h1>
    </header>
    <div class="stories__container">
      <ul>
        <li
            v-for="(story, index) in stories"
            :key="index"
            :style="story.style">
          <div>
            <h2>{{ story.title }}</h2>
            <p>{{ $t(story.description) }}</p>
            <button>
              <a :href="story.link">
                <span>{{ $t('read') }}</span>
                <i class="icon-arrow-right" />
              </a>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
/* eslint-disable global-require */
export default {
  name: 'Stories',
  data() {
    return {
      stories: [
        {
          title: 'Selkay\'s Story',
          link: 'selkay-story',
          description: 'home.description',
          style: {
            backgroundImage: `url(${require('../assets/images/Azilian.jpg')})`,
          },
        },
      ],
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
    @apply text-gold;
    background: linear-gradient(180deg, transparent, rgba(17, 17, 17, 0.95));
    height: 150px;

    h1 {
      @apply text-7xl tracking-widest -mb-8;
    }
  }

  &__container {
    @apply w-full h-screen bg-black bg-opacity-95;
    @apply p-12 pt-20;

    ul {
      @apply flex flex-wrap justify-center;

      li {
        @apply flex border-4 border-solid border-brown-80;
        margin: 2%;
        list-style: none;
        width: 46%;
        max-width: 600px;
        height: 250px;
        background-size: cover;
        transition: 0.3s;

        div {
          @apply relative w-full h-full p-10 pb-20 text-gold-80 bg-black bg-opacity-50;

          h2 {
            @apply text-4xl;
          }

          p {
            @apply mt-4 leading-5 overflow-ellipsis;
          }

          button {
            @apply absolute bottom-6 right-6 p-3;
            transition: 0.3s ease-out;

            &:hover {
              transform: translateX(10px);
            }

            a {
              @apply flex items-center text-gold;
              @apply uppercase leading-4 font-bold;

              i {
                @apply ml-3;
              }
            }
          }
        }
      }
    }
  }
}
</style>
