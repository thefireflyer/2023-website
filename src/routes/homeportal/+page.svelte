<script lang="ts">
	import { db, KeyValuePair, loading, SetupStorage } from '$lib/data/storagesys';
	import { onMount } from 'svelte';
	import { quadInOut, quintInOut } from 'svelte/easing';
	import { fade, fly, slide } from 'svelte/transition';

	let time = new Date();

	$: formatted = ml_time
		? time.getHours().toString() + ':' + time.getMinutes().toString()
		: (time.getHours() > 12 ? time.getHours() - 12 : time.getHours()).toString() +
		  ':' +
		  time.getMinutes().toString();

	onMount(() => {
		const interval = setInterval(() => {
			time = new Date();
		}, 1000);

		SetupStorage();

		return () => {
			clearInterval(interval);
		};
	});

	loading.subscribe((v) => {
		if (!v) {
			KeyValuePair('userdata', 'homeportal').then(
				(val) => {
					if (val) {
						console.log(val.data);
						backgroundUrl = val.data.bg;
						ml_time = val.data.ml_time;

						file = val.data.file;
						if (file != null && file != undefined && backgroundUrl.startsWith('blob:')) {
							backgroundUrl = URL.createObjectURL(file);
						}
					}
				},
				(val) => {
					console.error(val);
				}
			);
		}
	});

	let ml_time = false;
	let backgroundUrl = 'https://pbs.twimg.com/media/FNgM9LJXMAYiE_4?format=jpg&name=large';
	let sizing = 'cover';
	let position = 'center';
	let textColor = 'white';

	let settingsOpen = false;

	let filelist: FileList | null | undefined;
	let file: File | null | undefined;
</script>

<svelte:head>
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&display=swap" rel="stylesheet">

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

	<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet">
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

	<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />

</svelte:head>

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
    py-3
    md:py-[2.5vh] text-[5rem] font-black text-right"
		style="color: {textColor}"
	>
		{formatted}
	</h1>

	<div class="grow" />

	<div class="flex">
		<a href="/" class="flex items-center" style="color:{textColor}">
			<span class="text-[1.7rem] material-icons-round"> arrow_back </span>
		</a>

		<div class="grow" />

		<h1
			class="
        z-10
        rounded-full
        text-[1.7rem] text-right
		material-icons-outlined"
			style="color:{textColor}"
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
			transition:fade={{
				easing: quintInOut,
				duration: 200
			}}
			on:click={() => {
				settingsOpen = false;

				console.log(backgroundUrl);

				KeyValuePair('userdata', 'homeportal', {
					bg: backgroundUrl,
					ml_time: ml_time,
					file: file
				}).then(
					(val) => {},
					(val) => {
						console.error(val);
					}
				);
			}}
			class="absolute w-full h-full top-0 left-0 z-40"
			style="background-color: rgba(0,0,0,0.32);"
		/>

		<div
			in:fly={{
				easing: quintInOut,
				y: 100,
				duration: 200,
				opacity: 0
			}}
			out:fly={{
				easing: quintInOut,
				y: 100,
				duration: 200,
				opacity: 0
			}}
			class="bottom-sheet-container
	absolute bottom-0 left-0
	z-50
	flex justify-center pointer-events-none"
		>
			<div class="bottom-sheet flex bg-neutral-200 dark:bg-ctp-crust pointer-events-auto">
				<div class="grow flex flex-col justify-evenly gap-2">
					<div
						class="flex flex-row bg-neutral-200 dark:bg-ctp-mantle p-1 px-3 gap-2 border border-ctp-base rounded-full"
					>
						<span
							class="
						text-2xl
						material-icons pointer-events-none">link</span
						>
						<input
							type="text"
							class="bg-ctp-mantle grow"
							bind:value={backgroundUrl}
							placeholder="Background url"
						/>
					</div>
					<input
						type="file"
						id="file"
						name="file"
						bind:files={filelist}
						on:change={() => {
							console.log(filelist);
							file = filelist?.item(0);
							if (file != null && file != undefined) {
								backgroundUrl = URL.createObjectURL(file);
							}
						}}
						class="hidden"
					/>
					<button
						class="icon-button flex flex-row items-center"
						on:click={() => {
							document.getElementById('file')?.click();
						}}
					>
						<span
							class="
							icon-b
							material-icons">upload</span
						>
						<span>Upload background</span>
					</button>
					<button
						class="icon-button flex flex-row items-center"
						on:click={() => {
							ml_time = !ml_time;
						}}
					>
						<span
							class="
						icon-b
						material-icons"
						>
							hourglass_empty
						</span>
						<span>Switch time format</span>
					</button>
				</div>
			</div>
		</div>
	{/if}
</div>

<style>
	/* .icon {
		width: 64px;
		width: 64px;
		min-height: 64px;
		min-height: 64px;
	} */

	.bottom-sheet-container {
		width: 100%;
	}

	.bottom-sheet {
		width: 100%;
		max-width: 640px;

		/* height: 80px; */
		border-radius: 28px 28px 0 0;
		padding-top: 12px;
		padding-left: 12px;
		padding-right: 12px;
		/* padding-left: 16px;
		padding-right: 16px; */
		padding-bottom: 16px;
	}
	.icon-button {
		height: 40px;
		/* width: 40px; */
		gap: 4px;
		font-size: 18px;
	}

	.icon-b {
		font-size: 32px;
		height: 32px !important;
		max-height: 32px !important;
	}
</style>
