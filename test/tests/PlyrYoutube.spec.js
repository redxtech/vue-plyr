import { mount } from '@vue/test-utils'
import expect from 'expect'
import PlyrYoutube from '../../src/plyr-youtube.vue'

const mountWithProps = (component, props) => {
  return mount(component, { propsData: props })
}

describe('PlyrYoutube', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithProps(PlyrYoutube, {
      id: 'bTqVqk7FSmY',
      pe: false
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('contains div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })

  it('has proper data-plyr-provider data', () => {
    const source = wrapper.find('div')
    expect(source.element.getAttribute('data-plyr-provider')).toBe('youtube')
  })

  it('has proper data-plyr-embed-id data', () => {
    const source = wrapper.find('div')
    expect(source.element.getAttribute('data-plyr-embed-id')).toBe('bTqVqk7FSmY')
  })
})