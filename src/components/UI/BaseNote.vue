<template>
    <div id="note">
        <base-button class="deletenote" @click="deleteNote">X</base-button>
        <h1>
            {{ header }}
        </h1>
        <p>
            {{ content }}
        </p>
    </div>
</template>

<script>
    export default {
        emits: ["delete"],
        props: {
            id: {
                type: String
            },
            header: {
                type: String
            },
            content: {
                type: String
            }
        },
        methods: {
            deleteNote() {
                this.$emit("delete", this.id);
            }
        }
    }
</script>

<style lang="scss" scoped>
    #note {
        width: auto;
        max-width: 200px;
        height: auto;
        max-height: 300px;
        padding: .5rem;
        margin: 1rem;
        background-color: rgb(214, 177, 96);
        border-radius: 5px;
        color: rgb(12, 12, 75);
        
        h1 {
            text-align: center;
            font-size: 1.2rem;
        }

        p {
            text-align: center;
            font-size: 1rem;
        }
    }
</style>