<template>
    <div :id="`plyr-vimeo-container-${this.idNumber}`">
        <slot>
            <div :id="`js-player-vimeo-${this.idNumber}`" data-type="vimeo" :data-video-id="this.id"></div>
        </slot>
    </div>
</template>

<script>
  import plyr from 'plyr'
  import 'plyr/dist/plyr.css'

  export default {
    name: 'plyr-vimeo-slot',
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
        required: false
      }
    },
    data () {
      return {
        player: {}
      }
    },
    mounted () {
      if (this.$slots.$default) {
        this.player = plyr.setup(document.getElementById(`plyr-vimeo-container-${this.idNumber}`).childNodes[0],
          this.options)[0]
      } else {
        this.player = plyr.setup(document.getElementById(`js-player-vimeo-${this.idNumber}`), this.options)[0]
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
