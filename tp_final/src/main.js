import Vue from 'vue'
import App from './App.vue'
import './bootstrap'
import './axios'
import './form'
import { router } from './router'
import store from './store'
import './globalMixins'

Vue.config.productionTip = false

new Vue({
  router, // es igual a -> router : router,
  store,  // es igual a -> store : store,
  render: h => h(App),
}).$mount('#app')
