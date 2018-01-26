<template>
    <div class="plyr-container">
        <video :id="`js-player-${this.idNumber}`" class="video" ref="video" :poster="this.poster">
            <source v-for="(vid, index) in this.videos" :key="index" :src="vid.src" :type="`video/${vid.format}`"/>
            <track
                    v-if="this.subs" kind="captions" :label="this.subs.label"
                    :src="this.subs.src" :srclang="this.subs.srclang" default
            >
        </video>
    </div>
</template>

<script>
  import plyr from 'plyr'
  import 'plyr/dist/plyr.css'

  export default {
    name: 'vue-plyr',
    props: {
      poster: {
        type: String,
        required: true
      },
      videos: {
        type: Array,
        required: true,
        validator: value => {
          let valid = true
          value.forEach((vid) => {
            let hasProps = vid.hasOwnProperty('src') && vid.hasOwnProperty('format')
            if (!hasProps) {
              valid = false
            }
          })
          return valid
        }
      },
      subs: {
        type: Object,
        required: false,
        validator: value => {
          return value.hasOwnProperty('label') && value.hasOwnProperty('src') && value.hasOwnProperty('srclang')
        }
      }
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
