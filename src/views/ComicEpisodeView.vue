<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useVerticalPanel } from "@/composables/useVerticalPanel";
import { useComics } from "@/stores/comicList";

const route = useRoute();
const frame = ref<HTMLElement>();
const verticalPanel = useVerticalPanel(`/comic/${route.params.comicid}`);

const comics = useComics();
const episode = computed(() => {
  return comics.store
    .get(route.params.comicid as string)
    ?.episodes.find((episode) => {
      return episode.id == route.params.episodeid;
    });
});

const pageCurrent = ref(0);
const pageRight = computed(() => {
  return episode.value?.pages[pageCurrent.value];
});
const pageLeft = computed(() => {
  return episode.value?.pages[pageCurrent.value + 1];
});

const viewerOnKeydown = (e: KeyboardEvent) => {
  if (e.key == "ArrowLeft") {
    if (episode.value && episode.value.pages.length > pageCurrent.value)
      pageCurrent.value += 2;
  }
  if (e.key == "ArrowRight") {
    if (pageCurrent.value > 0) pageCurrent.value -= 2;
  }
};

onMounted(() => {
  if (frame.value) verticalPanel.setSurface(frame.value);
  document.addEventListener("keydown", viewerOnKeydown);
});
onUnmounted(() => {
  document.removeEventListener("keydown", viewerOnKeydown);
});
</script>

<template>
  <div :class="$style.frame" ref="frame">
    <div
      :class="$style.viewer"
      :style="verticalPanel.style.value"
      v-if="episode"
    >
      <img :src="pageLeft" :class="$style.page" />
      <img :src="pageRight" :class="$style.page" />
    </div>
  </div>
</template>

<style module lang="scss">
.frame {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: 2;
}
.viewer {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--main-color);
  box-shadow: 0 0 2rem #000;
  display: flex;
  justify-content: center;
}
.page {
  height: 100%;
}
</style>
