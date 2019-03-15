<template>
  <div id="app">
    <h1>Modepharm</h1>
    <nav v-if="menuLoaded && pagesLoaded">
      <div v-for="item in menu" :key="item.page_id">
        <router-link 
          v-if="item.parent == 0"
          :to="{ path: '/page/' + item.page_id }"
          class="nav-item"
        >
          {{item.title}}
        </router-link>
        <div class="dropdown">
          <router-link 
            v-for="subitem in menu" :key="subitem.page_id"
            v-if="subitem.parent == item.menu_id"
            :to="{ path: '/page/' + subitem.page_id }"
            class="nav-item"
          >
            {{subitem.title}}
          </router-link>
        </div>
      </div>
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
        menu: Array,
        postsLoaded: false,
        pagesLoaded: false,
        menuLoaded: false,
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
          this.menu= response.data;
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
#app {
  font-size: 16px;
  text-align: center;
  margin-top: 60px;
  nav{
    div{
      a{
        margin: 0 10px;
        text-decoration: none;
        font-weight: 700;
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
    .dropdown{
      a{
        font-weight: 400;
      }
    }
  }
}
</style>
