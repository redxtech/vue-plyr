import { shallowMount } from '@vue/test-utils'
import VuePlyr from '@/VuePlyr.vue'

describe('VuePlyr.vue', () => {
  it('Is a vue instance.', () => {
    const wrapper = shallowMount(VuePlyr)
    expect(wrapper.isVueInstance()).toBeTruthy()
    // expect(wrapper.text()).toMatch(op)
  })
})
