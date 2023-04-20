<script>
	import Backdropcard from '$lib/backdropcard.svelte';
	import { onMount } from 'svelte';
	import { quadInOut } from 'svelte/easing';
	import { append } from 'svelte/internal';
	import { fade, slide } from 'svelte/transition';

	let time = new Date();

	$: formatted = time.toLocaleTimeString();

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	});

	let backgroundUrl = 'https://pbs.twimg.com/media/FNgM9LJXMAYiE_4?format=jpg&name=large';
	let sizing = 'cover';
	let position = 'center';
	let textColor = 'white';

	let settingsOpen = false;

	/**
	 * @type {string[]}
	 */
	let backdrops = [
		'https://pbs.twimg.com/media/FNgM9LJXMAYiE_4?format=jpg&name=large',
		'https://pbs.twimg.com/media/FUll2URXsAA-pRA?format=jpg&name=large',
		'https://pbs.twimg.com/media/FjuNEjnWYAADZJq?format=jpg&name=large',
        'https://pbs.twimg.com/media/Fd68BhYaMAEGvy1?format=jpg&name=medium',
        'https://pbs.twimg.com/media/FSfnqQfWQAA11PT?format=jpg&name=4096x4096'
	];

	let bookmarks = [
		{
			url: '/',
			icon: 'icon.png',
			name: 'test'
		},
		{
			url: 'https://autodash.vercel.app/',
			icon: 'autodashalt.png',
			name: 'test'
		},
		{
			url: 'http://thefireflyer.me/homeportal/',
			icon: 'homeportal.png',
			name: 'test'
		}
	];

	let bookmarkDisplay = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="
    backcover
    flex grow
    flex-col
    bg-no-repeat
    p-4 md:p-7
    relative"
	style="
background-image: url({backgroundUrl});
background-size: {sizing};
background-position: {position};
"
>
	<h1
		class="
    hidden md:block
    py-6 text-6xl font-semibold text-right"
		style="color: {textColor}"
	>
		{formatted}
	</h1>

	{#if bookmarkDisplay}
		<div class="flex justify-end">
			<div
				class="
        md:max-w-sm
        grid grid-flow-col
        justify-evenly
        gap-3
        p-3
        grow md:grow-0
        backdrop-brightness-50
        rounded-lg
        overflow-x-scroll snap-x
        "
			>
				{#each bookmarks as bookmark}
					<a href={bookmark.url} class="icon scroll-ml-3 snap-start">
						<img src={bookmark.icon} class="icon" alt={bookmark.name} />
					</a>
				{/each}
			</div>
		</div>
	{/if}

	<div class="grow" />

	<div class="flex">
		<a href="/" class="flex items-center" style="color:{textColor}">
			<span class="text-3xl material-icons-round"> arrow_back </span>
		</a>

		<div class="grow" />

		<h1
			class="
        z-10
        rounded-full
        text-3xl text-right
        material-icons-outlined"
			style={settingsOpen ? `` : `color: ` + textColor}
			on:click={() => {
				settingsOpen = !settingsOpen;
			}}
		>
			{#if settingsOpen}
				save
			{:else}
				settings
			{/if}
		</h1>
	</div>

	{#if settingsOpen}
		<div
			class="
    absolute
    w-full h-full
    top-0 left-0
    p-2 md:p-4
    flex justify-end
    backdrop-brightness-50
    backdrop-blur
    flex"
			transition:fade
		/>
		<div
			class="
    absolute
    w-full h-full
    right-0 bottom-0
    p-2 md:p-4
    flex justify-end
    flex
    overflow-hidden"
			transition:slide
		>
			<div
				class="
            settings grow
            flex flex-col gap-3
            bg-neutral-100 dark:bg-neutral-900
            rounded-xl z-0
            p-3
            
            justify-center
            md:justify-start"
			>
				<h2 class="text-3xl">Settings</h2>
				<div
					class="
                flex grow
                flex-col gap-3
                justify-start
                md:justify-start
                overflow-x-hidden
                overflow-y-scroll"
				>
					<div class="py-1">
						<div class="w-full h-px bg-black dark:bg-neutral-600" />
					</div>

					<div
						class="
                        justify-center
                        justify-items-center
                        md:justify-start
                        md:w-fit
                        grid md:flex
                        gap-5
                        grid-cols-2
                        flex-row flex-wrap
                "
					>
						{#each backdrops as backdrop (backdrop)}
							<Backdropcard
								{backdrop}
								{backgroundUrl}
								onSelect={() => {
									backgroundUrl = backdrop;
								}}
								onRemove={() => {
									backdrops = backdrops.filter((item) => item != backdrop);
								}}
							/>
						{/each}
						<div
							class="
                    backdrop-option 
                    bg-neutral-200 dark:bg-neutral-800
                    rounded-lg
                    flex justify-center items-center"
							on:click={() => {
								navigator.clipboard.readText().then((url) => {
									if (url != '' && url != null) {
										if (backdrops.findIndex((item) => item === url) == -1) {
											backdrops = [...backdrops, url];
										}
									}
								});
							}}
						>
							<span class="material-icons-outlined"> add </span>
						</div>
					</div>

					<div class="py-1">
						<div class="w-full h-px bg-black dark:bg-neutral-600" />
					</div>

					<label>
						<input type="checkbox" bind:checked={bookmarkDisplay} />
						Show bookmarks
					</label>
					{#if bookmarkDisplay}
						<div
							class="
                        flex flex-col gap-3"
							transition:slide
						>
							{#each bookmarks as bookmark}
								<div
									class="flex flex-col md:flex-row
                            gap-3
                            bg-neutral-200 dark:bg-neutral-800
                            p-3 rounded-md
                            md:items-center"
								>
									<label>
										<input type="text" bind:textContent={bookmark.name} contenteditable />
										name
									</label>
									<label>
										<input type="text" bind:textContent={bookmark.url} contenteditable />
										url
									</label>
									<label>
										<input type="text" bind:textContent={bookmark.icon} contenteditable />
										icon
									</label>
									<div class="grow" />
									<div class="flex justify-center">
										<span class="text-2xl material-icons-outlined"> delete </span>
										<span class="md:hidden text-lg"> delete </span>
									</div>
								</div>
							{/each}
						</div>
					{/if}
				</div>

				<div class="flex items-center">
					<a href="/" class="flex items-center">
						<span class="text-2xl px-2 material-icons-round"> arrow_back </span>
						<span class="text-xl"> Apps </span>
					</a>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	.backdrop-option {
		width: 150px;
		height: 100px;
	}

	.bookmarks {
		max-width: 320px;
	}

	.icon {
		width: 64px;
		width: 64px;
		min-height: 64px;
		min-height: 64px;
	}
</style>
