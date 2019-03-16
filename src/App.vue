<template>
  <div id="app">
    <h1>Modepharm</h1>
    <template v-if="menuLoaded && pagesLoaded">
      <Menu :menu="menu"/>
    </template>
    <hr>
    <template v-if="pagesLoaded">
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view></router-view> 
      </transition>
    </template>
  </div>
</template>

<script>
import axios from 'axios';
import Page from './components/Page.vue'
import Menu from './components/Menu.vue'

export default {
  name: 'app',
  components: {
    Page,
    Menu
  },
  data () {
    return {
        posts: Object,
        pages: Object,
        menu: Array,
        postsLoaded: false,
        pagesLoaded: false,
        menuLoaded: false
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
      })
      .catch((error) => {
          console.log(error)
      })
    },
    loadPages(){
      axios.get('http://www.modepharm.pl/cms/wp-json/modepharm/pages')
      .then((response) => {
          this.pages = response.data;
          this.pagesLoaded = true;
      })
      .catch((error) => {
          console.log(error)
      })
    },
    loadMenu(){
      axios.get('http://www.modepharm.pl/cms/wp-json/modepharm/menu')
      .then((response) => {
          this.menu = response.data;
          this.menuLoaded = true;
      })
      .catch((error) => {
          console.log(error)
      })
    }
  },
  created(){
    this.loadPosts();
    this.loadPages();
    this.loadMenu();
  }
}
</script>

<style lang="scss">
body{
  position: absolute;
  margin: 0;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  overflow-x: hidden;
  #app {
    font-size: 16px;
    text-align: center;
    margin-top: 60px;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>
