<template>
    <div id="page-category" v-if="this.$parent.fullDataLoaded">
      <h1>{{categoryObject.title}}</h1>
      <div class="breadcrumbs">
        <router-link :to="{ path: '/' }" class="breadcrumb-item">Strona główna</router-link> / 
        <span class="breadcrumb-item">{{categoryObject.title}}</span>
      </div>
      <div class="wyswyg-content" v-html="categoryObject.post_content"></div>
      <section class="grid-tiles grid-tiles--category">
        <div v-for="(item, name, i) in categoryObject['child-pages']" class="tile" v-bind:style="{ backgroundImage: 'url(' + item['tile_img'] + ')' }">
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
import { tilesColors } from "../utils/tiles-colors.js";
import { stripHtml } from "../utils/utils.js";

export default {
  name: 'Category',
  props: {
      
  },
  data () {
    return {
      fullData: Object,
      categoryObject: Object,
      tilesColors: tilesColors
    }
  },
  metaInfo () {
    return {
      title: `Modepharm - ${this.categoryObject.title}`,
      meta: [
        { name: 'description', content: this.metaDesc }
      ]
    }
  },
  watch: {

  },
  created: function () {
    this.fullData = this.$parent.fullData;
    this.categoryObject = this.fullData.menu[this.$route.params.slug];

    if(!this.categoryObject) {
      this.$router.push('/page-not-found');
    }
      
    this.categoryObject.post_content = this.fullData.pages[this.$route.params.slug].post_content;
    this.metaDesc = stripHtml(this.categoryObject.post_content);
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
