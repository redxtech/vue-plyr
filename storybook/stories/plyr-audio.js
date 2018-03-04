import Vue from 'vue'

import { storiesOf } from '@storybook/vue'

import PlyrAudio from '../../src/plyr-audio.vue'

storiesOf('PlyrAudio', module).
  add('Component', () => ({
    components: { PlyrAudio },
    template: `<div style="width:1200px">
      <plyr-audio
        :tracks="tracks"
      />
    </div>`,
    data () {
      return {
        tracks: [
          { src: 'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3', format: 'mp3' },
          { src: 'https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.ogg', format: 'ogg' }
        ]
      }
    }
  }))