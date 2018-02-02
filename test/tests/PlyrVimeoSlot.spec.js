import { mount } from '@vue/test-utils'
import expect from 'expect'
import PlyrVimeoSlot from '../../src/plyr-vimeo-slot.vue'

const mountWithProps = (component, props) => {
  return mount(component, { propsData: props })
}

describe('PlyrVimeoSlot (props)', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mountWithProps(PlyrVimeoSlot, {
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
    const source = wrapper.find(`#js-player-vimeo-${wrapper.vm.idNumber}`)
    expect(source.element.dataset.type).toBe('vimeo')
  })

  it('has proper api data', () => {
    const source = wrapper.find(`#js-player-vimeo-${wrapper.vm.idNumber}`)
    expect(source.element.dataset.videoId).toBe('147865858')
  })
})

describe('PlyrVimeoSlot (slot)', () => {
  let wrapper

  beforeEach(() => {
    // noinspection HtmlUnknownTarget
    wrapper = mount(PlyrVimeoSlot, {
      slots: {
        default: '<div data-type="vimeo" data-video-id="147865858"></div>'
      }
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('contains div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })

  it('has proper data-type data', () => {
    const source = wrapper.find(`#plyr-vimeo-container-${wrapper.vm.idNumber}`).find('div[data-type]')
    expect(source.element.dataset.type).toBe('vimeo')
  })

  it('has proper api data', () => {
    const source = wrapper.find(`#plyr-vimeo-container-${wrapper.vm.idNumber}`).find('div[data-type]')
    expect(source.element.dataset.videoId).toBe('147865858')
  })
})
