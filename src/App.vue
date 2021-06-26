<template>
  <div v-for="card in cards" :key="card.front">
    <Card :card="card" @click="toggleCard(card)" />
  </div>
</template>

<script>
import { ref } from 'vue'
import Card from '@/components/Card.vue'
export default {
  components: { Card },
  setup () {
    const cards = ref([
      {
        front: 'asdas',
        back: '121',
        form: 'asdfas',
        flipped: false
      },
      {
        front: 'asdas',
        back: '121',
        form: 'asdfas',
        flipped: false
      },
      {
        front: 'asdas',
        back: '121',
        form: 'asdfas',
        flipped: false
      },
      {
        front: 'asdas',
        back: '121',
        form: 'asdfas',
        flipped: false
      },
      {
        front: 'asdas',
        back: '121',
        form: 'asdfas',
        flipped: false
      }
    ])

    const toggleCard = card => {
      card.flipped = !card.flipped
      console.log(card)
    }
    return { cards, toggleCard }
  }
}
</script>
