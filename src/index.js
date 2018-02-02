import PlyrVideo from './plyr-video.vue'
import PlyrYouTube from './plyr-youtube.vue'
import PlyrVimeo from './plyr-vimeo.vue'
import PlyrAudio from './plyr-audio.vue'

import PlyrVideoSlot from './plyr-video-slot.vue'
import PlyrAudioSlot from './plyr-audio-slot.vue'
import PlyrVimeoSlot from './plyr-vimeo-slot.vue'
import PlyrYouTubeSlot from './plyr-youtube-slot.vue'

const Components = [PlyrVideo, PlyrYouTube, PlyrVimeo, PlyrAudio, PlyrVideoSlot, PlyrAudioSlot, PlyrVimeoSlot, PlyrYouTubeSlot]

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
  PlyrVideoSlot,
  PlyrAudioSlot,
  PlyrVimeoSlot,
  PlyrYouTubeSlot
}