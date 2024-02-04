<template>
  <div class="flex w-[100vw] mt-[80px] h-[calc(100vh-180px)]">
    <pre>{{ zoom }}</pre>
    <l-map
      ref="map"
      v-model:zoom="zoom"
      :max-zoom="1"
      :use-global-leaflet="false"
      :center="[0, 0]"
    >
      <l-tile-layer
        :url="url"
        layer-type="base"
        :tile-size="tileSize"
        name="Unrebor"
      />
    </l-map>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
// import { s3Path } from "@/constants/s3Path";
import "leaflet/dist/leaflet.css";
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
import { Point } from "leaflet";

const url = `/src/modules/map/{z}/{x}_{y}.png`;
const zoom = ref(1);
const tileSize = new Point(1000, 750);
</script>
