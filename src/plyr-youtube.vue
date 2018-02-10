<template>
    <div :id="`js-player-yt-${this.idNumber}`" data-type="youtube" :data-video-id="this.id"></div>
</template>

<script>
  import plyr from 'plyr'
  import 'plyr/dist/plyr.css'

  export default {
    name: 'plyr-youtube',
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
    mounted () {
      this.player = plyr.setup(document.getElementById(`js-player-yt-${this.idNumber}`), this.options)[0]
      this.emit.forEach(element => {
        this.player.on(element,this.emitPlayerEvent)
      })
    },
    methods: {
      emitPlayerEvent() {
        this.$emit(event.type,event)
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