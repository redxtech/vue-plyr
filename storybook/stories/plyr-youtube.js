import Vue from 'vue'

import { storiesOf } from '@storybook/vue'

import PlyrYoutube from '../../src/plyr-youtube.vue'

storiesOf('PlyrYoutube', module).
  add('PE', () => ({
    components: { PlyrYoutube },
    template: `<div style="width:1200px;height:675px">
      <plyr-youtube
        id="bTqVqk7FSmY"
      />
    </div>`
  })).
  add('Div', () => ({
    components: { PlyrYoutube },
    template: `<div style="width:1200px;height:675px">
      <plyr-youtube
        id="bTqVqk7FSmY"
        :pe="false"
      />
    </div>`
  }))