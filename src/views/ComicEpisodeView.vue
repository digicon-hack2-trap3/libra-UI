<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();

const exiting = ref(false);
const viewerAnimating = ref(false);
const viewerFrameMove = ref(0);
const viewerFrameStyle = computed(() => {
  return {
    transform: `translateY(${
      exiting.value ? "100%" : `${viewerFrameMove.value}px`
    })`,
    transition: viewerAnimating.value ? "0.3s transform ease" : "none",
  };
});
let viewerWheelTimeout = -1;
let viewerAnimatingTimeout = -1;
const exitWithAnimation = () => {
  exiting.value = true;
  viewerAnimating.value = true;
  viewerAnimatingTimeout = setTimeout(() => {
    viewerAnimating.value = false;
    router.push(`/comic/${route.params.comicid}`);
  }, 300);
};
const commitViewerWheel = () => {
  if (viewerFrameMove.value > 100) {
    exitWithAnimation();
  } else {
    viewerFrameMove.value = 0;
    viewerAnimating.value = true;
    viewerAnimatingTimeout = setTimeout(() => {
      viewerAnimating.value = false;
    }, 300);
  }
};
const viewerOnWheel = (e: WheelEvent) => {
  if (e.ctrlKey) return;
  if (exiting.value) return;
  viewerFrameMove.value -= e.deltaY;
  clearTimeout(viewerWheelTimeout);
  clearTimeout(viewerAnimatingTimeout);
  if (viewerFrameMove.value > 300) {
    exiting.value = true;
    viewerAnimating.value = true;
    viewerAnimatingTimeout = setTimeout(() => {
      viewerAnimating.value = false;
      router.push(`/comic/${route.params.comicid}`);
    }, 300);
    return;
  }
  viewerWheelTimeout = setTimeout(commitViewerWheel, 300);
};
const viewerOnKeydown = (e: KeyboardEvent) => {
  console.log("a");
  if (e.key == "ArrowDown") {
    console.log("b");
    exitWithAnimation();
  }
};
onMounted(() => {
  document.addEventListener("wheel", viewerOnWheel);
  document.addEventListener("keydown", viewerOnKeydown);
});
onUnmounted(() => {
  document.removeEventListener("wheel", viewerOnWheel);
  document.removeEventListener("keydown", viewerOnKeydown);
});
</script>

<template>
  <div :class="$style.viewerFrame" :style="viewerFrameStyle"></div>
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
