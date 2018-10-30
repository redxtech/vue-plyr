import VuePlyr from './VuePlyr.vue'

const Components = {
  VuePlyr
}

const VuePlyrPlugin = {
  install (Vue, options) {
    Object.keys(Components).forEach(component => {
      Vue.component(Components[component].name, Components[component])
    })
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
