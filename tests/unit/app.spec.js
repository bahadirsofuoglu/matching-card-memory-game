import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

const wrapper = shallowMount(App, {})
const firstCard = { icon: 'coffee', flipped: false }
const secondCard = { icon: 'tea', flipped: false }

describe('Card Component Tests', () => {
  describe('Functions Test', () => {
    it('toogleCard should change some values', async () => {
      await wrapper.vm.toggleCard(firstCard)

      expect(wrapper.vm.clickCount).toBe(1)
      expect(firstCard.flipped).toBe(true)
      /*  expect(wrapper.vm.firstSelectedCard).toEqual({
        icon: 'coffee',
        flipped: false
      }) */
      expect(wrapper.vm.firstCardSelected).toBe(true)
    })

    it('matchCards should change some values', async () => {
      /*   await wrapper.vm.toggleCard(firstCard) */
      await wrapper.vm.matchCards(secondCard)

      expect(wrapper.vm.clickCount).toBe(2)
      expect(secondCard.flipped).toBe(true)

      expect(wrapper.vm.firstCardSelected).toBe(false)
      window.setTimeout(() => {
        expect(wrapper.vm.clickCount).toBe(0)
      }, 1000)
      window.setTimeout(() => {
        expect(wrapper.vm.calculateScore).toHaveBeenCalled()
      }, 1000)
    })
  })
})
