<template>
    <div id="login-body">
        <div id="login-wrapper">
            <div id="user-photo">
                <div id="photos">
                    <img :src="require('@/assets/avatars/' + this.userAvatar)" alt="user photo">
                </div>
            </div>
            <form action="" @submit.prevent="submitUser(this.enteredUsername, this.enteredPassword)">
                <label for="login">Username:</label>
                <input type="text" name="login" v-model="enteredUsername" />
                <label for="password">Password:</label>
                <input type="password" name="password" v-model="enteredPassword" />
                <base-button class="login">Log In</base-button>
                <p v-if="(!confirmLogin || !confirmPassword)">Your login or password is invalid or you dont have an
                    account. Click Signup to do so.</p>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            enteredUsername: "",
            enteredPassword: "",
            users: [],
            userAvatar: "7placeholder.png",
            confirmLogin: true,
            confirmPassword: true,
        }
    },
    watch: {
        enteredUsername() {
            for (let i = 0; i < this.users.length; i++)
                if (this.enteredUsername == this.users[i].usrName) {
                    this.userAvatar = 1 + this.users[i].usrAvatar + ".png";
                }
        }
    },
    methods: {
        submitUser(username, password) {
            this.enteredUsername = username;
            this.enteredPassword = password;
            this.checkUser();
        },
        checkUser() {
            for (let i = 0; i < this.users.length; i++)
                if (this.enteredUsername == this.users[i].usrName) {
                    if (this.enteredPassword == this.users[i].usrPsw) {
                        localStorage.setItem('userLogin', this.users[i].usrName);
                        localStorage.setItem('userId', this.users[i].usrId);
                        localStorage.setItem('user-avatar', this.userAvatar);
                        return window.location.pathname = "/main";
                    } else {
                        return this.confirmPassword = false;
                    }
                } else {
                    this.confirmLogin = false;
                }
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
                        usrId: id,
                        usrName: data[id].usrName,
                        usrPsw: data[id].usrPassword,
                        usrAvatar: data[id].usrAvatar
                    })
                }
                this.users = tempUsers;
                console.log(this.users, this.users.usrId);
            });
    },
}
</script>

<style lang="scss" scoped>
#login-body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    #login-wrapper {
        width: 300px;
        height: 400px;
        padding: 1.5rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        background-color: rgb(11, 209, 110);

        font-family: 'Comfortaa', cursive;

        form {
            width: 100%;
            height: 75%;
            display: flex;
            flex-direction: column;
            align-items: center;

            label {
                margin: 2rem 0 0 0;
                color: rgb(10, 70, 62);
                font-weight: bold;
            }

            input {
                width: 70%;
                height: 2rem;
                padding: 0 10px;
                border: 2px solid rgb(10, 70, 62);
                border-radius: 3px;
                outline: none;
                background-color: transparent;
                color: rgb(10, 70, 62);
                font-family: 'Comfortaa', cursive;
                font-weight: bold;
                letter-spacing: .2rem;
                text-align: center;
            }

            input:focus {
                background-color: transparent;
                border-color: rgb(63, 255, 166);
            }

            a {
                color: rgb(10, 70, 62);
                font-weight: bold;
                text-decoration: none;
            }

            p {
                color: rgb(10, 70, 62);
                font-weight: bold;
                text-align: center;
            }
        }

        #user-photo {
            width: 75px;
            height: 75px;
            border-radius: 50%;
            background-color: white;
            overflow: hidden;

            #photos {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: all .5s;
            }
        }
    }
}
</style>