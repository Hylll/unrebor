<template>
  <div class="map">
    <div class="relative h-full flex justify-center">
      <img
        id="map"
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
        class="fixed top-0 left-0 text-xl pointer-events-none z-20 px-2 py-1 bg-black-80 rounded"
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
  console.log((event.target).parentElement.getBoundingClientRect());
  region.value = event.target.parentElement.id;
}

const region: Ref<string> = ref('');
function stickToCursor(event) {
  (document.getElementById('indicator') as HTMLElement).style.transform = `translateY(${event.clientY+15}px)`;
  (document.getElementById('indicator') as HTMLElement).style.transform += `translateX(${event.clientX+15}px)`;
}

function zoomIn(elem) {
  const svgElement: HTMLElement = document.querySelector('#svg-map') as HTMLElement;
  const mapElement: HTMLElement = document.querySelector('#map') as HTMLElement;
  // Reset state
  mapElement.style.transform = 'scale(1) translate(0, 0)';

  const pathElement = elem.target.parentElement;
  const pathElementPos = elem.target.parentElement.getBoundingClientRect();

  // Get the bounding box of the <path> element
  const bbox = pathElement.getBBox();
  const scaleFactor = mapElement.clientWidth / (pathElementPos.width+100);

  // Apply the scaling transformation
  svgElement.setAttribute('viewBox', `${bbox.x-50} ${bbox.y-25} ${bbox.width+100} 1000`);
  mapElement.style.transform = `scale(${scaleFactor}) translate(-${pathElementPos.x-50}px, -${pathElementPos.y-105}px)`;
}

onMounted(() => {
  setTimeout(() => {
    const regionsElem: SVGGElement[] = Array.from(document.getElementsByTagName('g'));
    if (regionsElem.length > 0) {
      for (const elem of regionsElem) {
        elem.addEventListener('mouseover', displayId);
        elem.addEventListener('mouseleave', () => region.value = '');
        elem.addEventListener('mousedown', zoomIn);
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
    stroke: #0BC4E270;
    stroke-width: 2;
    stroke-miterlimit: 10;
    transition: 0.2s ease-out;
  }

  g:hover {
    @apply cursor-pointer;

    path {
      fill: #0BC4E250;
      stroke: #0BC4E2;
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

  #map {
    transform-origin: top left;
  }
</style>