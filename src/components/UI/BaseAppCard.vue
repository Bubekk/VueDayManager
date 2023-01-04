<template>
    <div>
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
div {
    width: auto;
    height: auto;
    margin: 35px;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #44A08D;
    border-radius: 3px;

    &.quotecard{
        background: rgba(109, 123, 229, 0.3);
        box-shadow: 0 8px 32px 0 rgba(158, 197, 255, 0.37);
        backdrop-filter: blur(17px);
        -webkit-backdrop-filter: blur(17px);
        border: 2px solid rgba(38, 204, 88, 0.774);
    }
    &.notecard {
        background: rgba(109, 123, 229, 0.3);
        padding: 1rem;
    }
}
</style>