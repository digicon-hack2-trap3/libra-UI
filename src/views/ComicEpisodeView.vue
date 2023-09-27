<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useVerticalPanel } from "@/composables/useVerticalPanel";

const route = useRoute();
const frame = ref<HTMLElement>();
const verticalPanel = useVerticalPanel(`/comic/${route.params.comicid}`);

onMounted(() => {
  if (frame.value) verticalPanel.setSurface(frame.value);
});
</script>

<template>
  <div :class="$style.frame" ref="frame">
    <div :class="$style.viewer" :style="verticalPanel.style.value"></div>
  </div>
</template>

<style module lang="scss">
.frame {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
}
.viewer {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--main-color);
  box-shadow: 0 0 2rem #000;
}
</style>
