<script>
	import { Engine } from '$lib/data-engine/engine';
	import { onMount } from 'svelte';
	import '../app.css';

	let engine;

	onMount(() => {
		engine = new Engine();
	});
</script>

<main
	class="dark:ctp-mocha
	bg-neutral-100 dark:bg-neutral-900
	h-full w-full
	flex flex-col md:flex-row"
>
	<slot />
</main>

<style lang="scss">
	/* ///////////////////////////////////////////////////////////////////// */

	@import '$lib/styling/material-theme/css/theme.css';
	@import '$lib/styling/fonts.css';

	/* ///////////////////////////////////////////////////////////////////// */

	:global(html, body) {
		padding: 0;
		margin: 0;
		height: 100%;

		overflow: hidden;

		background: var(--md-sys-color-background);
		color: var(--md-sys-color-on-background);
	}

	/* ///////////////////////////////////////////////////////////////////// */

	// ::-webkit-scrollbar {
	// 	display: none;
	// }

	/* ///////////////////////////////////////////////////////////////////// */
</style>
