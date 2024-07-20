<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { LayoutData } from './$types';
	import { quintInOut } from 'svelte/easing';

	export let data: LayoutData;

	let menu_open = false;
	let sidebar_open = false;
</script>

<div
	class="dark:bg-ctp-crust
grow flex flex-col
relative overflow-hidden"
>
	<header class="p-3 flex gap-3 bg-ctp-mantle border-ctp-surface0 border-b border-px">
		<button
			class="hover:bg-ctp-surface1 rounded-md"
			style="width: 2em; height: 2em;"
			on:click={() => (menu_open = !menu_open)}
		>
			<span
				class="
                text-2xl
                material-symbols-outlined"
			>
				menu
			</span>
		</button>
		<button class="hover:bg-ctp-surface1 rounded-md" style="width: 2em; height: 2em;">
			<span
				class="
                text-2xl
                material-symbols-outlined"
			>
				search
			</span>
		</button>
		<div class="grow" />
		<button class="hover:bg-ctp-surface1 rounded-md" style="width: 2em; height: 2em;">
			<span
				class="
                text-2xl
                material-symbols-outlined"
			>
				more_horiz
			</span>
		</button>
		<button
			class="hover:bg-ctp-surface1 rounded-md"
			style="width: 2em; height: 2em;"
			on:click={() => (sidebar_open = !sidebar_open)}
		>
			<span
				class="
                text-2xl
                material-symbols-outlined"
			>
				dock_to_left
			</span>
		</button>
	</header>
	<div class="flex grow overflow-scroll">
		{#if menu_open}
			<div
				class="flex flex-col p-3 w-60 bg-ctp-mantle border-ctp-surface0 border-r z-10 overflow-scroll pb-6"
				in:fly={{
					easing: quintInOut,
					x: -100,
					duration: 200,
					opacity: 0
				}}
				out:fly={{
					easing: quintInOut,
					x: -100,
					duration: 200,
					opacity: 0
				}}
			>
				<ol class="list-decimal grow pl-5 text-pretty break-words flex flex-col">
					<a href="./test">
						<li class="hover:bg-ctp-surface0 p-1">Introduction</li>
					</a>
					<a href="./test">
						<li class="hover:bg-ctp-surface0 p-1">Analysisssssssssssssssssssssssssssssssssssss</li>
					</a>
					<a href="./test">
						<li class="hover:bg-ctp-surface0 p-1">Items and testing; comparative analytics</li>
					</a>
				</ol>
			</div>
		{/if}
		<!-- <div class="flex flex-col h-full w-full items-center absolute top-0 left-0 overflow-scroll gap-6 z-0"> -->
		<div class="flex flex-col grow items-center overflow-scroll gap-6 z-0">
			<div class="flex flex-col grow pt-6 font-serif" style="width: 37rem; max-width: 37rem;">
				<slot />
			</div>
			<footer class="flex border-ctp-surface0 border-t w-full justify-center p-3">
				<div class="flex flex grow pb-3 pt-3 gap-2" style="width: 37rem; max-width: 37rem;">
					<h1 class="text-lg">TheFireFlyer | All rights reserved.</h1>
					<div class="grow" />
					<h1 class="text-lg">2024/3/31</h1>
				</div>
			</footer>
		</div>
		<!-- <div class="grow"></div> -->
		{#if sidebar_open}
			<div
				class="flex flex-col border-ctp-surface0 border-l z-10"
				style="width: 30rem;"
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
			>
				<div class="grow flex" />
				<div class="flex bg-ctp-mantle border-ctp-surface0 border-t h-80 min-h-80">
					<ul class="list-disc p-3 pl-10 overflow-scroll pb-3 grow">
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
						<li>2024/3/31 | Fix typos</li>
					</ul>
				</div>
			</div>
		{/if}
	</div>
</div>
