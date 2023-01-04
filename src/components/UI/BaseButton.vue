<template>
    <button>
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
button {
    background-color: rgb(199, 68, 199);
    border: none;
    border-radius: 15px;
    font-weight: bold;
    color: rgb(80, 3, 54);
    cursor: pointer;
    transition: all .2s;

    &.login {
        width: 78%;
        height: 3rem;
        border: 2px solid rgb(10, 70, 62);
        border-radius: 3px;
        background-color: transparent;
        color: rgb(10, 70, 62);
        font-family: 'Comfortaa', cursive;
        margin-top: 2rem;

        &.login:hover {
            background-color: rgb(10, 70, 62);
            color: rgb(11, 209, 110);
        }
    }

    &.signup {
        width: 78%;
        height: 3rem;
        border: 2px solid rgb(20, 13, 4);
        border-radius: 3px;
        background-color: transparent;
        color: rgb(20, 13, 4);
        font-family: 'Comfortaa', cursive;
        margin-top: 2rem;

        &.signup:hover {
            background-color: rgb(20, 13, 4);
            color: rgb(209, 179, 10);
        }
    }

    &.nav {
        font-size: .7rem;
        width: 40%;
        height: 2rem;
        margin: 0;
        background-color: #44A08D;
        border: 2px solid rgb(11, 209, 110);
        border-radius: 3px;
        color: rgb(11, 209, 110);
        font-family: 'Comfortaa', cursive;
    }
    &.notes {
        font-size: .7rem;
        width: auto;
        height: 2rem;
        margin: 0;
        background-color: #304983;
        border-radius: 3px;
        color: rgb(255, 255, 255);
        font-family: 'Comfortaa', cursive;
    }
    &.deletenote {
        font-size: 1rem;
        width: auto;
        height: 2rem;
        margin: 5px 0 0 5px;
        background-color: transparent;
        border-radius: 3px;
        color: rgb(197, 73, 51);
        font-family: 'Comfortaa', cursive;
    }
    &.plus {
       height: 2rem;
       width: 2rem;
       border-radius: 50%;
       background-color: rgb(60, 54, 112);
       color: rgba(255, 255, 255, 0.562);
       font-size: 1.5rem;
    }

    &.cog {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background-image: url(@/assets/cog.png);
        background-size: 20px;
        background-repeat: no-repeat;
        background-position: center;
        background-color: #44A08D;
        border: 2px solid rgb(11, 209, 110);
    }

    &.note-button-log {
        width: 75%;
        height: 3rem;
        border: 2px solid rgb(11, 209, 110);
        border-radius: 3px;
        background-color: transparent;
        color: rgb(11, 209, 110);
        font-family: 'Comfortaa', cursive;

        &.note-button-log:hover {
            background-color: rgb(11, 209, 110);
            color: rgb(10, 70, 62);
            font-weight: bold;
        }
    }

    &.note-button-signup {
        width: 75%;
        height: 3rem;
        border: 2px solid rgb(209, 179, 10);
        border-radius: 3px;
        background-color: transparent;
        color: rgb(209, 179, 10);
        font-family: 'Comfortaa', cursive;

        &.note-button-signup:hover {
            background-color: rgb(209, 179, 10);
            color: rgb(20, 13, 4);
            font-weight: bold;
        }
    }
}
</style>