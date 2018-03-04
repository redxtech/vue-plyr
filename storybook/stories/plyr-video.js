import Vue from 'vue'

import { storiesOf } from '@storybook/vue'

import PlyrVideo from '../../src/plyr-video.vue'

storiesOf('PlyrVideo', module).
  add('Component', () => ({
    components: { PlyrVideo },
    template: `<div style="width:1200px;height:675px">
      <plyr-video
        poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg?v1"
        :videos="videos"
        :subtitles="subtitles"
        :crossorigin="true"
      />
    </div>`,
    data () {
      return {
        videos: [
          {
            src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.mp4',
            format: 'mp4'
          },
          {
            src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.webm',
            format: 'webm'
          }
        ],
        subtitles: [
          {
            label: 'English Subs',
            src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt',
            srclang: 'en',
            default: true
          }]
      }
    }
  }))