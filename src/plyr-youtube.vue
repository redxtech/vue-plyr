<template>
    <div :class="`js-player-yt-${this.idNumber}`" data-type="youtube" :data-video-id="this.id"></div>
</template>

<script>
  import plyr from 'plyr'
  import 'plyr/dist/plyr.css'

  export default {
    name: 'plyr-youtube',
    props: {
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
      this.player = plyr.setup(document.getElementById(`js-player-yt-${this.idNumber}`))[0]
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