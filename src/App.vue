<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header :class="$style.header">
    <nav :class="$style.navbar">
      <RouterLink to="/">漫画</RouterLink> |
      <RouterLink to="/notes">書庫</RouterLink>
    </nav>
    <div :class="$style.login">
      <RouterLink to="/login">ログイン / ユーザ登録</RouterLink>
    </div>
  </header>

  <RouterView />
</template>

<style module lang="scss">
.header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
}
.navbar {
}

.login {
  position: absolute;
  right: 0;
}
</style>
