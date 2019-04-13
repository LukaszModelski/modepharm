<template>
    <div id="page-home" v-if="this.$parent.fullDataLoaded">

        <section class="grid-tiles">

            <div v-for="item in fullData.menu" v-if="item.parent == 0" class="tile">
                <router-link 
                    v-if="item.type == 'page'"
                    :to="{ path: '/' + item.full_slug }"
                    class="nav-item"
                >
                {{item.title}}
                </router-link>
            </div>

        </section>
    </div>
</template>

<script>
    export default {
        name: 'Home',
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
