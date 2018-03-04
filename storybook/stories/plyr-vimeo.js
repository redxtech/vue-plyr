import Vue from 'vue'

import { storiesOf } from '@storybook/vue'

import PlyrVimeo from '../../src/plyr-vimeo.vue'

storiesOf('PlyrVimeo', module).
  add('Component', () => ({
    components: { PlyrVimeo },
    template: `<div style="width:1200px;height:675px">
      <plyr-vimeo
        id="147865858"
      />
    </div>`
  }))