<template>
  <div class="header">
    <p>Level: {{ level }}</p>
    <p>Health: {{ health }}</p>
    <p>
      High Score: {{ highScoreData.name }} - {{ highScoreData.level }} level
    </p>
  </div>
</template>
<script>
export default {
  props: {
    level: {
      type: Number
    },
    health: {
      type: Number
    },
    highScoreData: {
      type: Object
    }
  },

  setup () {
    return {}
  }
}
</script>
<style>
.header {
  display: flex;
  position: absolute;
  z-index: 20000;
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
</style>
