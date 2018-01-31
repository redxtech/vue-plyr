import { mount } from '@vue/test-utils'
import expect from 'expect'
import PlyrVideoSlot from '../../src/plyr-video-slot.vue'

const mountWithProps = (component, props) => {
  return mount(component, { propsData: props })
}

describe('PlyrVideoSlot (props)', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mountWithProps(PlyrVideoSlot, {
      poster: 'poster.png', videos: [{ src: 'video.mp4', format: 'mp4' }]
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('contains video element', () => {
    expect(wrapper.contains('video')).toBe(true)
  })

  it('contains source', () => {
    expect(wrapper.find('video').contains('source')).toBe(true)
  })

  it('has proper source data', () => {
    const source = wrapper.find('video').find('source')
    expect(source.attributes().src).toBe('video.mp4')
    expect(source.attributes().type).toBe('video/mp4')
  })

  it('contains multiple sources if passed', () => {
    wrapper.setProps({
      videos: [
        { src: 'video.mp4', format: 'mp4' },
        { src: 'video.ogg', format: 'ogg' },
        { src: 'video.webm', format: 'webm' }
      ]
    })
    const sources = wrapper.find('video').findAll('source')
    expect(sources.length).toBe(3)
  })

  it('has proper source data with multiple sources', () => {
    wrapper.setProps({
      videos: [
        { src: 'video.mp4', format: 'mp4' },
        { src: 'video.ogg', format: 'ogg' },
        { src: 'video.webm', format: 'webm' }
      ]
    })
    const sources = wrapper.find('video').findAll('source')
    expect(sources.at(0).attributes().src).toBe('video.mp4')
    expect(sources.at(0).attributes().type).toBe('video/mp4')
    expect(sources.at(1).attributes().src).toBe('video.ogg')
    expect(sources.at(1).attributes().type).toBe('video/ogg')
    expect(sources.at(2).attributes().src).toBe('video.webm')
    expect(sources.at(2).attributes().type).toBe('video/webm')
  })

  it('contains track when subtitles passed', () => {
    wrapper.setProps({
      subtitles: {
        label: 'English Subs',
        src: 'subtitles.vtt',
        srclang: 'en'
      }
    })
    expect(wrapper.find('video').contains('track')).toBe(true)
  })

  it('has proper track data', () => {
    wrapper.setProps({
      subtitles: {
        label: 'English Subs',
        src: 'subtitles.vtt',
        srclang: 'en'
      }
    })
    const track = wrapper.find('video').find('track')
    expect(track.attributes().label).toBe('English Subs')
    expect(track.attributes().src).toBe('subtitles.vtt')
    expect(track.attributes().srclang).toBe('en')
  })

  it('has crossorigin when passed', () => {
    wrapper.setProps({
      crossorigin: true
    })
    expect(wrapper.find('video').attributes().crossorigin).toBe('true')
  })
})

describe('PlyrVideoSlot (slot)', () => {
  let wrapper

  beforeEach(() => {
    // noinspection HtmlUnknownTarget
    wrapper = mount(PlyrVideoSlot, {
      slots: {
        default: '<video><source src="video.mp4" type="video/mp4">' +
        '<source src="video.webm" type="video/webm">' +
        '<track kind="captions" label="English Subs"' +
        ' src="subtitles.vtt" srclang="en" default>' +
        '</video>'
      }
    })
  })

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  it('contains video element', () => {
    expect(wrapper.contains('video')).toBe(true)
  })

  it('contains source', () => {
    expect(wrapper.find('video').contains('source')).toBe(true)
  })

  it('has proper source data', () => {
    const source = wrapper.find('video').find('source')
    expect(source.attributes().src).toBe('video.mp4')
    expect(source.attributes().type).toBe('video/mp4')
  })

  it('has proper track data', () => {
    wrapper.setProps({
      subtitles: {
        label: 'English Subs',
        src: 'subtitles.vtt',
        srclang: 'en'
      }
    })
    const track = wrapper.find('video').find('track')
    expect(track.attributes().label).toBe('English Subs')
    expect(track.attributes().src).toBe('subtitles.vtt')
    expect(track.attributes().srclang).toBe('en')
  })
})
