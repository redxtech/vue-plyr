<template>
  <div
    v-if="pe"
    class="plyr__video-embed"
  >
    <iframe
      :src="`https://player.vimeo.com/video/${id}`"
      allowfullscreen allowtransparency allow="autoplay"></iframe>
  </div>
  <div v-else
       data-plyr-provider="vimeo"
       :data-plyr-embed-id="id"
  />
</template>

<script>
  // import Plyr from 'plyr'
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
      /** Array of events to emit from the plyr object */
      emit: {
        type: Array,
        required: false,
        default () { return [] }
      },
      /** Link or ID of vimeo video. */
      id: {
        type: String,
        required: true
      },
      /** Bool of whether to use progressive enhancement or not */
      pe: {
        type: Boolean,
        required: false,
        default () { return true }
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
      const Plyr = require('plyr')
      this.player = new Plyr(this.$el, this.options)
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
