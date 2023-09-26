<script setup lang="ts"></script>

<template>
  notelist
  <div>
    <RouterLink to="/notes/view/1">note1</RouterLink>
    <RouterLink to="/notes/view/2">note2</RouterLink>
    <RouterLink to="/notes/view/3">note3</RouterLink>
  </div>
  <button>感想ノートを書く</button>
  <RouterView />
</template>

<style module lang="scss"></style>
