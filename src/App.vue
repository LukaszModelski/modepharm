<template>
  <div id="app">
    <template v-if="fullDataLoaded">
      <Menu :menu="fullData.menu"/>
    </template>
    <div id="main-content">
      <div class="container">
        <router-link :to="{ path: '/' }">
          <h2 class="company-name">modepharm</h2>
        </router-link>
        <Loader v-if="!fullDataLoaded"/>
        <transition name="fade" mode="out-in">
          <router-view :key="$route.path" v-if="fullDataLoaded"></router-view> 
        </transition>
      </div>
    </div>
    <Footer/>
    <Cookies/>
  </div>
</template>

<script>
import axios from 'axios'
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'
import Cookies from './components/Cookies.vue'
import Loader from './components/Loader.vue'

export default {
  name: 'app',
  components: {
    Menu,
    Footer,
    Cookies,
    Loader
},
  data () {
    return {
        fullData: null,
        fullDataLoaded: false
    }
  },
  methods: {
    loadFullData(){
      const wordPressEndpoint = (window.location.hostname === 'localhost')
        ? 'https://www.modepharm.pl/cms/wp-json/modepharm/all'
        : window.location.origin + '/cms/wp-json/modepharm/all';
      axios.get(wordPressEndpoint)
        .then((response) => {
            this.fullData = response.data;
            this.fullDataLoaded = true;
            window.addEventListener('keyup', this.closeMenu);
        })
        .catch((error) => {
            alert(error);
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
@import 'styles/breadcrumbs';
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
    #main-content.menu-active{
      opacity: 0.25;
    }
    #main-content{
      transition: opacity 0.3s ease-in;
      margin-bottom: 50px;
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
