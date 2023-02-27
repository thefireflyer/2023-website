<script>

	import { page } from '$app/stores';
	import { navigating } from '$app/stores';

	import { fade, fly, scale, slide } from 'svelte/transition';
	import { quintInOut, elasticInOut } from 'svelte/easing';

	import Navlink from '../../lib/navlink.svelte';
	import Transition from '$lib/transition.svelte';


	/**
	 * @type {any}
	 */
	let online;

	let pageUrl = '';

	let animated = true;

	navigating.subscribe((nav) => {
		if (nav) {
			console.log(nav);
			console.log(nav.to?.url.pathname);
			if (nav.to) {
				pageUrl = nav.to.url.pathname.split('/')[2];

				if (nav.from?.url.pathname.split('/')[1] != nav.to.url.pathname.split('/')[1])
                {
                    animated = false
                }
                else {
                    animated = true
                }
			}
		}
	});

	let menuOpen = false;


	import { onMount } from 'svelte';
	import {SetupStorage, loading} from '../../lib/storagesys.js'
	

	onMount(() => {
		let storageContext = SetupStorage()
	})

</script>

<svelte:window bind:online />

<div class="grow flex flex-col bg-white dark:bg-neutral-800 overflow-hidden">
	<header class="p-2 hidden md:flex">
		<div
			class="
                grow
                grid
                items-stretch
                justify-start
                grid-rows-1
                grid-flow-col"
		>
			<a href="/"
				><div class="">
					<span
						class="
            md:dark:bg-violet-900
            rounded-full
            text-md
            material-icons-round text-center"
					>
						apps
					</span>
				</div>
			</a>
			{#each $page.url.pathname.split('/') as page}
				{#if page != '' && page != 'app'}
					<div class="">
						<span class="text-md material-icons text-center"> chevron_right </span>
					</div>
					<div class="">
						<span class="text-md text-center">
							{page}
						</span>
					</div>
				{/if}
			{/each}
		</div>
		<div>
			{#if online === false}
				<div class="">
					<span
						class="
                    text-md
                    material-icons-outlined
                    text-center"
					>
						offline_bolt
					</span>
				</div>
			{/if}
		</div>
	</header>
	<div
		class="
    grow 
	flex flex-row overflow-hidden
    "
	>
		<div
			class="sidebar
        hidden md:flex
        p-2 columns-2 items-center md:columns-1 md:flex-col"
		>
			<div class="hidden md:flex grow flex-col columns-1">
				<Navlink pathname="/app">space_dashboard</Navlink>
				<div class="p-3" />
				<Navlink pathname="/app/schedule">calendar_today</Navlink>
				<div class="p-3" />
				<Navlink pathname="/app/mip">article</Navlink>

				<div class="grow" />
				<Navlink pathname="/app/settings">settings</Navlink>
			</div>
		</div>

		{#if $loading}
		
		<div class="
		grow flex justify-center items-center
		rounded-b-xl
		slot-container
		relative
		bg-neutral-100 dark:bg-neutral-900
		overflow-hidden">
			<span class="
			w-14 h-14
			flex justify-center items-center
			rounded-full
			material-icons-outlined text-4xl 
			text-gray-500 dark:text-gray-400">
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
				url={pageUrl}
				classes="
            absolute top-0 left-0
            w-full h-full
            flex
            overflow-hidden flex-col md:flex-row"
			animated={animated}>
				<slot />
			</Transition>
		</div>

		{/if}

	</div>

	<footer class="flex md:hidden">
		<div
			class="grow
                flex md:hidden
                p-2 items-center"
		>
			<a href="/" 
            class="
            p-2
            h-max
            grid
            items-center justify-center grid-rows-1">
					<span
						class="
            rounded-full
            material-icons-round text-center"
					>
						apps
					</span>
			</a>
			<div class="grow" />

			<Navlink pathname="/app">space_dashboard</Navlink>
			<div class="p-4" />
			<Navlink pathname="/app/schedule">calendar_today</Navlink>
			<div class="p-4" />
			<Navlink pathname="/app/mip">article</Navlink>

			<div class="grow" />
			<Navlink pathname="/app/settings">settings</Navlink>
		</div>
	</footer>
</div>

<style>
	@import '../../lib/material-theme/css/theme.css';

	footer {
		min-height: 64px;
		height: 64px;
	}

	.slot-item {
		position: absolute;
		top: 0px;
		left: 0px;
		width: 100%;
		height: 100%;
	}

	@media screen and (min-width: 768px) {
	
        .slot-container {
			border-radius: 12px 0 0 0;
		}

		header {
			min-height: 40px;
			height: 40px;
		}

		.sidebar {
			height: 100%;
			min-width: 40px;
			width: 40px;
			transition: width 0.2s ease-in-out;
		}

		@media (prefers-color-scheme: dark) {
			.slot-container {
				box-shadow: inset 0.5em 0.5em 0.5em -0.5em black;
			}
		}
	}
</style>
