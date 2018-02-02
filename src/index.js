import PlyrVideo from './plyr-video.vue'
import PlyrYouTube from './plyr-youtube.vue'
import PlyrVimeo from './plyr-vimeo.vue'
import PlyrAudio from './plyr-audio.vue'

import PlyrVideoSlot from './plyr-video-slot.vue'

const Components = [PlyrVideo, PlyrYouTube, PlyrVimeo, PlyrAudio, PlyrVideoSlot]

export default Vue => {
  Components.forEach((Component) => {
    Vue.component(Component.name, Component)
  })
}

export {
  PlyrVideo,
  PlyrAudio,
  PlyrYouTube,
  PlyrVimeo,
  PlyrVideoSlot
}