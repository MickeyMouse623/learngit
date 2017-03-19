// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router/index.js'
import store from './store/index.js'

import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/font-awesome.css'
import './assets/css/reset.css'

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '.container',
  router,
  store,
  render: h => h(App)
})
