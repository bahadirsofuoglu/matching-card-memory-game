<template>
  <Header />
  <div class="cards-area">
    <template v-for="card in cards" :key="card.front">
      <Card :card="card" @click="toggleCard(card)" />
    </template>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import Header from '@/components/Header.vue'
import { ref, onMounted } from 'vue'

import { cardsData } from './data'
export default {
  components: { Card, Header },
  setup () {
    let cards = ref([])
    let level = 1
    onMounted(() => {
      console.log(cardsData.length)
      cards = cardsData.slice(0, level)
      console.log(cards)
    })
    const toggleCard = card => {
      card.flipped = !card.flipped
    }
    return { cards, toggleCard }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

html,
body {
  height: 100vh;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  background-color: #d4d4db;
  overflow: hidden;
}
.cards-area {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
}
</style>
