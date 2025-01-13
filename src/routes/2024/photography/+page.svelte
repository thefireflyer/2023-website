<script lang="ts">
	import { navigating, page } from '$app/stores';

	let images = [...Array(97).keys()];
</script>

<svelte:head>

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

	<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet">
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

	<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />

</svelte:head>

<div
	class="overflow-hidden
grow flex flex-col relative
dark:bg-black"
>
	<div class="flex flex-row p-3 pb-0">
		<div class="flex flex-row justify-center gap-3">
			<span class="text-2xl material-icons text-center">photo</span>
			<div class="text-xl">Archives</div>
		</div>
		<div class="grow" />
		<a
			href="/"
			class="
    md:right-6
    rounded-full
    px-1
    flex justify-center"
		>
			<span class="text-2xl material-icons text-center"> clear </span>
		</a>
	</div>

	<div
		class="grow flex flex-col lg:flex-row
    overflow-y-scroll md:overflow-y-hidden overflow-x-hidden p-1 py-3 gap-6"
	>
		<div
			class="
        grow flex flex-col
        overflow-y-scroll snap-y p-3 gap-6
        md:hidden"
		>
			{#each images as image}
				<a
					class="shrink-0 grow flex w-full h-max md:w-max md:h-full lg:w-full lg:h-max snap-start"
					href="#{image}"
				>
					<!-- svelte-ignore a11y-missing-attribute -->
					<img
						src="/processed_photos/{image}.jpg"
						class=" 
                w-full h-full {($page.url.hash.split('#')[1] || '0') == image.toString()
							? 'md:brightness-75'
							: 'md:brightness-50'}"
					/>
				</a>
			{/each}
			<div class="w-full snap-start" />
		</div>
		<div
			class="
        hidden md:flex
        md:grow-0
        md:order-1
        md:w-full md:h-48
        md:flex-row md:p-3 md:gap-6
        md:overflow-x-scroll md:snap-x
        lg:h-auto lg:flex-col
        lg:w-min-80 lg:w-64 lg:w-64 lg:w-max-80
        lg:overflow-x-hidden lg:overflow-y-scroll lg:snap-y"
		>
			{#each images as image}
				<a
					class="shrink-0 grow flex w-full h-max md:w-max md:h-full lg:w-full lg:h-max snap-start"
					href="#{image}"
				>
					<!-- svelte-ignore a11y-missing-attribute -->
					<img
						src="/thumbnails/{image}.jpg"
						class=" 
                w-full h-full {($page.url.hash.split('#')[1] || '0') == image.toString()
							? 'md:brightness-75'
							: 'md:brightness-50'}"
					/>
				</a>
			{/each}
		</div>
		<div class="grow flex flex-col lg:pr-7 lg:order-2 collapse md:visible">
			<div
				class="grow
            flex flex-col
            primary"
				style="background-image: url('/processed_photos/{$page.url.hash.split('#')[1] ||
					'0'}.jpg');"
			>
				<!-- <div class="flex w-full h-full"> -->
				<!-- svelte-ignore a11y-missing-attribute -->
				<!-- <img
                        src="/processed_photos/{$page.url.hash.split('#')[1] || '0'}.jpg"
                        class="rounded-xl"
                    /> -->
				<!-- </div> -->
			</div>
		</div>
	</div>
</div>

<style>
	.primary {
		background-size: contain;
		background-repeat: no-repeat;
		background-color: rgba(0, 0, 0, 0);
		background-position: center;
	}
</style>
