<template>
  <div class="flashcard-list" @click="callback">
    <div :class="flipCardClass">
      <font-awesome-icon
        v-if="card.flipped"
        v-bind:key="card.flipped"
        :icon="card.icon"
      />
    </div>
  </div>
</template>
<script>
import { computed } from 'vue'
export default {
  props: {
    card: {
      type: Object
    }
  },
  emits: ['click'],
  setup (props, { emit }) {
    const flipCardClass = computed(() => {
      if (props.card.flipped) {
        return 'flipCard bg-black'
      }
      return 'flipCard'
    })

    const callback = e => {
      emit('click', e)
    }
    return { flipCardClass, callback }
  }
}
</script>
<style>
.svg-inline--fa {
  font-size: 2.4em;
}

.flipCard {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 60px;
  min-height: 60px;

  padding: 40px 20px;
  border-radius: 7px;
  margin: 10px;

  background-color: #4b1072;
  line-height: 27px;
  cursor: pointer;
  -webkit-box-shadow: 9px 10px 22px -8px rgba(209, 193, 209, 0.5);
  -moz-box-shadow: 9px 10px 22px -8px rgba(209, 193, 209, 0.5);
  box-shadow: 9px 10px 22px -8px rgba(209, 193, 209, 0.5);
  will-change: transform;
  color: #fff;
}
.flashcard-list {
  list-style-type: none;
  padding: 10px 10px;
  transition: all 0.3s ease;
  height: 160px;
  width: 160px;
}
.flashcard-list:hover {
  transform: scale(1.1);
}
.bg-black {
  background-color: black;
}
</style>
