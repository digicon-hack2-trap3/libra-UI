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
    <div v-if="comic" :class="$style.comicContainer">
      <img :src="comic.thumbnail" :class="$style.comicThumbnail" />
      <div :class="$style.episodesContainer">
        <RouterLink
          v-for="episode in comic.episodes"
          :key="episode.id"
          :to="`/comic/${$route.params.comicid}/${episode.id}`"
          :class="$style.episode"
          >{{ episode.title }}</RouterLink
        >
      </div>
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
  padding: 3rem 0;
  box-shadow: 0 0 2rem #000;
}

.comicContainer {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 80rem;
}

.comicThumbnail {
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 30rem;
  max-height: 30rem;
}

.episodesContainer {
  position: absolute;
  right: 0;
  display: flex;
  overflow: scroll;
  width: 100%;
  max-width: 50rem;
}

.episode {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  margin: 1.25rem;
  width: 5.625rem;
  height: 22.5rem;
  background-color: #fff;
  writing-mode: vertical-rl;
}
</style>
