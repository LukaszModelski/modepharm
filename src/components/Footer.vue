<template>
    <div id="footer">
        <div class="container">
            <div class="contact-form">
                <h2>Wyślij zapytanie</h2>
            </div>
            <div class="contact-details">
                <h2>Dane kontaktowe</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            menuClosed: true,
            openDropdowns: {},
            menuActive: false
        }
    },
    methods: {

    }
}
</script>

<style  lang="scss" scoped>
@import '../styles/vars';

#footer {
    background-color: #f6f6f6;
    padding: 5rem 0 7rem;

    h2 {
        text-transform: uppercase;
        font-size: 1.25rem;
        letter-spacing: 4px;
        font-weight: 700;
    }

    .container {
        display: flex;
        flex-wrap: wrap;
    }

    .contact-form {
        width: 100%;
        @media screen and (min-width: $tablet) {
            width: 66.6%;
        }
    }

    .contact-details {
        width: 100%;
        @media screen and (min-width: $tablet) {
            width: 33.3%;
        }
    }
}

</style>
