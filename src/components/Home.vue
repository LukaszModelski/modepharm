<template>
    <div id="page-home" v-if="this.$parent.fullDataLoaded">
        <h1>{{fullData['home-page']['post_title']}}</h1>
        <p>{{fullData['home-page']['post_content']}}</p>
        <section class="grid-tiles">
            <div ref="tile" v-for="item in fullData.menu" v-if="item.parent == 0" class="tile" v-bind:style="{ backgroundImage: 'url(' + item['tile_img'] + ')' }">
                <router-link 
                    v-if="item.type == 'page'"
                    :to="{ path: '/' + item.full_slug }"
                    class="tile__nav-item"
                >
                <h2>{{item.title}}</h2>
                </router-link>
                <div class="tile__color" v-bind:style="{ backgroundColor: item['tile_color'] }"></div>
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
@import '../styles/global';
@import '../styles/grid-tiles';

</style>

