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

export {
  VuePlyrPlugin,
  VuePlyr
}

export default VuePlyrPlugin
