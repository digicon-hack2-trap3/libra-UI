<script setup lang="ts">
import { useComics } from "@/stores/comicList";

const comicList = useComics();
comicList.load();

</script>

<template>
  <div :class="$style.logo">図書室ガドク</div>
  <div :class="$style.headerContainer">
    <h1>漫画</h1>
  </div>
  <div :class="$style.comicContainer">
    <RouterLink
      v-for="comic in comicList.list"
      :to="`/comic/${comic.id}`"
      :class="$style.comic"
    >
      <div :class="$style.comicIntro">{{ comic.intro }}</div>
      <div
        :class="$style.comicThumbnail"
        :style="{
          backgroundImage: `url(${comic.thumbnail})`,
        }"
      >
        <div :class="$style.comicMeta">
          <div :class="$style.comicTitle">{{ comic.title }}</div>
          <div :class="$style.comicAuthor">{{ comic.author }}</div>
        </div>
      </div>
    </RouterLink>
  </div>
  <RouterView />
</template>

<style module lang="scss">
@mixin contentWrapper {
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
}

.logo {
  padding: 0.5rem 1.9rem;
  font-size: 1.5rem;
  font-weight: bold;
}
.headerContainer {
  @include contentWrapper;
  padding: 0 2rem;
  h1 {
    font-size: 3rem;
    margin-top: 2.5rem;
  }
}

.comicContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem auto;
  z-index: -1;
  @include contentWrapper;
}

.comic {
  display: flex;
  margin: 3.75rem;
}
.comicIntro {
  width: 4em;
  height: 20.6rem;
  font-size: 0.93rem;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  writing-mode: vertical-rl;
  display: -webkit-box;
  padding: 1rem 0.5rem;
}
.comicThumbnail {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  display: block;
  width: 14.5rem;
  height: 20.6rem;
  border: 0.1rem solid var(--sub-color);
  position: relative;
}

.comicMeta {
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #ffffffc0;
  height: 5.6rem;
  padding: 1.1rem 0.6rem;
  transition: 0.3s height ease;
  .comic:hover & {
    height: 6.6rem;
  }
}

.comicTitle {
  font-size: 1.125rem;
}
.comicAuthor {
  font-size: 0.8125rem;
}
</style>
