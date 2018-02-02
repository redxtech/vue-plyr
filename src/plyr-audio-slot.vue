<template>
    <div :id="`plyr-audio-container-${this.idNumber}`">
        <slot>
            <audio :id="`js-player-audio-${this.idNumber}`" ref="audio">
                <source v-for="(track, index) in this.tracks" :key="index" :src="track.src" :type="`audio/${track.format}`" />
            </audio>
        </slot>
    </div>
</template>

<script>
  import plyr from 'plyr'
  import 'plyr/dist/plyr.css'

  export default {
    name: 'plyr-audio-slot',
    props: {
      /** Options object for plyr config. */
      options: {
        type: Object,
        required: false,
        default () { return {} }
      },
      /** Array of audio tracks to include in the audio source. */
      tracks: {
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
      }
    },
    data () {
      return {
        player: {}
      }
    },
    mounted () {
      if (this.$slots.$default) {
        this.player = plyr.setup(document.getElementById(`plyr-audio-container-${this.idNumber}`).childNodes[0],
          this.options)[0]
      } else {
        this.player = plyr.setup(document.getElementById(`js-player-audio-${this.idNumber}`), this.options)[0]
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
