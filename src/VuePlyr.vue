<template>
  <div>
    <slot />
  </div>
</template>

<script>
  import Plyr from 'plyr'

  export default {
    name: 'VuePlyr',
    props: {
      /** Options object for plyr config. **/
      options: {
        type: Object,
        required: false,
        default () {
          return {}
        }
      },
      /** Array of events to emit from the plyr object **/
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
    computed: {
      opts () {
        const options = this.options
        if (!this.options.hasOwnProperty('hideYouTubeDOMError')) {
          options.hideYouTubeDOMError = true
        }
        return options
      }
    },
    mounted () {
      this.player = new Plyr(this.$el.firstChild, this.opts)
      this.emit.forEach(element => {
        this.player.on(element, this.emitPlayerEvent)
      })
    },
    beforeDestroy () {
      try {
        this.player.destroy()
      } catch (e) {
        if (!(this.opts.hideYouTubeDOMError && e.message === 'The YouTube player is not attached to the DOM.')) {
          // eslint-disable-next-line no-console
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

<style src="../node_modules/plyr/dist/plyr.css"></style>
