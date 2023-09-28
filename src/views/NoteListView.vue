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
  flex-wrap: wrap;
  position: relative;
  left: 3rem;
}
.note {
  margin-left: -3rem;
  margin-bottom: 1rem;
}
.write_button {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 9999;
  padding: 0.5rem;
  font-size: 1.2rem;
  color: #FFF;
  background: #888;
  outline: none;
  border: 0.2rem solid #555;
  box-shadow: 0 0 1rem #0008;
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

