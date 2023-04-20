<script>
	import "../app.css";
</script>

<main class="mocha
	bg-neutral-100 dark:bg-neutral-900
	h-full w-full
	flex flex-col md:flex-row">
	<slot />
</main>

<style>
	@import '../lib/material-theme/css/theme.css';

	:global(html, body) {
		padding: 0;
		margin: 0;
		height: 100%;

		overflow: hidden;

		background: var(--md-sys-color-background);
		color: var(--md-sys-color-on-background);
		font-family: 'Open Sans', sans-serif;
	}

	::-webkit-scrollbar {
		display: none;
	}

</style>
