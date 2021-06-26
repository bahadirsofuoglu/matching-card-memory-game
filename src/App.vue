<template>
  <div class="cards-area">
    <template v-for="card in cards" :key="card.front">
      <Card :card="card" @click="toggleCard(card)" />
    </template>
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

<style>
.body {
  height: 100vh;
  width: 100vw;
}
.cards-area {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
</style>
