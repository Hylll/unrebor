<template>
  <div class="chapter">
    <header
      :style="{ backgroundImage: `url('${resolveUrl(chapter.background)}')` }"
    >
      <div class="chapter__head-overlay">
        <h1 class="chapter__head-title">
          {{ chapter.title }}
        </h1>
        <p class="chapter__head-subtitle">
          {{ adventure.title }}
        </p>
      </div>
    </header>
  </div>
</template>

<script lang="ts" setup>
import storiesFixtures from '../../fixtures/stories.json';
import { useRoute } from "vue-router";
import { useResolveAssetsPath } from "../../composables/useResolveAssetsPath";
const route = useRoute();

const chapter = storiesFixtures[0].arcs[0].chapters[route.params.chapter - 1];
const adventure = storiesFixtures[0];

const resolveUrl = useResolveAssetsPath;
</script>

<style lang="scss" scoped>
  .chapter {
    @apply mt-20 w-full;
    min-height: calc(100vh - 80px); // The size of the topbar
    background-size: cover;

    header {
      @apply bg-cover;
      height: 80vh;
    }

    &__head {
      &-overlay {
        @apply flex flex-col justify-center items-center;
        @apply w-full h-full bg-gradient-to-b from-transparent to-black;
      }

      &-title {
        @apply text-7xl text-gold-60 uppercase;
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
