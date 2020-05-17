<template>
  <div id="page-home" v-if="this.$parent.fullDataLoaded">
    <h1>{{fullData['home-page']['post_title']}}</h1>
    <div class="breadcrumbs">
      <span class="breadcrumb-item">Strona główna /</span>
    </div>
    <div class="wyswyg-content" v-html="fullData['home-page']['post_content']"></div>
    <section class="grid-tiles">
      <div ref="tile" v-for="(item, name, i) in fullData.menu" v-if="item.parent == 0" class="tile" v-bind:style="{ backgroundImage: 'url(' + item['tile_img'] + ')' }">
        <router-link 
          v-if="item.type == 'page'"
          :to="{ path: '/' + item.full_slug }"
          class="tile__nav-item"
        >
          <h2>{{item.title}}</h2>
        </router-link>
        <!-- color from wp admin panel -->
        <!-- <div class="tile__color" v-bind:style="{ backgroundColor: item['tile_color'] }"></div> -->

        <!-- color from tiles-colors.js -->
        <div class="tile__color" v-bind:style="{ backgroundColor: tilesColors[i % tilesColors.length] }"></div>
      </div>
    </section>
  </div>
</template>

<script>
  import { tilesColors } from '../utils/tiles-colors.js';
  import { stripHtml } from "../utils/utils.js";
  
  export default {
    name: 'Home',
    props: {
      
    },
    data () {
      return {
        fullData: null,
        tileHeight: '',
        tilesColors: tilesColors
      }
    },
    metaInfo () {
      return {
        title: this.fullData ? `Modepharm - ${this.fullData['home-page'].post_title}` : 'Modepharm',
        meta: [
          { name: 'description', content: this.metaDesc }
        ]
      }
    },
    created: function () {
      this.fullData = this.$parent.fullData;
      this.metaDesc = stripHtml(this.fullData['home-page'].post_content);
    },
    destroyed(){
      this.closeMenuMixin();
    }
  }
</script>

<style lang="scss" scoped>

@import '../styles/vars';
@import '../styles/global';
@import '../styles/grid-tiles';

</style>

