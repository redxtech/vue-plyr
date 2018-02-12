<template>
  <div :id="`plyr-container-${idNumber}`">
    <slot/>
  </div>
</template>

<script>
  import plyr from 'plyr'
  import 'plyr/dist/plyr.css'

  export default {
    name: 'Plyr',
    props: {
      /** Options object for plyr config. */
      options: {
        type: Object,
        required: false,
        default () { return {} }
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
      this.player = plyr.setup(document.getElementById(`plyr-container-${this.idNumber}`),
        this.options)[0]
    },
    beforeDestroy () {
      this.player.destroy()
    }
  }
</script>
