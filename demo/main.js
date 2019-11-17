import Vue from 'vue'
import App from './App.vue'
import VuePlyr from '../src/main'
// import VuePlyr from '../dist/vue-plyr.mjs'

Vue.config.productionTip = false

Vue.use(VuePlyr)

new Vue({
  render: h => h(App)
}).$mount('#app')
