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
import { ref } from 'vue'

import { cardsData } from './data'
export default {
  components: { Card, Header },
  setup () {
    const cards = ref(cardsData)

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
