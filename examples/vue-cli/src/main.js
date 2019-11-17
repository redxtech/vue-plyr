import Vue from 'vue'
import App from './App.vue'
import VuePlyr from 'vue-plyr'

Vue.config.productionTip = false

Vue.use(VuePlyr)

new Vue({
  render: h => h(App)
}).$mount('#app')
