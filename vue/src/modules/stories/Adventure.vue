<template>
  <div class="adventure">
    <header
      :style="{ backgroundImage: `url(${adventure.background})` }"
    >
      <div class="adventure__head-overlay">
        <h1 class="adventure__head-title">
          {{ adventure.title }}
        </h1>
        <p class="adventure__head-subtitle">
          {{ $t('story-by') }} {{ adventure.author.firstname }} {{ adventure.author.lastname }}
        </p>
      </div>
    </header>
    <div class="adventure__container">
      <ul
        v-for="(arc, index) in adventure.arcs"
        :key="arc.title"
        class="adventure__arcs content"
      >
        <li class="adventure__arc">
          <h2 class="adventure__arc-title">
            <span class="adventure__arc-title--sub">Arc {{ index + 1 }}</span>
            <span class="adventure__arc-title-diamond">
              <span class="adventure__arc-title-diamond--inner" />
            </span>
            {{ arc.title }}
          </h2>
          <ul class="adventure__chapters">
            <li
              v-for="chapter in arc.chapters"
              :key="chapter.title"
              class="adventure__chapter"
            >
              <router-link
                class="adventure__chapter-wrapper"
                :to="{ name: 'Chapter', params: { chapter: chapter.number } }"
              >
                <p class="adventure__chapter-number">
                  {{ $t('chapter') }} {{ chapter.number }}
                </p>
                <h3 class="adventure__chapter-title">
                  {{ chapter.title }}
                </h3>
                <div class="adventure__chapter-infos">
                  <p class="adventure__chapter-infos-reading-time">
                    {{ chapter.readingTime }} min
                  </p>
                </div>
              </router-link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import storiesFixtures from '@/fixtures/stories.json';

const adventure = storiesFixtures[0];
</script>

<style lang="scss" scoped>
 .adventure {
   @apply mt-20 w-full;
   min-height: calc(100vh - 80px); // The size of the topbar
   background-size: cover;

   header {
     @apply bg-cover;
     height: 30vh;
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

   &__arcs {
     @apply flex flex-col;
   }

   &__arc {
     @apply mb-5;

     &-title {
       @apply flex items-center text-gold text-5xl;

       &--sub {
         @apply text-gold-80;
       }

       &-diamond {
         @apply flex items-center justify-center flex-shrink-0 flex-grow-0;
         @apply mx-5 border-2 border-solid border-gold;
         box-sizing: border-box;
         width: 13px;
         height: 13px;
         transform: rotate(-45deg);

         &--inner {
           @apply bg-gold;
           left: initial;
           bottom: initial;
           width: 5px;
           height: 5px;
           transform: rotate(0deg);
         }
       }
     }
   }

   &__chapters {
     @apply flex flex-col mt-10;
   }

   &__chapter {
     @apply bg-gradient-to-r from-transparent via-black-80 to-transparent;

     &:not(:last-child) {
       @apply border-b border-solid border-gold-60 border-opacity-25;
     }

     &-wrapper {
       @apply flex justify-center items-center;
       @apply w-full h-full p-8;
       transition: 0.3s;

       &:hover {
         transform: translateX(10px);
       }
     }

     &-number {
       @apply text-blue-80;
     }

     &-title {
       @apply ml-4 text-2xl text-gold-60;
     }

     &-infos {
       @apply flex items-start ml-4 text-sm text-brown-80;
     }
   }
 }

 .content {
   @apply m-auto;
   max-width: 650px;
 }
</style>
