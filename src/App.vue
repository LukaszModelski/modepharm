<template>
  <div id="app">
    <h1>Modepharm</h1>
    <router-link to="/page/test">Page</router-link>
    <router-link to="/hello">Hello</router-link>
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
        dataLoaded: false
    }
  },
  methods: {
    loadPosts(){
      axios.get('http://www.modepharm.pl/wp-json/wp/v2/posts/?per_page=100')
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
          this.dataLoaded = true;
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
      axios.get('http://www.modepharm.pl/wp-json/wp/v2/pages/?per_page=100')
      .then((response) => {
          // reverse data because of adding this to object in next step
          response.data = response.data.reverse();
          this.pages = [];
          for(let i=0;i<response.data.length;i++){
              let obj = {
                  [response.data[i].slug]: response.data[i]
              };
              this.pages = Object.assign(obj, this.pages);
          }
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

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
