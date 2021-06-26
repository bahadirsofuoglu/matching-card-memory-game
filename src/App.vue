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
import { cardsData } from './data'
export default {
  components: { Card },
  setup () {
    const cards = ref(cardsData)

    const toggleCard = card => {
      card.flipped = !card.flipped
      console.log(card)
    }
    return { cards, toggleCard }
  }
}
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
}
.cards-area {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
</style>
