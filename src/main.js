// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import NewApp from './App'
import testComponent from './testComponent'
// import router from './router'

// import './assets/styles.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  components: { NewApp/*, testComponent*/ },
  template: '<div id=\'app\'> <!--<testComponent title="OLOLO"/>--> <NewApp/></div>'
})
