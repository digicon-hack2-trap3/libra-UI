import { ref, computed } from "vue";
import { defineStore } from "pinia";

export type EpisodeData = {
  id: string;
  title: string;
  pages: Array<string>;
};
export type ComicData = {
  id: string;
  title: string;
  author: string;
  intro: string;
  thumbnail: string;
  episodes: Array<EpisodeData>;
};

export const useComics = defineStore("comicList", () => {
  const store = ref(new Map<string, ComicData>());
  const list = ref(new Array<ComicData>());
  return { store, list };
});
