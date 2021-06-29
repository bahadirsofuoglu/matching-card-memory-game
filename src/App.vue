<template>
  <Header
    :health="health"
    :level="level"
    :highScoreData="highScoreData"
    :score="level === highScoreData.level ? score : null"
  />
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
import { ref, onMounted, watch } from 'vue'
import Card from '@/components/Card.vue'
import Header from '@/components/Header.vue'
import { cardsData } from './data/cards'
import { getHighScore, updateHighScore } from '@/data/highScoreController'
export default {
  components: { Card, Header },
  setup () {
    let cards = ref([])
    let level = ref(4)
    let health = ref(3)
    let score = ref(0)
    let clickCount = ref(0)
    let firstCardSelected = ref(false)
    let highScoreData = ref({})
    let firstSelectedCard = {}

    onMounted(async () => {
      await cardsMutateAndSuffle()

      highScoreData.value = await getHighScore()
    })

    watch(health, currentValue => {
      if (currentValue === 0) {
        checkHighScoreAndRestartGame()
      }
    })

    const toggleCard = firstCard => {
      clickCount.value = 1
      firstCard.flipped = true
      firstSelectedCard = firstCard
      firstCardSelected.value = true
    }

    const matchCards = async secondCard => {
      clickCount.value = 2
      secondCard.flipped = true
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
      window.setTimeout(() => {
        const flippedCards = cards.value.filter(x => x.flipped === true).length
        score.value = (flippedCards / 2) * 10
      }, 1000)
    }

    const checkHighScoreAndRestartGame = async () => {
      if (level.value > highScoreData.value.level) {
        await newHighScore()
      } else if (level.value === highScoreData.value.level) {
        const flippedCards = cards.value.filter(x => x.flipped === true).length
        score.value = (flippedCards / 2) * 10

        score.value >= highScoreData.value.score
          ? await newHighScore()
          : alert('Your score is lower than high score')
      } else {
        alert('Your score is lower than high score')
      }
      window.location.reload()
    }

    const newHighScore = async () => {
      const newHighScoreName = prompt(
        'NEW HİGH SCORE !! Please enter your name'
      )
      await updateHighScore({
        level: level.value,
        score: score.value,
        name: newHighScoreName
      })
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
      highScoreData,
      score,
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
  height: 100%;
  width: 100%;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  background-color: #d4d4db;
  /*  overflow: hidden; */
}

.cards-area {
  position: relative;
  top: 80px;

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

@media screen and (min-width: 1120px) {
  .cards-area {
    height: 90vh;
    width: 100vw;
  }
}
</style>
