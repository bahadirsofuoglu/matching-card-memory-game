<template>
  <div class="header">
    <p>Level: {{ level }} {{ scoreData }}</p>
    <p>Health: {{ health }}</p>
    <p>
      High Score: {{ highScoreData.name }}({{ highScoreData.level }} level) -
      Score: {{ highScoreData.score }}
    </p>
  </div>
</template>
<script>
import { computed } from 'vue'
export default {
  props: {
    level: {
      type: Number
    },
    score: {
      type: Number
    },
    health: {
      type: Number
    },
    highScoreData: {
      type: Object
    }
  },

  setup (props) {
    const scoreData = computed(() => {
      if (props.score !== null) {
        return `- Score: ${props.score}`
      }
      return null
    })
    return {
      scoreData
    }
  }
}
</script>
<style>
.header {
  position: absolute;
  z-index: 20000;

  display: flex;
  justify-content: space-between;
  height: 50px;
  width: 100%;
  background: black;
  color: #fff;
}
header > p {
  position: absolute;
}
p:last-child {
  margin-right: 100px;
}
p:first-child {
  margin-left: 100px;
}
@media screen and (max-width: 634px) {
  .header {
    position: absolute;
    height: 80px;
    width: 100vw;
    flex-flow: column;
    align-items: center;
    font-size: 10px;
    line-height: 0.001;
  }
  .header > p:last-child {
    margin-right: 0;
  }
  .header > p:first-child {
    margin-left: 0;
  }
}
</style>
