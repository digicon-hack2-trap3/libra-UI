<script setup lang="ts">
import { ref } from "vue";
import {
  NoteApi,
  type NoteIdGetRequest,
} from "../lib/apis/generated/apis/NoteApi";
import type { Note } from "@/lib/apis/generated/models/Note";
import router from "@/router";
import type { NoteAuthorIdGetRequest, NoteDetail } from "@/lib/apis/generated";

const props = defineProps(["noteid"]);
const noteApi = new NoteApi();
const note = ref<NoteDetail>();
const othernotes = ref<Note[]>();

const noteIdGetParameters: NoteIdGetRequest = { id: props.noteid as number };
noteApi
  .noteIdGet(noteIdGetParameters)
  .then((res) => {
    note.value = res;
  })
  .then(() => {
    const noteAuthorIdGetParameters: NoteAuthorIdGetRequest = {
      id: note.value?.userId as number,
    };
    noteApi.noteAuthorIdGet(noteAuthorIdGetParameters).then((res) => {
      othernotes.value = res;
    });
  });
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.titlecontainer">
      <div
        :class="$style.titleContainer"
        :style="{ backgroundColor: '#' + note?.color }"
      >
        <div :class="$style.title">
          {{ note?.title }}
        </div>
      </div>
    </div>
    <div :class="$style.textcontainer">
      <div :class="[$style.text, $style.dashed_note]">
        {{ note?.text }}
      </div>
    </div>
    <div :class="$style.othernotes_container">
      <div
        v-for="othernote in othernotes"
        :style="{ background: '#' + othernote.color }"
        :class="$style.othernotes"
      >
        <RouterLink
          :to="'/notes/view/' + othernote.noteId"
          :key="$route.fullPath"
          >　　　　　　　　　　　</RouterLink
        >
      </div>
      この人の他の感想ノートを見る
    </div>
  </div>
</template>

<style module lang="scss">
.container {
  display: flex;
}
.othernotes_container {
  min-width: 500px;
}
.othernotes {
  margin: 2px;
  height: 40px;
}
.titleContainer {
  min-width: 30rem;
  height: calc(100vh - 3.5rem);
  text-align: right;
  display: block;
  padding: 1rem;
}

.title {
  position: relative;
  top: 20rem;
  font-size: 3rem;
}
.textcontainer {
  width: 5000px;
}
.text {
  white-space: pre-wrap;
  column-width: 32rem;
  width: 1000rem;
  column-fill: auto;
  height: calc(100vh - 3.5rem);
  padding-left: 1rem;
}
.dashed_note {
  resize: none;
  overflow: scroll;
  padding-bottom: 1px;
  background-color: #ffffff;
  background-size: 100% 2.5em;
  background-image: linear-gradient(180deg, #e2ecf5 2px, transparent 2px);
  line-height: 2.5em;
}
</style>
