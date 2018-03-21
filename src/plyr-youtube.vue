<template>
  <div
    :id="`js-player-yt-${idNumber}`"
    data-plyr-provider="youtube"
    :data-plyr-embed-id="id"
  />
</template>

<script>
  import Plyr from 'plyr'
  import 'plyr/dist/plyr.css'

  export default {
    name: 'PlyrYoutube',
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
      /** Link or ID of youtube video. */
      id: {
        type: String,
        required: true
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
      this.player = new Plyr(document.getElementById(`js-player-yt-${this.idNumber}`), this.options)
      this.emit.forEach(element => {
        this.player.on(element, this.emitPlayerEvent)
      })
    },
    beforeDestroy () {
      this.player.destroy()
    },
    methods: {
      emitPlayerEvent () {
        this.$emit(event.type, event)
      }
    }
  }
</script>
