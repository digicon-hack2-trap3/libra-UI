<script setup lang="ts">
import { ref } from "vue";
import { NoteApi } from "../lib/apis/generated/apis/NoteApi";
import type { Note } from "@/lib/apis/generated/models/Note";
import NoteFrontSmall from "@/components/NoteFrontSmall.vue";

const noteApi = new NoteApi();
const notes = ref<Note[]>();
noteApi.noteGet().then((res) => {
  notes.value = res;
});
</script>

<template>
  <div :class="$style.container">
    <h2>書庫</h2>
    <h3>
      ここでは全国のユーザーが書いた感想を読んだり、<br />自分で感想を書いたりできます。
    </h3>
    <button
      :class="$style.write_button"
      @click="this.$router.push('/notes/edit')"
    >
      感想ノートを書く
    </button>
    <br />

    <div :class="$style.note_container">
      <div v-for="(note, idx) in notes" :style="{ zIndex: idx }">
        <RouterLink :to="'/notes/view/' + note.noteId"
          ><NoteFrontSmall :note-color="note.color" :class="$style.note"
        /></RouterLink>
      </div>
      <RouterLink to="/notes/view/1">note1</RouterLink>
      <RouterLink to="/notes/view/2">note2</RouterLink>
      <RouterLink to="/notes/view/3">note3</RouterLink>
    </div>
  </div>
  <RouterView />
</template>

<style module lang="scss">
.container {
  padding: 80px;
}
.note_container {
  display: flex;
}
.note {
  margin-left: -3rem;
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

