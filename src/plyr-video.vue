<template>
  <video
    :id="`js-player-video-${idNumber}`"
    class="video"
    ref="video"
    :poster="poster"
    :crossorigin="crossorigin"
  >
    <source
      v-for="(vid, index) in videos"
      :key="index"
      :src="vid.src"
      :type="`video/${vid.format}`"
    >
    <track
      v-for="subtitle in subtitles"
      :key="subtitle.src"
      kind="captions"
      :label="subtitle.label"
      :src="subtitle.src"
      :srclang="subtitle.srclang"
      :default="subtitle.default"
    >
  </video>
</template>

<script>
  import plyr from 'plyr'
  import 'plyr/dist/plyr.css'

  export default {
    name: 'PlyrVideo',
    props: {
      /** Options object for plyr config. */
      options: {
        type: Object,
        required: false,
        default () { return {} }
      },
      /** Link to poster to show when video hasn't played yet. */
      poster: {
        type: String,
        required: true
      },
      /** Array of videos to include in the video source. */
      videos: {
        type: Array,
        required: true,
        validator: value => {
          let valid = true
          value.forEach((vid) => {
            let hasProps = vid.hasOwnProperty('src') && vid.hasOwnProperty('format')
            if (!hasProps) {
              valid = false
            }
          })
          return valid
        }
      },
      /** Object for subtitles track. */
      subtitles: {
        type: Object,
        required: false,
        default: () => [],
        validator: value => {
          let valid = true
          value.forEach((track) => {
            let hasProps = track.hasOwnProperty('label') && track.hasOwnProperty('src') &&
              track.hasOwnProperty('srclang')
            if (!hasProps) {
              valid = false
            }
          })
          return valid
        }
      },
      /** Boolean for whether to put crossorigin attribute on the video element. */
      crossorigin: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        player: {}
      }
    },
    computed: {
      idNumber () {
        return Math.floor(Math.random() * (100000 - 1)) + 1
      }
    },
    mounted () {
      this.player = plyr.setup(document.getElementById(`js-player-video-${this.idNumber}`), this.options)[0]
    },
    beforeDestroy () {
      this.player.destroy()
    }
  }
</script>
