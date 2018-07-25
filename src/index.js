import Vue from 'vue'
import VuePlyr from './VuePlyr.vue'

const Components = {
  VuePlyr
}

Object.keys(Components).forEach(component => {
  Vue.component(Components[component].name, Components[component])
})

export default Components
