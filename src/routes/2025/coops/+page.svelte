<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';

	let menu_open = false;
</script>

<svelte:head>
	<title>Food Security & Cooperatives | Food for Thought 1 | GLBL 201</title>
	<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inclusive+Sans:ital@0;1&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</svelte:head>

<div
	class="dark:bg-ctp-crust
grow flex flex-col
relative overflow-hidden
root"
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
                material-icons"
			>
				menu
			</span>
		</button>
        <div class="grow" />
		<button class="hover:bg-ctp-surface1 rounded-md" style="width: 2em; height: 2em;">
			<span
				class="
                text-2xl
                material-icons"
			>
				search
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
			<div class="flex flex-col grow pt-6" style="width: 37rem; max-width: 37rem;">
                <div class="flex flex-col grow text-pretty break-words" style="gap: 0.40rem;">
                    <h1 class="text-xl">Abstract</h1>
                    <br/>
                    <p>qwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnmqwertyuiopasdfghjklzxcvbnm</p>
                </div>
			</div>
			<footer class="flex border-ctp-surface0 border-t w-full justify-center p-3">
				<div class="flex flex grow pb-3 pt-3 gap-2" style="width: 37rem; max-width: 37rem;">
					<h1 class="text-lg">TheFireFlyer | All rights reserved.</h1>
					<div class="grow" />
					<h1 class="text-lg">2024/3/31</h1>
				</div>
			</footer>
		</div>
	</div>
</div>


<style lang="scss">
    .root {
		font-family: 'Linux Libertine', Times, serif;
    }
</style>