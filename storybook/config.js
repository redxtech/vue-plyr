import { configure } from '@storybook/vue'

import Vue from 'vue'

// Import your custom components.
import Plyr from '../src/plyr.vue'
import PlyrVideo from '../src/plyr-video.vue'
import PlyrAudio from '../src/plyr-audio.vue'
import PlyrVimeo from '../src/plyr-vimeo.vue'
import PlyrYoutube from '../src/plyr-youtube.vue'

// Register custom components.
Vue.component('plyr', Plyr)
Vue.component('plyr-video', PlyrVideo)
Vue.component('plyr-audio', PlyrAudio)
Vue.component('plyr-vimeo', PlyrVimeo)
Vue.component('plyr-youtube', PlyrYoutube)

function loadStories () {
  // You can require as many stories as you need.
  require('./stories/plyr')
  require('./stories/plyr-video')
  require('./stories/plyr-audio')
  require('./stories/plyr-vimeo')
  require('./stories/plyr-youtube')
}

configure(loadStories, module)