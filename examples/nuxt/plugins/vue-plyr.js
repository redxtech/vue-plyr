import Vue from 'vue'
import VuePlyr from 'vue-plyr/dist/vue-plyr.ssr.js'

// The second argument is optional and sets the default config values for every player.
Vue.use(VuePlyr, {
  plyr: {
    fullscreen: { enabled: false }
  },
  emit: ['ended']
})
