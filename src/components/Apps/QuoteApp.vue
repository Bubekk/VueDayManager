<template>
    <div id="wrap">
        <div id="quote">
            <h1><i>"Quote"</i> of the day:</h1>
            <p id="quote-paragraph"><i>" {{ quote }} "</i></p>
            <p id="author-paragraph"><sub>{{ author }}</sub></p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            quote: "",
            author: "",
        }
    },
    methods: {
        getQuote() {
            fetch("https://api.api-ninjas.com/v1/quotes", {
                method: "GET",
                headers: { 'X-Api-Key': 'Xi5ceEGUaqqBgiXr2HXgjw==w40E6tJ6rVGGP6o5' },
                contentType: 'application/json',
            }).then(response => response.json().then((data) => {
                this.quote = data[0].quote;
                this.author = data[0].author;
            }));
        }
    },

    mounted() {
        this.getQuote();
    }
}
</script>

<style lang="scss" scoped>
#wrap {
    width: 800px;
    color: rgb(255, 255, 255);
    font-family: 'Quicksand', sans-serif;

    #quote {
        h1 {
            text-align: center;
            font-size: 1.8rem;
            text-align: left;
        }

        p {
            font-weight: bold;
            text-align: center;

            &#quote-paragraph {
                font-size: 1.5rem;
                margin-bottom: 0;
            }

            &#author-paragraph {
                font-size: 1.2rem;
                text-align: right;
            }
        }
    }
}
</style>