import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import ManagerView from './components/views/ManagerView.vue';
import LoginSignMonitor from './components/views/LoginSignMonitor.vue'
import BaseButton from './components/UI/BaseButton.vue';
import MoodApp from './components/Apps/MoodApp.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: LoginSignMonitor },
        { path: "/main", component: ManagerView },
        { path: "/moodAI", component: MoodApp },
    ],
})

const app = createApp(App);

app.component('base-button', BaseButton);

app.use(router);

app.mount('#app');
