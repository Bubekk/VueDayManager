<template>
    <div id="wrap" :class="{ signwrap: !isLogin }">
        <div id="form-wrap" :class="{ signwrapform: !isLogin }">
            <div id="form" :class="{ signup: !isLogin }">
                <login-input></login-input>
                <sign-input></sign-input>
            </div>
            <div id="note-wrap" :class="{ signupnote: !isLogin }">
                <div class="note" id="sign">
                    <h1>Sign Up</h1>
                    <p>If you don't have your account already, create one!</p>
                    <p>If you want to log in click the button below</p>
                    <base-button class="note-button-signup" @click="changeInput">Log In</base-button>
                </div>
                <div class="note" id="log">
                    <h1>Log In</h1>
                    <p>If you have account just log in!</p>
                    <p>If you want to create account, click the button below</p>
                    <base-button class="note-button-log" @click="changeInput">Sign Up</base-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LoginInput from '../Apps/LoginInput.vue';
import SignInput from '../Apps/SignInput.vue';

export default {
    data() {
        return {
            isLogin: true
        }
    },
    components: {
        LoginInput,
        SignInput
    },
    methods: {
        changeInput() {
            this.isLogin = !this.isLogin;
        }
    }
}
</script>

<style lang="scss" scoped>
#wrap {
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: rgb(3, 28, 29);
    transition: all 1s;

    &.signwrap {
        background-color: rgb(15, 13, 9);
        transition: all 1s;
    }

    #form-wrap {
        width: 620px;
        height: 448px;
        display: flex;
        justify-content: center;
        border-radius: 5px;
        background-color: aliceblue;
        overflow: hidden;
        position: relative;
        -webkit-box-shadow: 0px 0px 33px 2px rgba(11, 209, 110, 0.69);
        -moz-box-shadow: 0px 0px 33px 2px rgba(11, 209, 110, 0.69);
        box-shadow: 0px 0px 33px 2px rgba(11, 209, 110, 0.69);

        &.signwrapform {
            -webkit-box-shadow: 0px 0px 33px 2px rgba(173, 150, 14, 0.69);
            -moz-box-shadow: 0px 0px 33px 2px rgba(170, 147, 13, 0.69);
            box-shadow: 0px 0px 33px 2px rgba(163, 141, 17, 0.69);
        }

        #form {
            position: relative;
            transition: all 1s;
        }


        .signup {
            transform: translateY(-448px);
            transition: all 1s;
        }

        .signupnote {
            transform: translateY(448px);
            transition: all 1s;
        }

        #note-wrap {
            width: 100%;
            height: 100%;
            position: relative;
            top: -448px;
            transition: all 1s;

            .note {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-around;
                align-items: center;
                flex-direction: column;


                &#log {
                    background: #44A08D;
                    background: -webkit-linear-gradient(to top, #093637, #44A08D);
                    background: linear-gradient(to top, #093637, #44A08D);

                    h1 {
                        margin: 0;
                        text-align: center;
                        font-family: 'Urbanist', sans-serif;
                        font-size: 3rem;
                        color: rgb(11, 209, 110);
                    }

                    p {
                        width: 75%;
                        font-family: 'Comfortaa', cursive;
                        font-size: 1.2rem;
                        text-align: center;
                        color: rgb(11, 209, 110);
                    }
                }

                &#sign {
                    background: #9c6c03;
                    background: -webkit-linear-gradient(to bottom, #181818, #9c6c03);
                    background: linear-gradient(to bottom, #181818, #9c6c03);

                    h1 {
                        margin: 0;
                        text-align: center;
                        font-family: 'Urbanist', sans-serif;
                        font-size: 3rem;
                        color: rgb(209, 179, 10);
                    }

                    p {
                        width: 75%;
                        font-family: 'Comfortaa', cursive;
                        font-size: 1.2rem;
                        text-align: center;
                        color: rgb(209, 179, 10);
                    }
                }
            }
        }

    }
}
</style>