import { useVerticalPanelStack } from "@/stores/verticalPanelStack";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

export const useVerticalPanel = (prevPath: string) => {
  const router = useRouter();
  const stack = useVerticalPanelStack();

  const panelId = stack.register();
  const exiting = ref(true);
  const viewerAnimating = ref(false);
  const viewerFrameMove = ref(0);
  const viewerFrameStyle = computed(() => {
    return {
      transform: `translateY(${
        exiting.value ? "100%" : `${viewerFrameMove.value}px`
      })`,
      transition: viewerAnimating.value ? "0.3s transform ease-out" : "none",
    };
  });
  let viewerWheelTimeout = -1;
  let viewerAnimatingTimeout = -1;
  const exitWithAnimation = () => {
    clearTimeout(viewerWheelTimeout);
    clearTimeout(viewerAnimatingTimeout);
    exiting.value = true;
    viewerAnimating.value = true;
    viewerAnimatingTimeout = setTimeout(() => {
      viewerAnimating.value = false;
      stack.unregister(panelId);
      router.push(prevPath);
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
    if (!stack.isMe(panelId)) return;
    if (e.ctrlKey) return;
    viewerFrameMove.value = Math.max(0, viewerFrameMove.value - e.deltaY);
    e.preventDefault();
    clearTimeout(viewerWheelTimeout);
    clearTimeout(viewerAnimatingTimeout);
    if (viewerFrameMove.value > 300) {
      exitWithAnimation();
      return;
    }
    viewerWheelTimeout = setTimeout(cancelExiting, 300);
  };
  const viewerOnKeydown = (e: KeyboardEvent) => {
    if (!stack.isMe(panelId)) return;
    if (e.key == "ArrowDown" || e.key == "ArrowUp" || e.key == "Escape") {
      exitWithAnimation();
      e.preventDefault();
    }
  };

  let touchstartY = 0;
  let touching1finger = false;
  const viewerOnTouchChange = (e: TouchEvent) => {
    if (!stack.isMe(panelId)) return;
    if (e.touches.length == 1) {
      touching1finger = true;
      touchstartY = e.touches[0].clientY;
    } else {
      touching1finger = false;
      if (!exiting.value) cancelExiting();
    }
    e.preventDefault();
  };
  const viewerOnTouchMove = (e: TouchEvent) => {
    if (!stack.isMe(panelId)) return;
    if (touching1finger)
      viewerFrameMove.value = Math.max(
        0,
        e.touches[0].clientY - touchstartY - 50
      );
    if (viewerFrameMove.value > 150) {
      exitWithAnimation();
      return;
    }
    e.preventDefault();
  };
  let surfaceElem: HTMLElement | null = null;

  const setSurface = (elem: HTMLElement) => {
    surfaceElem = elem;
    surfaceElem.addEventListener("wheel", viewerOnWheel);
    document.addEventListener("keydown", viewerOnKeydown);
    surfaceElem.addEventListener("touchstart", viewerOnTouchChange);
    surfaceElem.addEventListener("touchmove", viewerOnTouchMove);
    surfaceElem.addEventListener("touchend", viewerOnTouchChange);
    setTimeout(() => {
      viewerAnimating.value = true;
      exiting.value = false;
      viewerAnimatingTimeout = setTimeout(() => {
        viewerAnimating.value = false;
      }, 300);
    }, 0);
  };
  onUnmounted(() => {
    if (surfaceElem) {
      surfaceElem.removeEventListener("wheel", viewerOnWheel);
      document.removeEventListener("keydown", viewerOnKeydown);
      surfaceElem.removeEventListener("touchstart", viewerOnTouchChange);
      surfaceElem.removeEventListener("touchmove", viewerOnTouchMove);
      surfaceElem.removeEventListener("touchend", viewerOnTouchChange);
    }
  });

  return { style: viewerFrameStyle, setSurface };
};
