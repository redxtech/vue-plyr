import VuePlyr from './VuePlyr.vue'

const VuePlyrPlugin = {
  install (Vue, options) {
    Vue.component(VuePlyr.name, VuePlyr)
  }
}

// Credit to https://github.com/irazasyed for this auto Vue.use() when
// installing from unpkg or similar.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VuePlyrPlugin)
}

export {
  VuePlyr,
  VuePlyrPlugin
}

export default VuePlyrPlugin
