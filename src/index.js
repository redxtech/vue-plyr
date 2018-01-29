import PlyrVideo from './plyr-video.vue'
import PlyrYouTube from './plyr-youtube.vue'
import PlyrVimeo from './plyr-vimeo.vue'

const Components = [PlyrVideo, PlyrYouTube, PlyrVimeo]

export default Vue => {
  Components.forEach((Component) => {
    Vue.component(Component.name, Component)
  })
}