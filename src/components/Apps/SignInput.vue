<template>
    <div id="sign-body">
        <div id="sign-wrapper">
            <div id="avatar-gallery">
                <button @click="movePrevious"><img src="@/assets/left.png" alt="left arrow"></button>
                <div id="user-photo">
                    <div id="photos" :style="x">
                        <img v-for="photo in photos" :key="photo.id" :src="require('@/assets/avatars/' + photo.src)" alt="user avatar">
                    </div>
                </div>
                <button @click="moveNext"><img src="@/assets/right.png" alt="right arrow"></button>
            </div>
            <form action="" autocomplete="off" @submit.prevent="createUser(this.enteredUsername, this.enteredPassword)">
                <label for="login" @mouseover="(loginInfo = true, tooltipInfo = true)"
                    @mouseleave="(loginInfo = false, tooltipInfo = false)">Username:</label>
                <input type="text" name="login" required v-model="enteredUsername"/>
                <label for="password" @mouseover="(pswInfo = true, tooltipInfo = true)"
                    @mouseleave="(pswInfo = false, tooltipInfo = false)">Password:</label>
                <input type="password" name="password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required
                    v-model="enteredPassword" />
                <base-button class="signup">Sign Up</base-button>
            </form>
            <p v-if="!loginIsValid">Please don't use any special characters in your login, also login cannot be empty, or this login exists.</p>
        </div>
        <base-tooltip id="logininfo" v-if="loginInfo">
            <div>
                <p>Login can't contain special characters, and be offensive</p>
                <p>Rember it's just a project app that have firebase DB. Do not use your real login or password. Just
                    think
                    about something fake, maybe funny :) </p>
            </div>
        </base-tooltip>
        <base-tooltip id="pswinfo" v-if="pswInfo">
            <div>
                <p>Password must contain the following:</p>
                <ul>
                    <li>Min. 8 characters</li>
                    <li>At least one lowercase letter</li>
                    <li>At least one uppercase letter</li>
                    <li>At least one special character</li>
                    <li>At least one number</li>
                </ul>
            </div>
        </base-tooltip>
    </div>
</template>

<script>
import BaseTooltip from '../UI/BaseTooltip.vue';

export default {
    components: {
        BaseTooltip
    },
    data() {
        return {
            enteredUsername: "",
            enteredPassword: "",
            allowedChars: /[^abcdefghijklmnoprstuwvzABCDEFGHIJKLMNOPRSTUWVZ1234567890]+/g,
            loginIsValid: true,
            loginExist: false,
            loginInfo: false,
            pswInfo: false,
            confirmLogin: false,
            users: [],
            photos: [
                {
                    id: 0,
                    src: '1.png'
                },
                {
                    id: 1,
                    src: '2.png'
                },
                {
                    id: 2,
                    src: '3.png'
                },
                {
                    id: 3,
                    src: '4.png'
                },
                {
                    id: 4,
                    src: '5.png'
                },
                {
                    id: 5,
                    src: '6.png'
                }
            ],
            photoID: 0,
            moveX: 0
        }
    },
    methods: {
        checkIfLoginExist() {
            for (let i = 0; i < this.users.length; i++) {
                if (this.enteredUsername !== this.users[i].usrName) {
                    this.loginExist = false;
                } else {
                    return this.loginExist = true;
                }
            }
        },
        validateLogin() {
            this.checkIfLoginExist();
            for (let i = 0; i < this.enteredUsername.length; i++) {
                if (!this.enteredUsername[i].search(this.allowedChars) || this.loginExist === true) {
                    this.loginIsValid = false;
                    this.enteredPassword = "";
                    return this.enteredUsername = "";
                } else {
                    this.loginIsValid = true;
                }
            }
        },
        createUser(username, password) {
            this.validateLogin();
            if (this.loginIsValid) {
                fetch("https://day-manager-users-default-rtdb.firebaseio.com/users.json", {
                    method: "POST",
                    headers: {
                        "Content-Type": "aplication/json"
                    },
                    body: JSON.stringify({
                        usrName: username,
                        usrPassword: password,
                        usrAvatar: this.photoID
                    })
                });
                this.enteredUsername = "";
                this.enteredPassword = "";
                window.location.pathname = "/";
            } else {
                return;
            }
        },
        movePrevious() {
            if (this.photoID === 0) {
                this.photoID = 5;
                this.moveX = 375;
            } else {
                this.photoID = this.photoID - 1;
                this.moveX = this.moveX - 75;
            }
        },
        moveNext() {
            if (this.photoID === 5) {
                this.photoID = 0;
                this.moveX = 0;
            } else {
                this.photoID = this.photoID + 1;
                this.moveX = this.moveX + 75;
            }
        }
    },
    computed: {
        x() {
            return `transform: translate(${ this.moveX }px)`
        }
    },
    mounted: function () {
        fetch("https://day-manager-users-default-rtdb.firebaseio.com/users.json").then(
            (response) => {
                return response.json();
            }).then((data) => {
                const tempUsers = [];
                for (const id in data) {
                    tempUsers.push({
                        usrName: data[id].usrName,
                    })
                }
                this.users = tempUsers;
            });
    }
}
</script>

<style lang="scss" scoped>
#sign-body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    #sign-wrapper {
        width: 300px;
        height: 400px;
        padding: 1.5rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        background-color: rgb(209, 179, 10);

        #avatar-gallery {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            #user-photo {
                width: 75px;
                height: 75px;
                margin: 0 2rem;
                border-radius: 50%;
                background-color: white;
                overflow: hidden;

                #photos {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: row-reverse;
                    transition: all .5s;
                }
            }

            button {
                width: 32px;
                height: 32px;
                border: none;
                border-radius: 50%;
                background-color: rgb(209, 179, 10);
                cursor: pointer;
                transition: all .2s;

                img {
                    width: 16px;
                    height: 16px;
                }

                &:hover {
                    background-color: rgb(219, 255, 57);
                }
            }

        }

        form {
            width: 100%;
            height: 75%;
            display: flex;
            flex-direction: column;
            align-items: center;

            label {
                margin: 2rem 0 0 0;
                color: rgb(20, 13, 4);
                font-family: 'Comfortaa', cursive;
                font-weight: bold;

                &::before {
                    content: url(@/assets/info16.png);
                    margin-right: 1rem;
                }
            }

            input {
                width: 70%;
                height: 2rem;
                padding: 0 10px;
                border: 2px solid rgb(20, 13, 4);
                border-radius: 3px;
                outline: none;
                background-color: transparent;
                color: rgb(20, 13, 4);
                font-family: 'Comfortaa', cursive;
                font-weight: bold;
                letter-spacing: .2rem;
                text-align: center;
            }

            input:focus {
                background-color: transparent;
                border-color: rgb(219, 255, 57);
            }
        }
    }

    p {
        color: rgb(20, 13, 4);
        font-weight: bold;
        text-align: center;
    }
}
</style>