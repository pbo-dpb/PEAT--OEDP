import { createRouter, createWebHashHistory } from "vue-router";
import WelcomeView from "../components/WelcomeView.vue";
import TableauView from "../components/TableauView.vue";
import NotesView from "../components/NotesView.vue";

const routes = [
  { path: "/", name: "welcome", component: WelcomeView },
  { path: "/notes", name: "notes", component: NotesView },
  { path: "/:viewid", name: "tableau", component: TableauView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
