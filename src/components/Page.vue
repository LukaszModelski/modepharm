<template>
	<div id="page-single" class="page" v-if="this.$parent.fullDataLoaded">
		<h1>{{pageObject.post_title}}</h1>
		<div class="breadcrumbs">
			<router-link :to="{ path: '/' }" class="breadcrumb-item">Strona główna</router-link> / 
			<router-link :to="{ path: '/' + parentPage.post_name }" class="breadcrumb-item">{{parentPagetTitle}}</router-link> / 
			<span class="breadcrumb-item">{{pageObject.post_title}}</span>
		</div>
		<picture v-if="pageObject.main_image" class="main-image">
			<source media="(min-width: 1468px)" :srcset="pageObject.main_image.url">
			<source media="(min-width: 1100px)" :srcset="pageObject.main_image.sizes.large">
			<source media="(min-width: 1px)" :srcset="pageObject.main_image.sizes.medium_large">
			<img :src="pageObject.main_image.url" :alt="pageObject.main_image.alt">
		</picture>
		<div class="wyswyg-content" v-html="pageObject.post_content"></div>
	</div>
</template>

<script>
	export default {
		name: 'Page',
		props: {
			
		},
		data () {
			return {
        fullData: Object,
        pageObject: Object,
        parentPage: Object,
        parentPagetTitle: ''
			}
		},
		// watch: {
		//     '$route' (to, from) {
		//         if(this.$route.params.slug2){
		//             this.pageObject = this.$parent.fullData.pages[this.$route.params.slug + '/' + this.$route.params.slug2];
		//         } else {
		//             this.pageObject = this.$parent.fullData.pages[this.$route.params.slug];
		//         }
		//     }
		// },
		created: function () {
      this.fullData = this.$parent.fullData;
     
			if(this.$route.params.slug2){
				this.pageObject = this.$parent.fullData.pages[this.$route.params.slug + '/' + this.$route.params.slug2];
			} else {
				this.pageObject = this.$parent.fullData.pages[this.$route.params.slug];
      }

      this.parentPage =  this.findPageByID(this.pageObject.post_parent, this.fullData.pages);
      this.parentPagetTitle = this.parentPage.post_title;
		},
		destroyed(){
      this.closeMenuMixin();
		}
	}
</script>

<style lang="scss" scoped>
	#page-single {
		.main-image {
			img {
				width: 100%;
				height: auto;
				border-radius: 0.5rem;
			}
		}
	}
</style>
