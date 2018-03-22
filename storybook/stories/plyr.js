import Vue from 'vue'

import { storiesOf } from '@storybook/vue'

import Plyr from '../../src/plyr.vue'

storiesOf('Plyr', module).
  add('Video', () => ({
    components: {Plyr},
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
    components: {Plyr},
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
  add('Vimeo (div)', () => ({
    components: {Plyr},
    template: `<div style="width:1200px;height:675px"><plyr>
      <div data-plyr-provider="vimeo" data-plyr-embed-id="147865858"></div>
    </plyr></div>`
  })).
  add('Vimeo (PE)', () => ({
    components: {Plyr},
    template: `<div style="width:1200px;height:675px"><plyr>
      <div class="plyr__video-embed">
    <iframe
      src="https://player.vimeo.com/video/147865858"
      allowfullscreen allowtransparency allow="autoplay"></iframe></div></plyr></div>`
  })).
  add('Youtube (div)', () => ({
    components: {Plyr},
    template: `<div style="width:1200px;height:675px"><plyr>
      <div data-plyr-provider="youtube" data-plyr-embed-id="bTqVqk7FSmY"></div>
    </plyr></div>`
  })).
  add('Youtube (PE)', () => ({
    components: {Plyr},
    template: `<div style="width:1200px;height:675px"><plyr>
      <div class="plyr__video-embed">
      <iframe src="https://www.youtube.com/embed/bTqVqk7FSmY" allowfullscreen allowtransparency allow="autoplay"></iframe></div>
    </plyr></div>`
  }))