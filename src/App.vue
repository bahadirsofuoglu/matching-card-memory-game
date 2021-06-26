<template>
  <div>
    <ul class="flashcard-list">
      <li v-for="card in cards" :key="card.front" @click="toggleCard(card)">
        <transition name="flip">
          <div class="flipCard">
            <p class="text-card">
              {{ card.flipped ? card.back : card.front }}
            </p>
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
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

<style>
.body {
  height: 100%;
}
ul {
  padding-left: 0;
  display: flex;
  flex-flow: row wrap;
}
li {
  list-style-type: none;
  padding: 10px 10px;
  transition: all 0.3s ease;
}
.flipCard {
  display: block;
  width: 200px;
  height: 205px;
  padding: 80px 50px;
  background-color: #a17de9;
  border-radius: 7px;
  margin: 5px;
  text-align: center;
  line-height: 27px;
  cursor: pointer;
  position: relative;
  -webkit-box-shadow: 9px 10px 22px -8px rgba(209, 193, 209, 0.5);
  -moz-box-shadow: 9px 10px 22px -8px rgba(209, 193, 209, 0.5);
  box-shadow: 9px 10px 22px -8px rgba(209, 193, 209, 0.5);
  will-change: transform;
}
.text-card {
  display: block;
  color: #fff;
  text-align: inherit;
  font-weight: 600;
  font-size: 15px;
}
li:hover {
  transform: scale(1.1);
}
li:nth-child(-n + 3) .flipCard {
  background-color: #e65f51;
}
li:nth-child(2n + 1) .flipCard {
  background-color: #a17de9;
}
li:nth-child(4n) .flipCard {
  background-color: #feca34;
}
li:nth-child(5n-2) .flipCard {
  background-color: #51aae5;
}
li:nth-child(4n + 4) .flipCard {
  background-color: #feca34;
}
li:nth-child(-7n + 7) .flipCard {
  background-color: #e46055;
}
.delete-card {
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px 15px;
  opacity: 0.4;
  transition: all 0.5s ease;
}
.delete-card:hover,
.error {
  opacity: 1;
  transform: rotate(360deg);
}
.flip-enter-active {
  transition: all 0.4s ease;
}
.flip-leave-active {
  display: none;
}
.flip-enter,
.flip-leave {
  transform: rotateY(180deg);
  opacity: 0;
}
.form-card {
  position: absolute;
  left: 0;
  top: 0;
  padding: 10px 15px;
  opacity: 0.8;
  transition: all 0.5s ease;
}
</style>
