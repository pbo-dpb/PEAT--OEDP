import { createRouter, createWebHashHistory } from 'vue-router'
import WelcomeView from "../components/WelcomeView.vue"

const routes = [
  { path: '/', name: 'welcome', component: WelcomeView },
  //{ path: '/notes', name: 'notes', component: require('../components/NotesView.vue').default },
  //{ path: '/:viewid', name: 'tableau', component: require('../components/TableauView.vue').default },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})


export default router
