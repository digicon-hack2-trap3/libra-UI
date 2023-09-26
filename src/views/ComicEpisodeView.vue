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
const cancelExiting = () => {
  viewerFrameMove.value = 0;
  viewerAnimating.value = true;
  viewerAnimatingTimeout = setTimeout(() => {
    viewerAnimating.value = false;
  }, 300);
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
  viewerWheelTimeout = setTimeout(cancelExiting, 300);
};
const viewerOnKeydown = (e: KeyboardEvent) => {
  console.log("a");
  if (e.key == "ArrowDown" || e.key == "Escape") {
    console.log("b");
    exitWithAnimation();
  }
};

let touchstartY = 0;
let touching1finger = false;
const viewerOnTouchChange = (e: TouchEvent) => {
  if (e.touches.length == 1) {
    touching1finger = true;
    touchstartY = e.touches[0].clientY;
  } else {
    touching1finger = false;
    if (!exiting.value) cancelExiting();
  }
};
const viewerOnTouchMove = (e: TouchEvent) => {
  if (touching1finger)
    viewerFrameMove.value = Math.max(0, e.touches[0].clientY - touchstartY - 50);
  if (viewerFrameMove.value > 150) {
    clearTimeout(viewerAnimatingTimeout);
    exiting.value = true;
    viewerAnimating.value = true;
    viewerAnimatingTimeout = setTimeout(() => {
      viewerAnimating.value = false;
      router.push(`/comic/${route.params.comicid}`);
    }, 300);
    return;
  }
};
onMounted(() => {
  document.addEventListener("wheel", viewerOnWheel);
  document.addEventListener("keydown", viewerOnKeydown);
  document.addEventListener("touchstart", viewerOnTouchChange);
  document.addEventListener("touchmove", viewerOnTouchMove);
  document.addEventListener("touchend", viewerOnTouchChange);
});
onUnmounted(() => {
  document.removeEventListener("wheel", viewerOnWheel);
  document.removeEventListener("keydown", viewerOnKeydown);
  document.removeEventListener("touchstart", viewerOnTouchChange);
  document.removeEventListener("touchmove", viewerOnTouchMove);
  document.removeEventListener("touchend", viewerOnTouchChange);
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
