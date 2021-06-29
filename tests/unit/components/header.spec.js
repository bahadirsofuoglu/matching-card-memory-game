import { shallowMount } from '@vue/test-utils'
import Header from '@/components/Header.vue'

const wrapper = shallowMount(Header, {
  propsData: {
    level: 2,
    score: null,
    lives: 15,
    highScoreData: {
      name: 'test',
      level: 4,
      score: 30
    }
  }
})

describe('Card Component Tests', () => {
  describe('Computed test', () => {
    it('if props score equal null scoreData should be null', async () => {
      expect(wrapper.vm.scoreData).toBe(null)
    })

    it('if props score not equal null scoreData should be string', async () => {
      await wrapper.setProps({ score: 10 })
      expect(wrapper.vm.scoreData).toBe(`- Score: 10`)
    })
  })
})
