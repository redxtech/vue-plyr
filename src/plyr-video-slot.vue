<template>
    <div :id="`plyr-video-container-${this.idNumber}`">
        <slot>
            <video
                    :id="`js-player-video-${this.idNumber}`" class="video" ref="video"
                    :poster="this.poster" :crossorigin="this.crossorigin"
            >
                <source v-for="(vid, index) in this.videos" :key="index" :src="vid.src" :type="`video/${vid.format}`"/>
                <track
                        v-if="this.subtitles" kind="captions" :label="this.subtitles.label"
                        :src="this.subtitles.src" :srclang="this.subtitles.srclang" default
                >
            </video>
        </slot>
    </div>
</template>

<script>
  import plyr from 'plyr'
  import 'plyr/dist/plyr.css'

  export default {
    name: 'plyr-video-slot',
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
        required: false
      },
      /** Array of videos to include in the video source. */
      videos: {
        type: Array,
        required: false,
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
        validator: value => {
          return value.hasOwnProperty('label') && value.hasOwnProperty('src') && value.hasOwnProperty('srclang')
        }
      },
      /** Boolean for whether to put crossorigin attribute on the video element. */
      crossorigin: {
        type: Boolean,
        required: false
      }
    },
    data () {
      return {
        player: {}
      }
    },
    mounted () {
      if (this.$slots.default) {
        this.player = plyr.setup(document.getElementById(`plyr-video-container-${this.idNumber}`).childNodes[0],
          this.options)[0]
      } else {
        this.player = plyr.setup(document.getElementById(`js-player-video-${this.idNumber}`), this.options)[0]
      }
    },
    beforeDestroy () {
      this.player.destroy()
    },
    computed: {
      idNumber () {
        return Math.floor(Math.random() * (100000 - 1)) + 1
      }
    }
  }
</script>
