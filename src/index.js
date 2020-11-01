import VuePlyr from './vue-plyr.vue'

VuePlyr.install = (app, options = {}) => {
  if (options.plyr) {
    VuePlyr.props.options.default = () => { return { ...options.plyr } }
  }
  if (options.emit) {
    VuePlyr.props.emit.default = () => { return [...options.emit] }
  }

  app.component(VuePlyr.name, VuePlyr)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VuePlyr)
}

export default VuePlyr
