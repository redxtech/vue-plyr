import Vue from 'vue'

import { storiesOf } from '@storybook/vue'

import Plyr from '../../src/plyr.vue'

storiesOf('Plyr', module).
  add('Video', () => ({
    components: { Plyr },
    template: `<div style="width:1200px;height:675px"><plyr>
      <video crossorigin
        poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg?v1"
      >
        <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.mp4">
        <source src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.webm">
        <track
          kind="captions" label="English" srclang="en"
          src="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt" default=""
        >
      </video>
    </plyr></div>`
  })).
  add('Audio', () => ({
    components: { Plyr },
    template: `<div style="width:1200px"><plyr>
      <audio crossorigin>
        <source
          src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.mp3"
          type="audio/mp3"
        >
        <source
          src="https://cdn.plyr.io/static/demo/Kishi_Bashi_-_It_All_Began_With_a_Burst.ogg"
          type="audio/ogg"
        >
      </audio>
    </plyr></div>`
  })).
  add('Vimeo', () => ({
    components: { Plyr },
    template: `<div style="width:1200px;height:675px"><plyr>
      <div data-type="vimeo" data-video-id="147865858"></div>
    </plyr></div>`
  })).
  add('Youtube', () => ({
    components: { Plyr },
    template: `<div style="width:1200px;height:675px"><plyr>
      <div data-type="youtube" data-video-id="bTqVqk7FSmY"></div>
    </plyr></div>`
  }))