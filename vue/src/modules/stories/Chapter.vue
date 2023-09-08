<template>
  <div class="chapter">
    <header
      :style="{ backgroundImage: `url('${chapter.background}')` }"
    >
      <div class="chapter__head-overlay">
        <div class="flex flex-col items-center max-w-[700px] bg-black bg-opacity-90 p-10">
          <h1 class="chapter__head-title text-center">
            {{ chapter.title }}
          </h1>
          <router-link
            class="chapter__head-subtitle"
            :to="{ name: 'Adventure', params: { id: story.id } }"
          >
            {{ adventure.title }}
          </router-link>

          <div class="mt-10">
            <p
              v-for="(paragraph, index) in chapter.paragraphs"
              :key="index"
              class="text-justify text-lg mt-5"
            >
              {{ paragraph.text }}
            </p>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script lang="ts" setup>
import storiesFixtures from '@/fixtures/stories.json';
import { useRoute } from "vue-router";
const route = useRoute();

const chapter = storiesFixtures[0].arcs[0].chapters[route.params.chapter - 1];
const adventure = storiesFixtures[0];
const story = storiesFixtures.find((story) => story.id === route.params.id);
</script>

<style lang="scss" scoped>
  .chapter {
    @apply mt-20 w-full;
    min-height: calc(100vh - 80px); // The size of the topbar
    background-size: cover;

    header {
      @apply bg-cover;
    }

    &__head {
      &-overlay {
        @apply flex flex-col justify-center items-center p-10;
        @apply w-full bg-gradient-to-b from-transparent to-black;
      }

      &-title {
        @apply text-4xl text-gold-60 uppercase;
      }

      &-subtitle {
        @apply mt-4 text-lg text-gold-80 uppercase;
      }
    }

    &__container {
      @apply p-12;
    }
  }
</style>
