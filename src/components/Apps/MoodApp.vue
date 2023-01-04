<template>
  <div>
    <h1>Your daily mood</h1>
    <p>Choose your mood from the icons below</p>
    <div>
      <button v-for="mood in moods" :key="mood.id" @click="addMood(mood.mood, mood.message)"><img
          :src="require('@/assets/mood/' + mood.src)" /></button>
    </div>
    <p>{{ moodMessage }}</p>
    <button>Monthly raport</button>
    <mood-report><slot></slot></mood-report>
  </div>
</template>
  
<script>
import MoodReport from '../Apps/MoodReport.vue';

export default {
  components: {
    MoodReport
  },
  data() {
    return {
      whichUser: localStorage.getItem('userId'),
      months: ["01January","02February","03March","04April","05May","06June","07July","08August","09September","10October","11November","12December"],
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      moods: [
        {
          id: 0,
          src: "mad.png",
          mood: "Mad",
          message: "I hope your day will get better, try to relax"
        },
        {
          id: 1,
          src: "sad.png",
          mood: "Sad",
          message: "I'm really sorry for your mood right now, remember, after the rain, the sun always comes out! :)"
        },
        {
          id: 2,
          src: "normie.png",
          mood: "Neutral",
          message: "That's ok. It is all good, right? :)"
        },
        {
          id: 3,
          src: "smile.png",
          mood: "Good",
          message: "What a beautiful smile you got there! Keep it up! :D"
        },
        {
          id: 4,
          src: "happy.png",
          mood: "Very Good",
          message: "Haha, i'm glad to hear that, the day will be fantastic! ^^"
        },
      ],
      report: {
        month: "",
        day: "",
        date: "",
        mood: ""
      },
      moodMessage: ""
    }
  },
  methods: {
    addMood(mood, message) {
      this.report.month = new Date().getMonth();
      this.report.day = new Date().getDay();
      this.report.date = new Date().getDate();
      const newMood = {
        day: this.days[this.report.day] + "-" + this.report.date + "-" + this.report.month,
        mood: mood
      }
      this.moodMessage = message;

      fetch("https://day-manager-users-default-rtdb.firebaseio.com/users/" + this.whichUser + "/moodReport/" + this.months[this.report.month] + "/" + this.report.date + ".json", {
        method: "PUT",
        body: JSON.stringify({
          mood: newMood
        })
      });
    }
  }
}
</script>

<style lang="scss" scoped>
select {
  width: 500px;

  option {
    display: inline-block;
    width: 15%;
  }
}
</style>