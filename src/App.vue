<template>
  <div id="app">
    <h1>Modepharm</h1>
    <nav v-if="pagesLoaded">
      <router-link  
        v-for="(page, index) in pagesArray" 
        :key="page.id" 
        :to="{
          path: '/page/' + index,
          query: page
        }"
      >
        {{page.title.rendered}}
      </router-link>
    </nav>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios';
import HelloWorld from './components/HelloWorld.vue'
import Page from './components/Page.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Page
  },
  data () {
    return {
        posts: Object,
        pages: Object,
        pagesArray: Array,
        pagesLoaded: false,
        postsLoaded: false
    }
  },
  methods: {
    loadPosts(){
      axios.get('http://www.modepharm.pl/cms/wp-json/wp/v2/posts/?per_page=100')
      .then((response) => {
          // reverse data because of adding this to object in next step
          response.data = response.data.reverse();
          this.posts = [];
          for(let i=0;i<response.data.length;i++){
              let obj = {
                  [response.data[i].slug]: response.data[i]
              };
              this.posts = Object.assign(obj, this.posts);
          }
          this.postsLoaded = true;
          // do in next thick, vue must see !isLoading is true
          // this.$nextTick(()=>{
          //     eventBus.$emit('data-loaded',true);
          // })
          // console.log('Data loaded!');
      })
      .catch((error) => {
          console.log(error)
      })
    },
    loadPages(){
      axios.get('http://www.modepharm.pl/cms/wp-json/wp/v2/pages/?per_page=100')
      .then((response) => {
          // reverse data because of adding this to object in next step
          this.pagesArray = response.data;
          response.data = response.data.reverse();
          this.pages = [];
          for(let i=0;i<response.data.length;i++){
              let obj = {
                  [response.data[i].slug]: response.data[i]
              };
              this.pages = Object.assign(obj, this.pages);
          }
          this.pagesLoaded = true;
          // this.dataLoaded = true;
          // do in next thick, vue must see !isLoading is true
          // this.$nextTick(()=>{
          //     eventBus.$emit('data-loaded',true);
          // })
          // console.log('Data loaded!');
      })
      .catch((error) => {
          console.log(error)
      })
    }
  },
  created(){
    this.loadPosts();
    this.loadPages();
  }
}
</script>

<style lang="scss">
#app {
  text-align: center;
  margin-top: 60px;
  nav{
    a{
      margin: 0 10px;
      text-decoration: none;
      color: #000;
      &:hover{
        // font-weight: 700;
        color: blue;
      }
    }
    a.router-link-active{
      color: blue;
    }
  }
}
</style>
