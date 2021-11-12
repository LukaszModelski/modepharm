<template>
	<div v-if="showCookies" id="cookies">
		<p>	Strona wykorzystuje pliki cookies w celu prawidłowego działania serwisu. Możesz określić warunki przechowywania lub dostępu do cookie w Twojej przeglądarce.</p>
		<button v-on:click="acceptCookies" class="accept-btn">Akceptuję</button>
	</div>
</template>

<script>
import Cookies from 'js-cookie';

export default {
	data () {
		return {
			showCookies: false
		}
	},
	methods: {
		acceptCookies() {
			Cookies.set('cookiesAccepted', true, { expires: 30 });
			this.showCookies = false;
		},
		checkCookies() {
			var cookiesAccepted = Cookies.get('cookiesAccepted');
			if(!cookiesAccepted) {
				this.showCookies = true;
			}
		}
	},
	created(){
    this.checkCookies();
  }
}
</script>

<style  lang="scss" scoped>
@import '../styles/vars';

#cookies {
	position: fixed;
	z-index: 9999;
	left: 0;
	bottom: 0;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	width: 100%;
	padding: 0 50px;
	color: #fff;
	background: $modepharm;
	font-size: 0.8rem;

	@media screen and (min-width: $tablet) {
		flex-wrap: nowrap;
	}

	p {
		margin: 20px 0;
		font-size: 0.8rem;

		@media screen and (min-width: $tablet) {
			font-size: 1rem;
		}
	}

	.accept-btn {
		color: #fff;
    background: #585858;
    width: auto;
		height: 40px;
		margin: 20px;
    padding: 0 25px;
		border-radius: 4px;
		border-width: 0;
    font-size: 14px;
    font-weight: bold;
    transition: all 0.3s;
    cursor: pointer;
		text-transform: uppercase;
		
		&:hover {
			background: #636363;
		}
	}
}

</style>
