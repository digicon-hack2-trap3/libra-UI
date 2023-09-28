<script setup lang="ts">
import { ref } from "vue";
import {
  NoteApi,
  type NoteIdGetRequest,
} from "../lib/apis/generated/apis/NoteApi";
import router from "@/router";
import type { NoteDetail } from "@/lib/apis/generated";

const props = defineProps(["noteid"]);
const noteApi = new NoteApi();
const note = ref<NoteDetail>();
console.log(props.noteid);
const requestParameters: NoteIdGetRequest = { id: props.noteid as number };
noteApi.noteIdGet(requestParameters).then((res) => {
  note.value = res;
});
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.title" :style="{ backgroundColor: '#' + note?.color }">
      {{ note?.title }}
    </div>
    <div :class="$style.textcontainer">
      <div :class="$style.text">
        {{ note?.text }}
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.container {
  display: flex;
}
.title {
  width: 800px;
  height: calc(100vh - 3.5rem);
  background-color: aqua;
}
.textcontainer {
  width: 5000px;
}
.text {
  white-space: pre-wrap;
  columns: 24rem;
}
.dashed_note {
  resize: none;
  overflow: scroll;
  padding-bottom: 1px;
  height: calc(100vh - 3.5rem);
  background-color: #ffffff;
  background-size: 100% 2.5em;
  background-image: linear-gradient(180deg, #e2ecf5 2px, transparent 2px);
  line-height: 2.5em;
}
</style>

