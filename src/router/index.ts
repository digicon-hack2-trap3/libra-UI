import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ComicListViewVue from "../views/ComicListView.vue";
import NoteListViewVue from "@/views/NoteListView.vue";
import ComicDetailsViewVue from "@/views/ComicDetailsView.vue";
import ComicEpisodeViewVue from "@/views/ComicEpisodeView.vue";
import NoteEditViewVue from "@/views/NoteEditView.vue";
import NoteReadViewVue from "@/views/NoteReadView.vue";
import LoginRegisterViewVue from "@/views/LoginRegisterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: ComicListViewVue,
      children: [
        {
          path: "comic/:comicid",
          component: ComicDetailsViewVue,
          children: [
            {
              path: ":episodeid",
              component: ComicEpisodeViewVue,
            },
          ],
        },
      ],
    },
    {
      path: "/notes",
      component: NoteListViewVue,
    },
    {
      path: "/notes/edit",
      component: NoteEditViewVue,
    },
    {
      path: "/notes/view/:noteid",
      component: NoteReadViewVue,
      props: true,
    },
    {
      path: "/login",
      component: LoginRegisterViewVue,
    },
  ],
});

export default router;

