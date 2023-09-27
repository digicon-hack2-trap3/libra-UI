<script setup lang="ts">
import { useVerticalPanel } from "@/composables/useVerticalPanel";
import { useComics } from "@/stores/comicList";
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const verticalPanel = useVerticalPanel("/");

const comics = useComics();
const comic = computed(() => {
  return comics.store.get(route.params.comicid as string);
});
</script>

<template>
  <div :style="verticalPanel.style.value" :class="$style.comicDetailsFrame">
    comicdetails
    <div v-if="comic">
      <RouterLink
        v-for="episode in comic.episodes"
        :key="episode.id"
        :to="`/comic/${$route.params.comicid}/${episode.id}`"
        >{{ episode.title }}</RouterLink
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
