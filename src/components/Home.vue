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
}
.tile{
    width: 100%;

    
    margin: 1rem;
    box-sizing: border-box;
    padding: 4rem 1rem;
    background-color: red;

    @media screen and (min-width: $tablet-max) {
        width: calc(50% - 2rem);
    }
    @media screen and (min-width: $mobile-max) {
        width: calc(33.3% - 2rem);
    }
    
}

</style>

