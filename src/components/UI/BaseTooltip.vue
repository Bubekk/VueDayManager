<template>
    <dialog open>
        <slot></slot>
    </dialog>
</template>

<style lang="scss" scoped>
dialog {
    width: 250px;
    height: auto;
    visibility: visible;
    background-color: rgb(209, 179, 10);
    font-family: 'Comfortaa', cursive;
    font-weight: bold;
    font-size: .8rem;
    color: rgb(20, 13, 4);
    text-align: center;
    padding: 1rem;
    border: 2px solid rgb(20, 13, 4);
    border-radius: 3px;
    position: absolute;
    z-index: 1;
}
</style>
