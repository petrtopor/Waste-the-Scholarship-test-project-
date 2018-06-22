// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
//import NewApp from './App'
import NewApp from './pages/Homepage'
import PlaceEdit from './pages/PlaceEdit'

import MainContent from './components/MainContent'
// import testComponent from './testComponent'
// import SideSpacer from './SideSpacer'
//import router from './router'

// import './assets/styles.scss'

Vue.config.productionTip = false

Vue.use(VueRouter)

const index =
{
	template: '<main-content :places="placesApp" :scholarshipValue="parseInt(scholarshipValueOut)" :startPercentageInitial="0" :endPercentageInitial="12" :placesTypes="placeTypes"/>'
};
const routes =
[
  {
  	path: '/',
  	component: NewApp,
  	children: [
  	  {
  	  	path: '/placeEdit',
  	  	component: PlaceEdit
  	  },
  	  {
  	  	path: '/',
  	  	component: index
  	  }
  	]
  },
];
const router = new VueRouter({
  routes // short for `routes: routes`
});

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: {
	NewApp,
	router,
  MainContent
	},
  template: '<div id=\'app\'><router-view></router-view></div>'
})
