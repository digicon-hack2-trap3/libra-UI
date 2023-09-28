<script setup lang="ts">
import { ref } from "vue";
import { NoteApi } from "../lib/apis/generated/apis/NoteApi";
import type { PostNote } from "@/lib/apis/generated/models/PostNote";
import router from "@/router";

const text = ref<string>("abc");
const title = ref<string>("def");
const colorPos = ref<number>(0);
const color = ref<string>("aaaaaa");

const noteApi = new NoteApi();

const postNote = () => {
  noteApi
    .postNote({
      postNote: { title: title.value, text: text.value, color: color.value },
    })
    .then(() => router.push("/notes"));
};
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.left">a</div>
    <div :class="$style.middle">
      <textarea
        v-model="text"
        placeholder="add multiple lines"
        :class="$style.dashed_note"
      />
    </div>
    <div :class="$style.right">
      <h3>タイトル</h3>
      <input v-model="title" />
      <h3>表紙の色</h3>
      <div :class="$style.gradient" @click=""></div>
      <button @click="postNote()">書き納め</button>
    </div>
  </div>
  <RouterView />
</template>

<style module lang="scss">
.container {
  display: flex;
  height: calc(100vh - 3.5rem);
}
.left {
  width: 33.3%;
  height: calc(100vh - 3.5rem);
}
.middle {
  width: 800px;
  height: calc(100vh - 3.5rem);
}
.right {
  width: 33.3%;
  height: calc(100vh - 3.5rem);
  padding: 20px;
}
.dashed_note {
  resize: none;
  margin: auto;
  width: 100%;
  height: calc(100vh - 3.5rem);
  background-color: #ffffff;
  background-image: linear-gradient(
    180deg,
    #e2ecf5 2px,
    transparent 2px
  ); /* 罫線の色と太さ  */
  background-size: 100% 2.5em; /* 行の高さ */
  line-height: 2.5em; /* 文字の高さ */
  padding-bottom: 1px; /* 最終行の下にも罫線を引く */
}
.gradient {
  width: 100%;
  height: 1rem;
  background: linear-gradient(to right, blue, pink);
}
</style>

