<template>
    <div id="page-category" v-if="this.$parent.fullDataLoaded">

        <section class="grid-tiles-category">

            category page

        </section>
    </div>
</template>

<script>
    export default {
        name: 'Category',
        props: {
            
        },
        data () {
            return {
                fullData: Object,
            }
        },
        watch: {

        },
        created: function () {
            this.fullData = this.$parent.fullData;
        },
        destroyed(){
            const menu = document.getElementById('menu');
            const content = document.getElementById('main-content');
            menu.classList.remove('active');
            content.classList.remove('menu-active');
        }
    }
</script>

<style scoped>

.grid-tiles{
    display: flex;
}
.tile{
    /* width: 25%; */
    margin: 1rem;
    padding: 4rem 1rem;
    background-color: red;
}

</style>
