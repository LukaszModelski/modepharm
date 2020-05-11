<template>
	<div id="footer">
		<div class="container">
			<div class="contact-form">
				<h2>Wyślij zapytanie</h2>
				<iframe 
					src="http://modepharm.pl/contact-form/form.php">
				</iframe>
			</div>
			<div class="contact-details">
				<h2>Dane kontaktowe</h2>
				<p>Modepharm Jacek Modelski</p>
				<p>ul. Plauta 11, 60-461 Poznań,</p>
				<p>tel.: 607143434, 603163901</p>
				<p>email: biuro@modepharm.pl</p>
				<p>NIP: 7811215436</p>
			</div>
		</div>
	</div>
</template>

<script>

export default {
	data () {
		return {
			menuClosed: true,
			openDropdowns: {},
			menuActive: false
		}
	},
	methods: {

	}
}
</script>

<style  lang="scss" scoped>
@import '../styles/vars';

#footer {
	background-color: #f6f6f6;
	padding: 5rem 0 7rem;

	h2 {
		text-transform: uppercase;
		font-size: 1.25rem;
		letter-spacing: 4px;
		font-weight: 700;
	}

	.container {
		display: flex;
		flex-wrap: wrap;
	}

	.contact-form {
		width: 100%;
		@media screen and (min-width: $tablet) {
			width: 66.6%;
		}
	}

	.contact-details {
		width: 100%;
		@media screen and (min-width: $tablet) {
			width: 33.3%;
		}

		p {
			margin: 0;
		}
	}

	iframe {
		border: 0;
	}
}

</style>
