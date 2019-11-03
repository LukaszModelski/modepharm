<template>
    <div id="page-single" class="page" v-if="this.$parent.fullDataLoaded">
        <h1>{{pageObject.post_title}}</h1>
        <picture class="main-image">
            <source media="(min-width: 1468px)" :srcset="pageObject.main_image.url">
            <source media="(min-width: 1100px)" :srcset="pageObject.main_image.sizes.large">
            <source media="(min-width: 1px)" :srcset="pageObject.main_image.sizes.medium_large">
            <img :src="pageObject.main_image.url" :alt="pageObject.main_image.alt">
        </picture>
        <div class="wyswyg-content" v-html="pageObject.post_content"></div>
    </div>
</template>

<script>
    export default {
        name: 'Page',
        props: {
            
        },
        data () {
            return {
                pageObject: Object,
            }
        },
        // watch: {
        //     '$route' (to, from) {
        //         if(this.$route.params.slug2){
        //             this.pageObject = this.$parent.fullData.pages[this.$route.params.slug + '/' + this.$route.params.slug2];
        //         } else {
        //             this.pageObject = this.$parent.fullData.pages[this.$route.params.slug];
        //         }
        //     }
        // },
        created: function () {
            if(this.$route.params.slug2){
                this.pageObject = this.$parent.fullData.pages[this.$route.params.slug + '/' + this.$route.params.slug2];
            } else {
                this.pageObject = this.$parent.fullData.pages[this.$route.params.slug];
            }
        },
        destroyed(){
            this.closeMenuMixin();
        }
    }
</script>

<style lang="scss" scoped>
    #page-single {
        .main-image {
            img {
                width: 100%;
                height: auto;
                border-radius: 0.5rem;
            }
        }
    }
</style>
