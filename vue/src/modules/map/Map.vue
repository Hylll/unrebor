<template>
  <div class="map">
    <div class="relative flex justify-center">
      <img
        class="w-full flex-shrink-0"
        :src="`${s3Path}/maps/unrebor-map-clean.png`"
        alt="unrebor's map"
      >
      <component
        :is="svg"
        id="svg-map"
        class="absolute w-full top-0 z-10 flex-shrink-0"
      />
      <p
        v-show="region.length"
        id="indicator"
        class="fixed text-xl pointer-events-none z-20 px-2 py-1 bg-black-80 rounded"
      >
        {{ region }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
/// <reference types="vite-svg-loader" />
import { defineAsyncComponent, onMounted, onUnmounted, Ref, ref } from "vue";
import { s3Path } from "@/constants/s3Path";

const svg = defineAsyncComponent( () => import('./assets/unrebor-regions.svg?component'));
function displayId(event: MouseEvent) {
  region.value = event.target.parentElement.id;
}

const region: Ref<string> = ref('');
function stickToCursor(event) {
  document.getElementById('indicator').style.transform = `translateY(${event.clientY-60}px)`;
  document.getElementById('indicator').style.transform += `translateX(${event.clientX-590}px)`;
}

onMounted(() => {
  setTimeout(() => {
    const regionsElem = document.getElementsByTagName('g');
    if (regionsElem.length > 0) {
      for (const elem of regionsElem) {
        elem.addEventListener('mouseover', displayId);
        elem.addEventListener('mouseleave', () => region.value = '');
      }
    }

    document.addEventListener('mousemove', stickToCursor,false);
  }, 100);
});

onUnmounted(() => {
  document.removeEventListener('mousemove', stickToCursor);
});
</script>

<style lang="scss">
#svg-map {
  path {
    fill: #0BC4E200;
    stroke: #0BC4E2;
    stroke-width: 2;
    stroke-miterlimit: 10;
    transition: 0.2s ease-out;
  }

  g:hover {
    @apply cursor-pointer;

    path {
      fill: #0BC4E250;
    }
  }
}
</style>
<style lang="scss" scoped>
  .map {
    margin-top: 80px; // The size of the topbar
    width: 100%;
    min-height: calc(100vh - 80px);
  }
</style>