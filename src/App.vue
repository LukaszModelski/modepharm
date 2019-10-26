<template>
  <div id="app">
    <template v-if="fullDataLoaded">
      <Menu :menu="fullData.menu"/>
    </template>
    <div id="main-content">
      <div class="container">
        <router-link :to="{ path: '/' }">
          <h1 class="company-name">Modepharm</h1>
        </router-link>
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
  metaInfo: {
    title: 'Modepharm',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
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
  color: $gray;
  #app {
    font-size: 15px;
    margin-top: 4rem;
    margin-bottom: 4rem;
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
