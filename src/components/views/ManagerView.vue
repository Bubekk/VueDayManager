<template>
    <nav-bar></nav-bar>
        <weather-app></weather-app>
    <section>
        <base-app-card class="quotecard"><quote-app></quote-app></base-app-card>
        <base-app-card class="notecard"><notes-app></notes-app></base-app-card>
        <base-app-card><mood-app></mood-app></base-app-card>
    </section>
</template>

<script>
import NavBar from '../UI/NavBar.vue';
import BaseAppCard from '../UI/BaseAppCard.vue';
import WeatherApp from '../Apps/WeatherApp.vue';
import QuoteApp from '../Apps/QuoteApp.vue';
import NotesApp from '../Apps/NotesApp.vue';
import MoodApp from '../Apps/MoodApp.vue';

export default {
    components: {
        NavBar,
        BaseAppCard,
        WeatherApp,
        QuoteApp,
        NotesApp,
        MoodApp
    },
}
</script>

<style lang="scss" scoped>

section {
    display: grid;
    grid-template-columns: 80%;
    grid-template-rows: 50% 50%;
    padding: 5rem;
    align-content: center;
    justify-content: center;
    align-items: center;
    justify-items: center;
}
</style>