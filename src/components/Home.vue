<template>
    <div id="page-home" v-if="this.$parent.fullDataLoaded">

        <section class="grid-tiles">

            <div v-for="item in fullData.menu2" v-if="item.parent == 0" class="tile">
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
                fullData: Object
            }
        },
        watch: {

        },
        created: function () {
            this.fullData = this.$parent.fullData;

            //test
            // fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
            // .then(response => {
            //     console.log(response.json());
            // });
            // .then(json => console.log(json))

            fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
            .then(response => response.json())
            .then(json => console.log(json))

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
