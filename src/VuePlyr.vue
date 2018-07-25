<template>
  <div>
    <slot />
  </div>
</template>

<script>
  import Plyr from 'plyr'
  import 'plyr/dist/plyr.css'

  export default {
    name: 'vue-plyr',
    props: {
      /** Options object for plyr config. */
      options: {
        type: Object,
        required: false,
        default () {
          return {
            hideYouTubeDOMError: true
          }
        }
      },
      /** Array of events to emit from the plyr object */
      emit: {
        type: Array,
        required: false,
        default () { return [] }
      }
    },
    data () {
      return {
        player: {}
      }
    },
    mounted () {
      this.player = new Plyr(this.$el.firstChild, this.options)
      this.$emit('player', this.player)
      this.emit.forEach(element => {
        this.player.on(element, this.emitPlayerEvent)
      })
    },
    beforeDestroy () {
      try {
        this.player.destroy()
      } catch (e) {
        if (!(this.options.hideYouTubeDOMError && e.message === 'The YouTube player is not attached to the DOM.')) {
          console.error(e)
        }
      }
    },
    methods: {
      emitPlayerEvent (event) {
        this.$emit(event.type, event)
      }
    }
  }
</script>
