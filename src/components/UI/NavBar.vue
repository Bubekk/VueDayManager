<template>
    <nav>
        <div id="userinfo">
            <div id="avatar-wrap">
                <div id="photos"><img :src="require('@/assets/avatars/' + this.userAvatar)" alt="user avatar"></div>
            </div>
            <h1>Hello {{ whichUser }}</h1>
        </div>
        <clock-app></clock-app>
        <div id="menu-wrap">
            <base-button class="cog" @click="toggleSettings"></base-button>
            <transition>
                <div id="settings" v-if="showSettings">
                    <base-button class="nav">Change UI Color</base-button>
                    <base-button class="nav"><router-link to="/">Log off</router-link></base-button>
                </div>
            </transition>
        </div>
    </nav>
</template>

<script>
import ClockApp from '../Apps/ClockApp.vue';

export default {
    components: {
        ClockApp
    },
    data() {
        return {
            whichUser: "",
            userAvatar: "7placeholder.png",
            showSettings: false
        }
    },
    methods: {
        showUserLogin() {
            this.whichUser = localStorage.getItem('userLogin');
            this.userAvatar = localStorage.getItem('user-avatar');
        },
        toggleSettings() {
            this.showSettings = !this.showSettings;
        }
    },
    mounted() {
        this.showUserLogin();
    }
}
</script>

<style lang="scss" scoped>
nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #44A08D;
    border-radius: 0 0 25px 25px;
    padding: 5px 15px;

    #userinfo {
        display: flex;
        flex-direction: row;
        align-items: center;

        h1 {
            margin: 0;
            margin-left: 1rem;
            color: rgb(20, 13, 4);
            font-family: 'Comfortaa', cursive;
            font-weight: bold;
        }
    }

    #avatar-wrap {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: whitesmoke;
        overflow: hidden;

        #photos {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all .5s;

            img {
                width: 100%;
                height: 105%;
            }
        }
    }

    #menu-wrap {
        width: 300px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        transition: all .5s;

        #settings {
            display: flex;
            justify-content: space-around;
            align-items: center;
        }

        .v-enter-active,
        .v-leave-active {
            transition: all .3s ease;
        }

        .v-enter-from,
        .v-leave-to {
            transform: translateX(300px);
            opacity: 0;
        }

        base-button {
            margin: 0;
        }

        a {
            text-decoration: none;
            color: rgb(11, 209, 110);
            font-family: 'Comfortaa', cursive;
        }
    }
}
</style>