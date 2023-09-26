<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useVerticalPanel } from "@/composables/useVerticalPanel";

const route = useRoute();

const verticalPanel = useVerticalPanel(`/comic/${route.params.comicid}`)

</script>

<template>
  <div :class="$style.viewerFrame" :style="verticalPanel.style.value"></div>
</template>

<style module lang="scss">
.viewerFrame {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--main-color);
}
</style>
