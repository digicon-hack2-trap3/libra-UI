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
      <div :class="$style.comicInfoContainer">
        <div :class="$style.comicInfo">
          <h1 :class="$style.comicTitle">{{ comic.title }}</h1>
          <div :class="$style.comicAuthor">{{ comic.author }}</div>
          <div :class="$style.comicIntro">{{ comic.intro }}</div>
        </div>
        <div :class="$style.episodesContainer">
          <RouterLink
            v-for="episode in comic.episodes"
            :key="episode.id"
            :to="`/comic/${$route.params.comicid}/${episode.id}`"
            :class="$style.episode"
            ><div :class="$style.episodeNumber">{{ episode.id }}</div>
            <div :class="$style.episodeTitle">
              {{ episode.title }}
            </div></RouterLink
          >
        </div>
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
  display: flex;
}

.comicInfoContainer {
  padding: 0 3rem;
}

.comicInfo {
  margin-bottom: 2rem;
}

.comicTitle {
  margin-bottom: 0.7rem;
  width: 45rem;
}
.comicAuthor {
  margin-bottom: 1rem;
}
.comicIntro {
  width: 30rem;
}

.comicThumbnail {
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 30rem;
  max-height: 30rem;
}

.episodesContainer {
  display: flex;
  overflow: scroll;
  width: 100%;
  max-width: 50rem;
}

.episode {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  margin: 1.25rem;
  padding: 0.2rem;
  width: 4rem;
  height: 17.5rem;
  background-color: #fff;
  box-sizing: border-box;
  border: 0.2rem solid transparent;
  &:hover {
    border: 0.2rem solid #888;
  }
}
.episodeNumber {
  margin-bottom: 1rem;
}

.episodeTitle {
  writing-mode: vertical-rl;
}

</style>
