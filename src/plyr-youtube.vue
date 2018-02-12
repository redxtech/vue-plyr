<template>
  <div
    :id="`js-player-yt-${idNumber}`"
    data-type="youtube"
    :data-video-id="id"
  />
</template>

<script>
  import plyr from 'plyr'
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
      this.player = plyr.setup(document.getElementById(`js-player-yt-${this.idNumber}`), this.options)[0]
    },
    beforeDestroy () {
      this.player.destroy()
    }
  }
</script>
