<template>
  <div id="wrap">
    <h1><span v-if="currentHour < 10">0</span>{{ currentHour }} : <span v-if="currentMinute < 10">0</span>{{ currentMinute }}</h1>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      currentHour: 0,
      currentMinute: 0
    }
  },
  mounted() {
    this.updateTime()
    setInterval(() => this.updateTime(), 50)
  },
  methods: {
    updateTime() {
      const currentDate = new Date()
      this.currentHour = `${currentDate.getHours()}`
      this.currentMinute = `${currentDate.getMinutes()}`
    },
  },
}
</script>

<style lang="scss" scoped>
#wrap {
  width: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  h1 {
    color: rgb(0, 0, 0);
    font-size: 1.5rem;
    font-family: 'Comfortaa', cursive;
    margin: 0;
  }
}
</style>
  