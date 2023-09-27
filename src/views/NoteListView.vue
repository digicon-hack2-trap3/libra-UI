<script setup lang="ts">
import { onMounted } from "vue";
import { NoteApi } from "../lib/apis/generated/api";
import { Configuration } from "../lib/apis/generated/configuration";

const noteApi = new NoteApi(
  new Configuration({ basePath: "http://localhost:3000" })
);
const notes = noteApi.noteGet();
</script>

<template>
  notelist
  <div>
    <div v-for="note in notes">
      {{ note }}
    </div>
    <RouterLink to="/notes/view/1">note1</RouterLink>
    <RouterLink to="/notes/view/2">note2</RouterLink>
    <RouterLink to="/notes/view/3">note3</RouterLink>
  </div>
  <button>感想ノートを書く</button>
  <RouterView />
</template>

<style module lang="scss"></style>

