import Plyr from './plyr.vue'

import PlyrVideo from './plyr-video.vue'
import PlyrYoutube from './plyr-youtube.vue'
import PlyrVimeo from './plyr-vimeo.vue'
import PlyrAudio from './plyr-audio.vue'

const Components = [Plyr, PlyrVideo, PlyrYoutube, PlyrVimeo, PlyrAudio]

export default Vue => {
  Components.forEach((Component) => {
    Vue.component(Component.name, Component)
  })
}

export {
  Plyr,
  PlyrVideo,
  PlyrAudio,
  PlyrYoutube,
  PlyrVimeo
}
