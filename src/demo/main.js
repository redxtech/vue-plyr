import Vue from 'vue'

import VuePlyr from '../index'
import App from './App.vue'
import router from './router'

Vue.use(VuePlyr)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
