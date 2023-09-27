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
  const load = async () => {
    const data = await fetch("/manga/comicData.json").then((res) => {
      return res.json();
    });
    list.value = data.comics;
    for (const comic of list.value) {
      store.value.set(comic.id, comic);
    }
  };
  return { store, list, load };
});
