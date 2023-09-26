<script setup lang="ts">
import { useVerticalPanel } from "@/composables/useVerticalPanel";
import { useRoute } from "vue-router";

const route = useRoute();
const verticalPanel = useVerticalPanel("/");
</script>

<template>
  <div :style="verticalPanel.style.value" :class="$style.comicDetailsFrame">
    comicdetails
    <div>
      <RouterLink :to="`/comic/${$route.params.comicid}/1`"
        >episode1</RouterLink
      >
      <RouterLink :to="`/comic/${$route.params.comicid}/2`"
        >episode2</RouterLink
      >
      <RouterLink :to="`/comic/${$route.params.comicid}/3`"
        >episode3</RouterLink
      >
    </div>
    <RouterView />
  </div>
</template>

<style module lang="scss">
.comicDetailsFrame {
  position: fixed;
  top: 3.5rem;
  background-color: var(--main-color);
  height: 100vh;
  width: 100vw;
}
</style>
