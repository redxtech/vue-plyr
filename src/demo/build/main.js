import Vue from 'vue'

import App from './App.vue'
import router from './router'

import '../../../dist/vue-plyr.es'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
