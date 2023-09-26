<script setup lang="ts">
</script>

<template>
  comicdetails
  <div>
    <RouterLink :to="`/comic/${$route.params.comicid}/1`">episode1</RouterLink>
    <RouterLink :to="`/comic/${$route.params.comicid}/2`">episode2</RouterLink>
    <RouterLink :to="`/comic/${$route.params.comicid}/3`">episode3</RouterLink>
  </div>
  <div></div>
  <RouterView />
</template>

<style module lang="scss">
</style>