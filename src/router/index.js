import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/en' },
  { path: '/:language', name: 'welcome', component: require('../components/WelcomeView.vue').default },
  { path: '/:language/:viewid', name: 'tableau', component: require('../components/TableauView.vue').default },

]

const router = new VueRouter({
  routes
})

export default router
