<template>
    <audio :id="`js-player-audio-${this.idNumber}`" ref="audio">
        <source v-for="(track, index) in this.tracks" :key="index" :src="track.src" :type="`audio/${track.format}`" />
    </audio>
</template>

<script>
  import plyr from 'plyr'
  import 'plyr/dist/plyr.css'

  export default {
    name: 'plyr-audio',
    props: {
      /** Options object for plyr config. */
      options: {
        type: Object,
        required: false,
        default () { return {} }
      },
      /** Array of events to emit from the plyr object */
      emit: {
          type: Array,
          required: false,
          default () { return [] }
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
    mounted () {
      this.player = plyr.setup(document.getElementById(`js-player-audio-${this.idNumber}`), this.options)[0]
      this.emit.forEach(element => {
        this.player.on(element, this.emitPlayerEvent)
      })
    },
    methods: {
      emitPlayerEvent() {
        this.$emit(event.type, event)
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
