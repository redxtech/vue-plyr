import { mount } from '@vue/test-utils'
import expect from 'expect'
import PlyrVimeo from '../../src/plyr-vimeo.vue'

const mountWithProps = (component, props) => {
  return mount(component, { propsData: props })
}

describe('PlyrVimeo', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithProps(PlyrVimeo, {
      id: '147865858'
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('contains div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })

  it('has proper data-type data', () => {
    const source = wrapper.find('div')
    expect(source.element.getAttribute('data-type')).toBe('vimeo')
  })

  it('has proper data-video-id data', () => {
    const source = wrapper.find('div')
    expect(source.element.getAttribute('data-video-id')).toBe('147865858')
  })
})