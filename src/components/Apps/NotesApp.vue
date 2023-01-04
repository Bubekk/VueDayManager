<template>
    <div id="wrap">
        <h1>Notes</h1>
        <base-button class="notes" @click="showAdd" v-if="!add">Add</base-button>
        <form action="submit" @submit.prevent="addNote(this.enteredHeader, this.eneteredContent)" v-if="add">
            <input type="textarea" name="noteHeader" placeholder="Header" v-model="enteredHeader" />
            <input type="textarea" name="noteContent" placeholder="Content" v-model="eneteredContent" />
            <base-button class="plus">+</base-button>
        </form>
        <div id="notetaskwrap">
            <base-note v-for="note in notes" :key="note.id" :id="note.id" :header="note.header" :content="note.content"
                @delete="deleteNote"></base-note>
        </div>
    </div>
</template>

<script>
import BaseNote from '../UI/BaseNote.vue';

export default {
    components: {
        BaseNote
    },
    data() {
        return {
            add: false,
            enteredHeader: "",
            eneteredContent: "",
            notes: [],
            whichUser: localStorage.getItem('userId'),
        }
    },
    methods: {
        showAdd() {
            this.add = !this.add
        },
        addNote(header, content) {
            const newNote = {
                id: new Date().toISOString(),
                header: header,
                content: content
            };
            this.notes.push(newNote);
            fetch("https://day-manager-users-default-rtdb.firebaseio.com/users/" + this.whichUser + "/notes" +  ".json", {
                method: "POST",
                headers: {
                    "Content-Type": "aplication/json"
                },
                body: JSON.stringify({
                    note: newNote
                })
            });
            this.add = false;
            this.enteredHeader = "";
            this.eneteredContent = "";
        },
        deleteNote(noteID) {
            this.notes = this.notes.filter(note => note.id !== noteID);
            fetch("https://day-manager-users-default-rtdb.firebaseio.com/users/" + this.whichUser + "/notes" + ".json").then(
            (response) => {
                return response.json();
            }).then((data) => {
                for (const id in data) {
                    if (data[id].note.id == noteID) {
                        fetch("https://day-manager-users-default-rtdb.firebaseio.com/users/" + this.whichUser + "/notes/" + id + ".json", {method: 'DELETE'})
                    }
                }
            });
        }
    },
    mounted: function () {
        fetch("https://day-manager-users-default-rtdb.firebaseio.com/users/" + this.whichUser + "/notes" +  ".json").then(
            (response) => {
                return response.json();
            }).then((data) => {
                for (const id in data) {
                    this.notes.push({
                        id: data[id].note.id,
                        header: data[id].note.header,
                        content: data[id].note.content
                    })
                }
            });
    }
}
</script>

<style lang="scss" scoped>
#wrap {
    font-family: 'Quicksand', sans-serif;

    h1 {
        margin-top: 0;
        font-size: 1.8rem;
        text-align: left;
        color: rgba(255, 255, 255, 0.562);
    }

    form {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;

        input {
            width: 30%;
            height: 2rem;
            padding: 0 10px;
            margin: 1rem;
            border: 2px solid rgb(60, 54, 112);
            border-radius: 3px;
            outline: none;
            background-color: rgb(60, 54, 112);
            color: rgb(255, 255, 255);
            font-family: 'Comfortaa', cursive;
            font-weight: bold;
            letter-spacing: .2rem;
            text-align: center;
            transition: all .3s;
        }

        input::placeholder {
            color: rgba(255, 255, 255, 0.575);
        }

        input:focus {
            background-color: rgb(73, 66, 128);
            border-color: rgb(49, 75, 109);
        }
    }

    #notetaskwrap {
        display: flex;
        flex-direction: row;
        justify-content: space-around;


    }
}
</style>
