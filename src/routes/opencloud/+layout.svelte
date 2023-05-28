<script lang="ts">
	import { user } from '$lib/supabase';
	import { quintInOut } from 'svelte/easing';
	import { fade, fly } from 'svelte/transition';
	import Transition from '$lib/transition.svelte';
	import { navigating } from '$app/stores';
	import { goto } from '$app/navigation';
	import type { LayoutData } from './$types';
	
	export let data: LayoutData

	let menuOpen = false;

    let searchQuery = data.url.searchParams.get("q") ?? "";

	navigating.subscribe((nav) => {
		// console.log(data.url)
		console.log("navigating to:",data.url.searchParams)
	});

</script>

<div
	class="relative
grow p-3 gap-3
flex flex-col"
>
	<header
		class="h-10 w-full
    flex flex-row justify-between
    gap-1 md:gap-3"
	>
		<a href="/" class="flex items-center hidden md:block">
			<span class="material-icons-round text-3xl"> apps </span>
		</a>
		<div class="md:grow" />

		<div class="grow flex relative">
			<form
				action=""
				aria-label="search"
				class="grow p-1 pl-2 z-30
				flex
				rounded-full
				min-w-0
				justify-stretch
				gap-1
				overflow-hidden
				border border-neutral-400 dark:border-neutral-600"
			>
				<div class="flex items-center">
					<span class="material-icons-round text-2xl text-neutral-500"> search </span>
				</div>

				<input
					type="search"
					name="q"
					aria-label="search"
					bind:value={searchQuery}
					placeholder="Search for anything"
					class="bg-transparent
					overflow-x-scroll
					grow
					align-top text-xl"
				/>
				{#if searchQuery != ''}
					<button
						type="submit"
						in:fly={{
							easing: quintInOut,
							x: 100,
							duration: 200,
							opacity: 0
						}}
						out:fly={{
							easing: quintInOut,
							x: 100,
							duration: 200,
							opacity: 0
						}}
						class="flex items-center bg-neutral-600 dark:bg-neutral-400 text-white dark:text-black rounded-full"
					>
						<span class="material-icons-round text-3xl"> navigate_next </span>
					</button>
				{/if}
			</form>
			{#if searchQuery != '' && data.searchResults}
				<div class="absolute top-0 left-0 w-full h-fit 
				z-10 bg-neutral-200 dark:bg-neutral-800 rounded-2xl
				flex flex-col overflow-hidden">
					<div class="w-full h-10"></div>
					{#each data.searchResults as item}
						<a href={item.slug} class="w-full h-10 flex px-3 hover:bg-neutral-300 dark:hover:bg-neutral-700 items-center">
							<span class="text-lg">{item.name}</span>
						</a>
					{/each}
				</div>
			{/if}
		</div>

		<div class="md:grow" />
		<button
			class="flex items-center"
			on:click={() => {
				menuOpen = !menuOpen;
			}}
		>
			<span class="material-icons-round text-3xl"> {menuOpen ? `clear` : `menu`} </span>
		</button>
	</header>

	<div class="grow flex relative">
		{#if $user == "loading"}
			<div
				class="
		grow flex justify-center items-center
		rounded-b-xl
		slot-container
		relative
		bg-neutral-100 dark:bg-neutral-900
		overflow-hidden"
			>
				<span
					class="
			w-14 h-14
			flex justify-center items-center
			rounded-full
			material-icons-outlined text-4xl
			text-gray-500 dark:text-gray-400"
				>
					autorenew
				</span>
			</div>
		{:else}
			<div
				class="
        grow
        rounded-b-xl
        slot-container
        relative
        bg-neutral-100 dark:bg-neutral-900
        overflow-hidden"
			>
				<Transition
					url={data.url.pathname}
					classes="
            absolute top-0 left-0
            w-full h-full
            flex
            overflow-hidden flex-col md:flex-row"
					animated={true}
				>				
					<slot />
				</Transition>
			</div>
		{/if}
	</div>

	{#if menuOpen}
		<div
			transition:fade={{
				easing: quintInOut,
				duration: 200
			}}
			on:click={() => {
				menuOpen = false;
			}}
			class="absolute w-full h-full top-0 left-0 rounded z-40"
			style="background-color: rgba(0,0,0,0.5);"
		/>

		<div
			in:fly={{
				easing: quintInOut,
				x: 100,
				duration: 200,
				opacity: 0
			}}
			out:fly={{
				easing: quintInOut,
				x: 100,
				duration: 200,
				opacity: 0
			}}
			class="w-4/5 md:w-96 h-full
        absolute top-0 right-0
        flex bg-neutral-100 dark:bg-neutral-900
        rounded-l-3xl z-50"
		/>
	{/if}
</div>
