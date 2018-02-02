import { mount } from '@vue/test-utils'
import expect from 'expect'
import PlyrAudioSlot from '../../src/plyr-audio-slot.vue'

const mountWithProps = (component, props) => {
  return mount(component, { propsData: props })
}

describe('PlyrAudioSlot (props)', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithProps(PlyrAudioSlot, {
      tracks: [{ src: 'audio.mp3', format: 'mp3' }]
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('contains audio element', () => {
    expect(wrapper.contains('audio')).toBe(true)
  })

  it('contains source', () => {
    expect(wrapper.find('audio').contains('source')).toBe(true)
  })

  it('has proper source data', () => {
    const source = wrapper.find('audio').find('source')
    expect(source.attributes().src).toBe('audio.mp3')
    expect(source.attributes().type).toBe('audio/mp3')
  })

  it('contains multiple sources if passed', () => {
    wrapper.setProps({
      tracks: [
        { src: 'audio.mp3', format: 'mp3' },
        { src: 'audio.ogg', format: 'ogg' },
        { src: 'audio.wav', format: 'wav' }
      ]
    })
    const sources = wrapper.find('audio').findAll('source')
    expect(sources.length).toBe(3)
  })

  it('has proper source data with multiple sources', () => {
    wrapper.setProps({
      tracks: [
        { src: 'audio.mp3', format: 'mp3' },
        { src: 'audio.ogg', format: 'ogg' },
        { src: 'audio.wav', format: 'wav' }
      ]
    })
    const sources = wrapper.find('audio').findAll('source')
    expect(sources.at(0).attributes().src).toBe('audio.mp3')
    expect(sources.at(0).attributes().type).toBe('audio/mp3')
    expect(sources.at(1).attributes().src).toBe('audio.ogg')
    expect(sources.at(1).attributes().type).toBe('audio/ogg')
    expect(sources.at(2).attributes().src).toBe('audio.wav')
    expect(sources.at(2).attributes().type).toBe('audio/wav')
  })
})

describe('PlyrAudioSlot (slot)', () => {
  let wrapper

  beforeEach(() => {
    // noinspection HtmlUnknownTarget
    wrapper = mount(PlyrAudioSlot, {
      slots: {
        default: '<audio><source src="audio.mp3" type="audio/mp3">' +
        '<source src="audio.ogg" type="audio/ogg">' +
        '</audio>'
      }
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('contains audio element', () => {
    expect(wrapper.contains('audio')).toBe(true)
  })

  it('contains source', () => {
    expect(wrapper.find('audio').contains('source')).toBe(true)
  })

  it('has proper source data', () => {
    const source = wrapper.find('audio').find('source')
    expect(source.attributes().src).toBe('audio.mp3')
    expect(source.attributes().type).toBe('audio/mp3')
  })
})
