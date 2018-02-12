<template>
  <div
    :id="`js-player-vimeo-${idNumber}`"
    data-type="vimeo"
    :data-video-id="id"
  />
</template>

<script>
  import plyr from 'plyr'
  import 'plyr/dist/plyr.css'

  export default {
    name: 'PlyrVimeo',
    props: {
      /** Options object for plyr config. */
      options: {
        type: Object,
        required: false,
        default () { return {} }
      },
      /** Link or ID of vimeo video. */
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
      this.player = plyr.setup(document.getElementById(`js-player-vimeo-${this.idNumber}`), this.options)[0]
    },
    beforeDestroy () {
      this.player.destroy()
    }
  }
</script>
