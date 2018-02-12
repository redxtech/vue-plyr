<template>
  <audio
    :id="`js-player-audio-${idNumber}`"
    ref="audio"
  >
    <source
      v-for="(track, index) in tracks"
      :key="index"
      :src="track.src"
      :type="`audio/${track.format}`"
    >
  </audio>
</template>

<script>
  import plyr from 'plyr'
  import 'plyr/dist/plyr.css'

  export default {
    name: 'PlyrAudio',
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
      this.player = plyr.setup(document.getElementById(`js-player-audio-${this.idNumber}`), this.options)[0]
    },
    beforeDestroy () {
      this.player.destroy()
    }
  }
</script>
