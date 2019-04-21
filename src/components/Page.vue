<template>
    <div id="page-single" class="page" v-if="this.$parent.fullDataLoaded">
        <p>Page id: {{this.$route.params.id}}</p>
        <p>Page title: {{pageObject.post_title}}</p>
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
        watch: {
            '$route' (to, from) {
                if(this.$route.params.slug2){
                    this.pageObject = this.$parent.fullData.pages[this.$route.params.slug + '/' + this.$route.params.slug2];
                } else {
                    this.pageObject = this.$parent.fullData.pages[this.$route.params.slug];
                }
            }
        },
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

<style scoped>

</style>
