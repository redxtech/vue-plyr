import Vue from 'vue'

import VuePlyr from '../../../dist/vue-plyr.es'
import '../../../dist/vue-plyr.css'
import App from './App.vue'
import router from './router'

Vue.use(VuePlyr)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
