<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">漫画</RouterLink> |
      <RouterLink to="/notes">書庫</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped>
</style>
