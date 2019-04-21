<template>
  <div id="app">
    <template v-if="fullDataLoaded">
      <Menu :menu="fullData.menu" :menu2="fullData.menu2"/>
    </template>
    <div id="main-content">
      <div class="container">
        <h1 class="company-name">Modepharm</h1>
        <h1>Walidacja, kwalifikacje i jakość.</h1>
        <!-- <h1>Erat ut Sapien, mus curae, morbi dictum duis aenean auctor at Dictum.</h1> -->
        <p>Etiam quis viverra lorem, in semper lorem. Sed nisl arcu euismod sit amet nisi euismod sed cursus arcu elementum ipsum arcu vivamus quis venenatis orci lorem ipsum et magna feugiat veroeros aliquam. Lorem ipsum dolor sit amet nullam dolore.</p>
        <hr>
        <transition name="fade" mode="out-in">
          <router-view :key="$route.path" v-if="fullDataLoaded"></router-view> 
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Home from './components/Home.vue'
import Category from './components/Category.vue'
import Menu from './components/Menu.vue'
import Page from './components/Page.vue'

export default {
  name: 'app',
  components: {
    Home,
    Category,
    Menu,
    Page
  },
  data () {
    return {
        fullData: Object,
        fullDataLoaded: false,
    }
  },
  methods: {
    loadFullData(){
      axios.get('http://www.modepharm.pl/cms/wp-json/modepharm/all')
      .then((response) => {
          this.fullData = response.data;
          this.fullDataLoaded = true;
          window.addEventListener('keyup', this.closeMenu);
      })
      .catch((error) => {
          console.log(error)
      })
    },
    closeMenu(event){
      if(event.key === "Escape"){
        this.closeMenuMixin();
      }
    }
  },
  created(){
    this.loadFullData();
  }
}
</script>

<style lang="scss">
@import 'styles/fonts';
@import 'styles/vars';
@import 'styles/global';
body{
  position: absolute;
  overflow-x: hidden;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  color: $gray;
  #app {
    font-size: 15px;
    margin-top: 60px;
    #main-content.menu-active{
      opacity: 0.25;
    }
    #main-content{
      transition: opacity 0.3s ease-in;
    }
  }
}


// transition effect
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
