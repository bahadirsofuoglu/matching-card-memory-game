<template>
  <Header :health="health" :level="level" />
  <div class="cards-area">
    <template v-for="card in cards" :key="card.id">
      <Card
        :card="card"
        @click="firstCardSelected ? matchCards(card) : toggleCard(card)"
        :class="clickCount === 2 ? 'item disabled' : 'item'"
      />
    </template>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import Header from '@/components/Header.vue'
import { ref, onMounted } from 'vue'

import { cardsData } from './data/cards'
export default {
  components: { Card, Header },
  setup () {
    let cards = ref([])
    let level = ref(1)
    let health = ref(15)
    let clickCount = ref(0)
    let firstCardSelected = ref(false)
    let firstSelectedCard = {}

    onMounted(async () => {
      await cardsMutateAndSuffle()
    })

    const toggleCard = firstCard => {
      firstCard.flipped = true
      clickCount.value++
      firstSelectedCard = firstCard
      firstCardSelected.value = true
    }

    const matchCards = async secondCard => {
      secondCard.flipped = true
      clickCount.value++
      if (secondCard.icon !== firstSelectedCard.icon) {
        window.setTimeout(() => {
          secondCard.flipped = false
          firstSelectedCard.flipped = false
          health.value--
        }, 1000)
      }
      firstCardSelected.value = false
      if (!cards.value.some(x => x.flipped === false)) {
        level.value++
        await cardsMutateAndSuffle()
      }
      window.setTimeout(() => {
        clickCount.value = 0
      }, 1000)
    }

    const cardsMutateAndSuffle = () => {
      cards.value = cardsData
        .slice(0, level.value * 4)
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

    return {
      cards,
      firstCardSelected,
      clickCount,
      level,
      health,
      toggleCard,
      matchCards
    }
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
.disabled {
  pointer-events: none;
}
</style>
