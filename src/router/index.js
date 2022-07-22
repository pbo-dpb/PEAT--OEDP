
const routes = [
  { path: '/', redirect: '/en' },
  { path: '/', name: 'welcome', component: require('../components/WelcomeView.vue').default },
  { path: '/notes', name: 'notes', component: require('../components/NotesView.vue').default },
  { path: '/:viewid', name: 'tableau', component: require('../components/TableauView.vue').default },
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})


export default router
