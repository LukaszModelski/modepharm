<template>
  <div id="page-not-found">
    <h1>Stona nie została znaleziona</h1>
    <router-link :to="{ path: '/' }" class="breadcrumb-item">Wróć na stronę główną.</router-link>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    metaInfo () {
			return {
				title: `Modepharm - Strona nie została znaleziona`,
				meta: [
					{ name: 'robots', content: 'noindex' }
				]
			}
		}
  }
</script>

<style lang="scss" scoped>
  #page-not-found {
    
  }
</style>
