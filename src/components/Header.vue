<template>
  <div class="header">
    <p>
      level:
      <!-- {{ level }} -->
    </p>
    <p>
      healt:
      <!-- {{ healt }} -->
    </p>
    <p>Record:</p>
  </div>
</template>
<script>
export default {
  props: {
    level: {
      type: Number
    },
    healt: {
      type: Number
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
  position: relative;
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
