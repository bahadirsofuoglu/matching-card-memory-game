<template>
  <div class="flashcard-list" @click="callback">
    <transition name="flip">
      <div
        class="flipCard"
        :style="card.flipped ? '' : 'background-color:black'"
      >
        <font-awesome-icon
          v-bind:key="card.flipped"
          :icon="card.flipped ? '' : 'coffee'"
        />
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    card: {
      type: Object
    }
  },
  emits: ['click'],
  setup (props, { emit }) {
    const callback = e => {
      emit('click', e)
    }
    return { callback }
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

  width: 200px;
  height: 205px;
  padding: 40px 20px;
  border-radius: 7px;
  margin: 10px;

  background-color: #a17de9;
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
}
.flashcard-list:hover {
  transform: scale(1.1);
}

flip,
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
