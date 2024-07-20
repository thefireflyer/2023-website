<script lang="ts">
	///////////////////////////////////////////////////////////////////////////

	export let header: String;

	export let date: String;

	///////////////////////////////////////////////////////////////////////////
</script>

<svelte:head>
	<title>{header} | {date} | thefireflyer</title>
</svelte:head>

<div class="root dark:bg-ctp-crust">
	<header>
		<h1>{header}</h1>
	</header>

	<div class="content">
		<slot />
	</div>

	<footer>
		<i><a href="/">thefireflyer</a></i>
	</footer>
</div>

<style lang="scss">
	$primary: rgb(250, 230, 243);
	$primary-o50: transparentize($primary, 0.5);
	$primary-o60: transparentize($primary, 0.6);
	$primary-o70: transparentize($primary, 0.7);
	$primary-o80: transparentize($primary, 0.8);
	$primary-o90: transparentize($primary, 0.9);

	.root {
		overflow-y: scroll;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2em;

		flex-grow: 1;

		padding: 2em 2em;

		font-family: 'Linux Libertine', Times, serif;

		font-size: 16pt;
		// font-size: 18pt;

		// line-height: 1.4em;

		.placeholder {
			// opacity: 70%;
		}

		.footnote {
			text-align: center;
			opacity: 70%;
			font-style: italic;

			a {
				text-decoration-color: $primary-o70;
				text-decoration-style: dotted;
			}
		}

		h1 {
			font-family: 'Cormorant Garamond', Times, Serif;
			font-size: 1.75em;
			// font-style: oblique;
			opacity: 70%;
			font-weight: bold;
		}

		h2 {
			// font-family: 'Cormorant Garamond', Times, Serif;
			font-weight: bold;
			// font-size: 20pt;
			padding-bottom: 0.5em;
		}

		header {
			text-align: center;
		}

		footer {
			// display: flex;
			text-align: center;
			// background: #000;
			width: 100%;

			text-align: center;
			opacity: 70%;
			font-style: italic;

			a {
				text-decoration-color: $primary-o70;
				text-decoration-style: dotted;
			}
		}

		.content {
			flex-grow: 1;
			// display: flex;
			// flex-direction: column;
			// align-items: center;

			width: 50ch;
			max-width: 100%;
		}

		.icon {
		}

		a {
			text-decoration: underline 2px $primary-o80;
		}

		a:hover {
			text-decoration-color: $primary-o50;
			background-color: $primary-o90;
		}

		ul {
			ul {
				// padding-left: 2em;
				list-style-type: circle;
				padding-bottom: 1.5em;

				li {
					// font-size: 18pt;
					font-weight: normal;
					padding-bottom: 0em;
					opacity: 80%;
				}
			}
		}

		p {
			padding-top: 0.3em;
			padding-bottom: 0.3em;
		}

		.logo {
			width: 30ch;
			height: 30ch;
		}

		@media screen and (min-width: 50em) {
			.content {
				font-size: 16pt;
				width: 65ch;
			}
		}

		@media screen and (min-width: 75em) {
		}
	}
</style>
