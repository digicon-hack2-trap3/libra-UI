import { defineStore } from "pinia";
import { ref } from "vue";

export const useVerticalPanelStack = defineStore("verticalPanelStack", () => {
  const count = ref(0);
  const register = () => {
    count.value++;
    return count.value;
  };
  const unregister = (id: number) => {
    count.value--;
  };
  const isMe = (id: number) => {
    return id === count.value;
  };
  return { register, unregister, isMe };
});
