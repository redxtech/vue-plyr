import Vue from 'vue'

import { storiesOf } from '@storybook/vue'

import PlyrVimeo from '../../src/plyr-vimeo.vue'

storiesOf('PlyrVimeo', module).
  add('PE', () => ({
    components: { PlyrVimeo },
    template: `<div style="width:1200px;height:675px">
      <plyr-vimeo
        id="147865858"
      />
    </div>`
  })).
  add('Div', () => ({
    components: { PlyrVimeo },
    template: `<div style="width:1200px;height:675px">
      <plyr-vimeo
        id="147865858"
        :pe="false"
      />
    </div>`
  }))