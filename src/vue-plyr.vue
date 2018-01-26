<template>
  <div class="plyr-container">
    <video :id="`js-player-${this.idNumber}`" class="video" ref="video" :poster="this.poster">
      <source :src="this.mp4"/>
    </video>
  </div>
</template>

<script>
  import plyr from 'plyr'
  import 'plyr/dist/plyr.css'

  export default {
    name: 'vue-plyr',
    props: {
      poster: { type: String, required: true },
      mp4: { type: String, required: true },
    },
    data () {
      return {
        player: {}
      }
    },
    mounted () {
      this.player = plyr.setup(document.getElementById(`js-player-${this.idNumber}`))[0]
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
