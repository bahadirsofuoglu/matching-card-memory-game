import { shallowMount } from '@vue/test-utils'
import Card from '@/components/Card.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)

const wrapper = shallowMount(Card, {
  global: {
    stubs: { FontAwesomeIcon }
  },
  propsData: {
    card: {}
  }
})

describe('Card Component Tests', () => {
  describe('Computed test', () => {
    it('computed value flipCardClass should change with card.flipped(true)', async () => {
      await wrapper.setProps({ card: { icon: 'coffee', flipped: true } })
      expect(wrapper.vm.flipCardClass).toBe('flipCard bg-black')
    })
    it('computed value flipCardClass should change with card.flipped(false)', async () => {
      await wrapper.setProps({ card: { icon: 'coffee', flipped: false } })
      expect(wrapper.vm.flipCardClass).toBe('flipCard')
    })
  })

  describe('Emit test', () => {
    it('click should trigger after callback funtion', async () => {
      wrapper.vm.callback()
      await wrapper.vm.$nextTick()
      expect(wrapper.emitted().click).toBeTruthy()
    })
  })
})
