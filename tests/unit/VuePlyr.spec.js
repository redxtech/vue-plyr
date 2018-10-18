import { shallowMount } from '@vue/test-utils'
import VuePlyr from '@/VuePlyr.vue'

// import Audio from '@/demo/components/Audio.vue'
import Video from '@/demo/components/Video.vue'

describe('VuePlyr.vue [Video]', () => {
  it('Is a vue instance.', () => {
    const wrapper = shallowMount(VuePlyr)
    expect(wrapper.isVueInstance()).toBe(true)
  })

  it('Emits player on mount.', () => {
    const wrapper = shallowMount(VuePlyr, {
      slots: {
        default: Video
      }
    })
    expect(wrapper.emitted().player.length).toBe(1)
  })

  it('Passes options prop properly.', async () => {
    const speed = {selected: 0.5, options: [0.5, 0.75, 1, 1.5, 2]}
    const settings = ['quality', 'speed']
    const volume = 0.75
    const loop = {active: true}

    const wrapper = shallowMount(VuePlyr, {
      propsData: {
        options: {
          speed,
          settings,
          volume,
          loop
        }
      },
      slots: {
        default: Video
      }
    })
    const player = await wrapper.emitted().player[0][0]
    expect(player.config.speed.selected).toBe(speed.selected)
    expect(player.config.speed.options).toBe(speed.options)
    expect(player.config.settings).toBe(settings)
    expect(player.config.volume).toBe(volume)
    expect(player.config.loop.active).toBe(loop.active)
  })

  it('Emits events when passed.', () => {
    const wrapper = shallowMount(VuePlyr, {
      propsData: {
        emit: ['ready']
      },
      slots: {
        default: Video
      }
    })
    setTimeout(() => {
      console.log(wrapper.emitted().ready)
      expect(wrapper.emitted().ready.length).toBe(1)
      done()
    }, 5000)
  })
})
