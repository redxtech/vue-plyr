<template>
  <div>
    <slot/>
  </div>
</template>

<script>
  // import plyr from 'plyr'
  import 'plyr/dist/plyr.css'

  export default {
    name: 'Plyr',
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
      }
    },
    data () {
      return {
        player: {}
      }
    },
    computed: {
    },
    mounted () {
      const plyr = require('plyr')
      // noinspection JSPotentiallyInvalidConstructorUsage
      this.player = new plyr(this.$el.firstChild,
        this.options)
      this.emit.forEach(element => {
        this.player.on(element, this.emitPlayerEvent)
      })
    },
    beforeDestroy () {
      this.player.destroy()
    },
    methods: {
      emitPlayerEvent (event) {
        this.$emit(event.type, event)
      }
    }
  }
</script>
