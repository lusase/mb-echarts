import Vue from 'vue'
import VueRouter from 'vue-router'
import Vant from 'vant'
require('normalize.css')
require('vant/lib/vant-css/index.css')

import routes from './route'

import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vant)
Vue.use(VueRouter)

const router = new VueRouter({routes})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
