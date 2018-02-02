import PlyrVideo from './plyr-video.vue'
import PlyrYoutube from './plyr-youtube.vue'
import PlyrVimeo from './plyr-vimeo.vue'
import PlyrAudio from './plyr-audio.vue'

import PlyrVideoSlot from './plyr-video-slot.vue'
import PlyrAudioSlot from './plyr-audio-slot.vue'
import PlyrVimeoSlot from './plyr-vimeo-slot.vue'
import PlyrYoutubeSlot from './plyr-youtube-slot.vue'

const Components = [PlyrVideo, PlyrYoutube, PlyrVimeo, PlyrAudio, PlyrVideoSlot, PlyrAudioSlot, PlyrVimeoSlot, PlyrYoutubeSlot]

export default Vue => {
  Components.forEach((Component) => {
    Vue.component(Component.name, Component)
  })
}

export {
  PlyrVideo,
  PlyrAudio,
  PlyrYoutube,
  PlyrVimeo,
  PlyrVideoSlot,
  PlyrAudioSlot,
  PlyrVimeoSlot,
  PlyrYoutubeSlot
}