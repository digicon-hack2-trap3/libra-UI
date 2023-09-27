<script setup lang="ts">
import { ref } from "vue";
import { NoteApi } from "../lib/apis/generated/api";
import { Configuration } from "../lib/apis/generated/configuration";
import type { Note } from "@/lib/apis/generated/api";
import NoteFrontSmall from "@/components/NoteFrontSmall.vue";

const noteApi = new NoteApi(
  new Configuration({ basePath: "http://localhost:3000" })
);
const notes = ref<Note[]>();
noteApi.noteGet().then((res) => {
  notes.value = res.data;
});
</script>

<template>
  <div :class="$style.container">
    <h2>書庫</h2>
    <h3>
      ここでは全国のユーザーが書いた感想を読んだり、<br />自分で感想を書いたりできます。
    </h3>
    <button :class="$style.write_button">感想ノートを書く</button>
    <br />

    <div v-for="(note, idx) in notes" :class="$style.note_container">
      <RouterLink :to="'/notes/view/' + note.noteid"
        ><NoteFrontSmall
          :note-color="note.color"
          :class="$style.note"
          :style="{ left: idx * 5 + 'rem' }"
      /></RouterLink>
    </div>
    <RouterLink to="/notes/view/1">note1</RouterLink>
    <RouterLink to="/notes/view/2">note2</RouterLink>
    <RouterLink to="/notes/view/3">note3</RouterLink>
  </div>
  <RouterView />
</template>

<style module lang="scss">
.container {
  padding: 80px;
}
.note_container {
  position: relative;
  float: left;
}
.note {
  position: absolute;
}
.write_button {
  position: fixed;
  right: 80px;
}
h2 {
  text-align: center;
  padding: 20px;
}
h3 {
  text-align: center;
  padding: 20px;
}
</style>

