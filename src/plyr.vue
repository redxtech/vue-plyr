<template>
    <div :id="`plyr-container-${this.idNumber}`">
        <slot/>
    </div>
</template>

<script>
  import plyr from 'plyr'
  import 'plyr/dist/plyr.css'

  export default {
    name: 'plyr',
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
    mounted () {
      this.player = plyr.setup(document.getElementById(`plyr-container-${this.idNumber}`),
        this.options)[0]
      this.emit.forEach(element => {
        this.player.on(element, this.emitPlayerEvent)
      })
    },
    methods: {
      emitPlayerEvent() {
        this.$emit(event.type, event)
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
