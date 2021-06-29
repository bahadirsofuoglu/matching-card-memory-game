import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

const wrapper = shallowMount(App, {})

describe('Card Component Tests', () => {
  let firstCard
  let secondCard
  beforeEach(() => {
    firstCard = { icon: 'coffee', flipped: false }
    secondCard = { icon: 'tea', flipped: false }
  })
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
    describe('Functions Test', () => {
      it('Some values should be changed with matchCards function (if state firs-second card icon not match)', async () => {
        await wrapper.vm.matchCards(secondCard)

        expect(wrapper.vm.clickCount).toBe(2)
        expect(secondCard.flipped).toBe(true)
        window.setTimeout(() => {
          expect(secondCard.flipped).toBe(false)
          expect(wrapper.vm.firstSelectedCard).toBe(false)
          expect(wrapper.vm.lives).toBe(14)
        }, 1000)
        expect(wrapper.vm.firstCardSelected).toBe(false)
        window.setTimeout(() => {
          expect(wrapper.vm.clickCount).toBe(0)
        }, 1000)
        window.setTimeout(() => {
          expect(wrapper.vm.calculateScore).toHaveBeenCalled()
        }, 1000)
      })

      it('lives should not be changed if first and second cards icons not matched', async () => {
        secondCard.icon = 'coffee'
        wrapper.vm.firstSelectedCard = firstCard
        await wrapper.vm.matchCards(secondCard)

        expect(wrapper.vm.lives).toEqual(15)
      })

      /*  it('lives should not be changed if first and second cards icons not matched', async () => {
        console.log(wrapper.vm.cards)
        secondCard.icon = 'coffee'
        wrapper.vm.firstSelectedCard = firstCard
        await wrapper.vm.matchCards(secondCard)

        expect(wrapper.vm.lives).toEqual(15)
      }) */

      /*   it('lives should not be changed if first and second cards icons not matched', async () => {
        wrapper.vm.lives = 0
        const spy = jest.spyOn(checkHighScoreAndRestartGame, 'doThing')

        expect(spy).toBeCalled()
      }) */
    })
  })
})
