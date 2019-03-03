<template>
  <div id="page-single" class="page">
      <!-- <h1>{{pageContent.slug}}</h1> -->
      <!-- <div class="wyswyg-content" v-html="pageContent.content.rendered"></div> -->
      <p>test</p>
      <p>page slug: {{ $route.params.slug }}</p>
  </div>
</template>

<script>
    export default {
        name: 'Page',
        props: {
            pageContent: Object
        },
        data () {
            return {
                test: 'test',
            }
        },
    }
</script>

<style scoped>

</style>
