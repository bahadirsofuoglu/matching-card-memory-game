<template>
  <Header />
  <div class="cards-area">
    <template v-for="card in cards" :key="card.id">
      <Card :card="card" @click="toggleCard(card)" class="item" />
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
      cardsMutateAndSuffle()
    })

    const toggleCard = card => {
      card.flipped = !card.flipped
    }

    const cardsMutateAndSuffle = () => {
      cards.value = cardsData
        .slice(0, level * 4)
        .reduce(function (res, current) {
          return res.concat([current, current])
        }, [])
        .map((x, i) => {
          x = {
            id: i + 1,
            ...x
          }
          return x
        })
        .sort(() => 0.5 - Math.random())
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
  width: 100vw;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  background-color: #d4d4db;
  overflow: hidden;
}

.cards-area {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: row wrap;
  align-content: center;
}
.item {
  flex: 1 0 10%;
}
</style>
