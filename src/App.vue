<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div style="padding-top: 3.5rem;">
    <header :class="$style.header">
      <div :class="$style.contentWrapper">
        <nav :class="$style.navbar">
          <RouterLink to="/">漫画</RouterLink> |
          <RouterLink to="/notes">書庫</RouterLink>
        </nav>
        <div :class="$style.login">
          <RouterLink to="/login">ログイン / ユーザ登録</RouterLink>
        </div>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style module lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 3.5rem;
  display: flex;
  justify-content: center;
  background-color: var(--sub-color);
  z-index: 1;
}
.navbar {
  font-size: 1rem;
  :global(.router-link-active) {
    border-bottom: 0.2rem solid var(--accent-color);
  }
}

.login {
  position: absolute;
  right: 1rem;
  font-size: 1rem;
}

.contentWrapper {
  padding: 0.8rem;
  width: 100vw;
  max-width: 70rem;
  display: flex;
  justify-content: center;
  position: relative;
  color: var(--accent-color);
}

a {
  color: inherit;
}
</style>
