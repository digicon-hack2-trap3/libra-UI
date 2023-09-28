<script setup lang="ts">
import { ref } from "vue";
import { NoteApi } from "../lib/apis/generated/apis/NoteApi";
import router from "@/router";

const text = ref<string>("");
const title = ref<string>("");
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

const colors = ref<string[]>([
  "000000",
  "22ff22",
  "ffffff",
  "ff44ff",
  "ffe4d6",
  "419197",
  "befff7",
]);
const colorChange = (color1: string) => {
  color.value = color1;
  console.log(color1);
};
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.left"></div>
    <div :class="$style.middle">
      <textarea
        v-model="text"
        placeholder=""
        :class="$style.dashed_note"
      />
    </div>
    <div :class="$style.right">
      <h3>タイトル</h3>
      <input v-model="title" :class="$style.title" />
      <h3>表紙の色</h3>
      <div v-for="color1 in colors">
        <div
          @click="colorChange(color1)"
          :class="$style.colors"
          :style="{ backgroundColor: '#' + color1 }"
        ></div>
      </div>
      <br />
      <br />
      <button @click="postNote()" :class="$style.button">書き終える</button>
    </div>
  </div>
  <RouterView />
</template>

<style module lang="scss">
.container {
  display: flex;
  height: calc(100vh - 3.5rem);
}
.colors {
  width: 30px;
  height: 30px;
  margin: 2px;
  float: left;
}
.left {
  width: 33.3%;
  height: calc(100vh - 3.5rem);
}
.middle {
  width: 800px;
  height: calc(100vh - 3.5rem);
  margin-top: 1rem;
}
.right {
  width: 33.3%;
  height: calc(100vh - 3.5rem);
  padding: 20px;
}
.dashed_note {
  resize: none;
  padding-bottom: 1px;
  margin: auto;
  width: 100%;
  height: calc(100vh - 3.5rem);
  background-color: #ffffff;
  background-size: 100% 2.5em;
  background-image: linear-gradient(180deg, #e2ecf5 2px, transparent 2px);
  line-height: 2.5em;
  font-family: Klee One;
}
.gradient {
  width: 100%;
  height: 1rem;
  background: linear-gradient(to right, blue, pink);
}
.title {
  font-family: Klee One;
}
.button {
  font-family: Klee One;
}
</style>

