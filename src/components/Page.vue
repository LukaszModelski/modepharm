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
	import { stripHtml } from "../utils/utils.js";
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
		metaInfo () {
			return {
				title: `Modepharm - ${this.pageObject.post_title}`,
				meta: [
					{ name: 'description', content: this.metaDesc }
				]
			}
		},
		created: function () {
			this.fullData = this.$parent.fullData;
     
			if(this.$route.params.slug2){
				this.pageObject = this.$parent.fullData.pages[this.$route.params.slug + '/' + this.$route.params.slug2];
			} else {
				this.pageObject = this.$parent.fullData.pages[this.$route.params.slug];
			}

			if(!this.pageObject) {
				this.$router.push('/page-not-found');
			}

			this.parentPage =  this.findPageByID(this.pageObject.post_parent, this.fullData.pages);
			this.parentPagetTitle = this.parentPage.post_title;
			this.metaDesc = stripHtml(this.pageObject.post_content);
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
