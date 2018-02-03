import { mount } from '@vue/test-utils'
import expect from 'expect'
import Plyr from '../../src/plyr.vue'

describe('Plyr (video)', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Plyr)
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
