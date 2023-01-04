<template>
    <div id="wrap">
        <h1>Todays Weather</h1>
        <img :src="require('@/assets/weather/' + weatherIcn + '.png')" alt="Weather icn">
        <h2>{{ weatherValue }} &deg; C</h2>
        <p>{{ currentTime }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            weatherValue: 0,
            weatherIcn: "rain",
            weatherType: [
                {
                    type: "cold",
                    icn: ["snow", "cloudy", "wind"]
                },
                {
                    type: "barelyCold",
                    icn: ["snow", "wind", "fog"]
                },
                {
                    type: "moderately",
                    icn: ["cloudy", "wind", "fog"]
                },
                {
                    type: "hot",
                    icn: ["sun", "wind", "storm"]
                }
            ],
            currentTime: ""
        }
    },
    methods: {
        randomizeWeather(min, max) {
            min = -30
            max = 30
            setInterval(() => this.weatherValue = Math.floor(Math.random() * (max - min + 1)) + min, 15000);
        },
    },
    watch: {
        weatherValue(value) {
            const i = Math.floor(Math.random() * 3);
            if (value < -15 && value > -30) {
                this.weatherIcn = this.weatherType[0].icn[i];
            } else if (value > -15 && value < 0) {
                this.weatherIcn = this.weatherType[1].icn[i];
            } else if (value > 0 && value < 15) {
                this.weatherIcn = this.weatherType[2].icn[i];
            } else if (value > 15 && value < 30) {
                this.weatherIcn = this.weatherType[3].icn[i];
            }
        }
    },
    mounted() {
        this.randomizeWeather();
    }
}
</script>

<style lang="scss" scoped>
#wrap {
    width: 20%;
    height: auto;
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: rgb(255, 255, 255);
    font-family: 'Comfortaa', cursive;

    h1 {
        text-align: center;
        font-size: 1rem;
        margin: 0 1rem 0 2rem;

    }

    img {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 1rem;
    }

    h2 {
        font-size: 1.2rem;
    }
}
</style>