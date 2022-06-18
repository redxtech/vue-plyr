import Vue from 'vue'
import VuePlyr from '@skjnldsv/vue-plyr/dist/vue-plyr.ssr.js'
import '@skjnldsv/vue-plyr/dist/vue-plyr.css'

// The second argument is optional and sets the default config values for every player.
Vue.use(VuePlyr, {
	plyr: {}
})
