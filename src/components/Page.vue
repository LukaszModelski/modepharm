<template>
  <div id="page-single" class="page" v-if="this.$parent.pagesLoaded">
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
                this.pageObject = this.$parent.pages[this.$route.params.id];
            }
        },
        created: function () {
            this.pageObject = this.$parent.pages[this.$route.params.id];
        },
        mounted: function () {

        }
    }
</script>

<style scoped>

</style>
