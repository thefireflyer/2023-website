<script>
	import { page } from '$app/stores';

	/**
	 * @type {string}
	 */
	export let pathname;
</script>

<a href={pathname} class="p-2 md:p-0">
	<div class="w-full h-max grid items-center justify-center grid-rows-1">
		<span
			class="
    w-full text-center
    {$page.url.pathname == pathname
				? `
        material-icons
        `
				: `material-icons-outlined`}
    "
		>
			<slot />
		</span>
	</div>
</a>

<style>
</style>
