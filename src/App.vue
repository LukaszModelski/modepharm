<template>
  <div id="app">
    <template v-if="fullDataLoaded">
      <Menu :menu="fullData.menu"/>
    </template>
    <div id="main-content">
      <h1>Modepharm</h1>
      <hr>
      <template v-if="fullDataLoaded">
          <router-view :key="$route.path"></router-view> 
      </template>
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
      })
      .catch((error) => {
          console.log(error)
      })
    }
  },
  created(){
    this.loadFullData();
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
    font-size: 15px;
    text-align: center;
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
