import { mount } from '@vue/test-utils'
import expect from 'expect'
import PlyrYoutubeSlot from '../../src/plyr-youtube-slot.vue'

const mountWithProps = (component, props) => {
  return mount(component, { propsData: props })
}

describe('PlyrYoutubeSlot (props)', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mountWithProps(PlyrYoutubeSlot, {
      id: 'bTqVqk7FSmY'
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('contains div', () => {
    expect(wrapper.contains('div')).toBe(true)
  })

  it('has proper data-type data', () => {
    const source = wrapper.find(`#js-player-youtube-${wrapper.vm.idNumber}`)
    expect(source.element.dataset.type).toBe('youtube')
  })

  it('has proper api data', () => {
    const source = wrapper.find(`#js-player-youtube-${wrapper.vm.idNumber}`)
    expect(source.element.dataset.videoId).toBe('bTqVqk7FSmY')
  })
})

describe('PlyrYoutubeSlot (slot)', () => {
  let wrapper

  beforeEach(() => {
    // noinspection HtmlUnknownTarget
    wrapper = mount(PlyrYoutubeSlot, {
      slots: {
        default: '<div data-type="youtube" data-video-id="bTqVqk7FSmY"></div>'
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
    const source = wrapper.find(`#plyr-youtube-container-${wrapper.vm.idNumber}`).find('div[data-type]')
    expect(source.element.dataset.type).toBe('youtube')
  })

  it('has proper api data', () => {
    const source = wrapper.find(`#plyr-youtube-container-${wrapper.vm.idNumber}`).find('div[data-type]')
    expect(source.element.dataset.videoId).toBe('bTqVqk7FSmY')
  })
})
