<template>
    <div id="page-home" v-if="this.$parent.fullDataLoaded">

        <section class="grid-tiles">

            <div ref="tile" v-for="item in fullData.menu2" v-if="item.parent == 0" class="tile">
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
                tileHeight: ''
            }
        },
        computed: {

        },
        watch: {

        },
        methods:{

        },
        created: function () {
            this.fullData = this.$parent.fullData;
        },
        destroyed(){
            this.closeMenuMixin();
        }
    }
</script>

<style lang="scss" scoped>
@import '../styles/vars';

.grid-tiles{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.tile{
    width: 100%;
    height: calc((100vw - 2rem)/1.079);
    margin: 1rem 0;
    box-sizing: border-box;
    background-color: red;
    @media screen and (min-width: $tablet) {
        width: 324px;
        height: 300px;
    }
    @media screen and (min-width: $desktop-small) {
        width: 309px;
        height: 286px;
    }
    @media screen and (min-width: $desktop-big) {
        width: 410px;
        height: 380px;
    }
}

</style>

