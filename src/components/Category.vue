<template>
    <div id="page-category" v-if="this.$parent.fullDataLoaded">
        <h1>Category page: {{categoryObject.title}}</h1>
        <section class="grid-tiles-category">
            <div v-for="item in categoryObject['child-pages']" class="tile">
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
        name: 'Category',
        props: {
            
        },
        data () {
            return {
                fullData: Object,
                categoryObject: Object
            }
        },
        watch: {

        },
        created: function () {
            this.fullData = this.$parent.fullData;
            this.categoryObject = this.fullData.menu2[this.$route.params.slug]
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

.grid-tiles-category{
    display: flex;
}
.tile{
    max-width: 200px;
    margin: 1rem;
    padding: 4rem 1rem;
    background-color: green;
}

</style>
