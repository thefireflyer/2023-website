<script>
	/**
	 * @type {string}
	 */
	export let backgroundUrl;

	/**
	 * @type {string}
	 */
	export let backdrop;

	/**
	 * @type {any}
	 */
	export let onSelect;

	/**
	 * @type {any}
	 */
	export let onRemove;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="
                {backdrop == backgroundUrl ? `ring-1` : ``}
                ring-black dark:ring-white
                backdrop-option 
                bg-neutral-200 dark:bg-neutral-800
                rounded-lg
                flex justify-center items-center
                overflow-hidden"
>
	<div
		class="
                    backdrop-option
                    bg-neutral-200 dark:bg-neutral-800
                    rounded-lg
                    flex justify-end items-start
                    bg-cover
                    bg-center
                    bg-no-repeat"
		style="background: url({backdrop}); background-size: cover;"
		on:click={onSelect}
	>
		<span
			class="
                            rounded-bl-lg
                            p-1
                            backdrop-brightness-150
                            dark:backdrop-brightness-50
                            material-icons-outlined"
			on:click={onRemove}
		>
			remove
		</span>
	</div>
</div>

<style>
	.backdrop-option {
		width: 150px;
		height: 100px;
	}
</style>
