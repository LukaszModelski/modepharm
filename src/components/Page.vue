<template>
  <div id="page-single" class="page" v-if="this.$parent.pagesLoaded">
      <!-- <p>page index: {{ $route.params.index }}</p> -->
      <p>Page title: {{pageObject.title.rendered}}</p>
      <div class="wyswyg-content" v-html="pageObject.content.rendered"></div>
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
                this.pageObject = this.$parent.pagesArray[this.$route.params.index];
                // console.log(this.pageObject.title.rendered);
            }
        },
        created: function () {
            // this.pageObject =  this.$parent.pagesArray[this.$route.params.index];
            // this.pageObject =  {
            //     test: 'dewde'
            // };
            this.pageObject = this.$parent.pagesArray[this.$route.params.index];
            // console.log(this.pageObject.title.rendered);
        },
        mounted: function () {
            // this.pageObject =  this.$parent.pagesArray[this.$route.params.index];
            // console.log(this.$route.query);
        }
    }
</script>

<style scoped>

</style>
