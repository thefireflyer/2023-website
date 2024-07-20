<script>
	import { page } from '$app/stores';

	let urls = [
		{ t: 'Index', u: '/', f: '/' },
		{ t: 'Contact', u: '/contact', f: '/contact' },
		{ t: 'Articles', f: '/YYYY/MM/DD/some-title' },
		{ t: 'Other', f: '/YYYY/some-title' }
	];
</script>

<svelte:head>
	<title>{$page.status} --- thefireflyer</title>
</svelte:head>

<div class="root dark:bg-ctp-crust">
	<div class="top" />
	<header>
		<!-- <img class="icon" src="/icon.svg" alt="Icon" /> -->
		<h1>{$page.status}: {$page.error?.message}</h1>
	</header>

	<div class="content">
		<div>
			{#each urls as page}
				{#if page.u}<p class="title"><a href={page.u}>{page.t}</a></p>
				{:else}<p class="title">{page.t}</p>
				{/if}
			{/each}
		</div>
		<div>
			{#each urls as page}
				<p>—</p>
			{/each}
		</div>
		<div>
			{#each urls as page}
				<p><code>{page.f}</code></p>
			{/each}
		</div>
		<!-- <li>
			Homepage — <code>{'/'}</code>
		</li>
		<li>
			Contact Info — <code>{'/contact'}</code>
		</li>
		<li>
			Articles — <code>{'/YYYY/MM/DD/some-title'}</code>
		</li>
		<li>
			Anything else — <code>{'/YYYY/some-title'}</code>
		</li> -->
	</div>
</div>

<!-- <div
	class="bg-crust
grow flex flex-col
justify-center
items-center
p-3 gap-6
relative"
>
	<h1 class="text-4xl text-red font-bold">{$page.status}: {$page.error?.message}</h1>
	<div
		class="flex items-center
		border-2 border-mantle 
		rounded-xl
		p-2 gap-3"
	>
		<button
		class="flex items-center justify-center w-12 h-12 hover:bg-base rounded-full"
		on:click={() => {
			history.back()
		}}>
			<span class="material-icons text-3xl text-pink"> arrow_back </span>
		</button>
		<a href="/" class="flex items-center justify-center w-12 h-12 hover:bg-base rounded-full">
			<span class="material-icons text-3xl text-pink"> home </span>
		</a>
		<a
			href="/account"
			class="flex items-center justify-center w-12 h-12 hover:bg-base rounded-full"
		>
			<span class="material-icons text-3xl text-pink"> face </span>
		</a>
		<button
		class="flex items-center justify-center w-12 h-12 hover:bg-base rounded-full"
		on:click={() => {
			history.forward()
		}}>
			<span class="material-icons text-3xl text-pink"> arrow_forward </span>
		</button>
	</div>
	<div class="basis-3/12 md:basis-0" />

	<div class="h-1 bg-red w-full absolute bottom-0 left-0" />
</div> -->

<style lang="scss">
	@font-face {
		font-family: 'Computer Modern';
		src: url('/fonts/cmunrm.otf');
	}
	@font-face {
		font-family: 'Computer Modern';
		font-weight: bold;
		src: url('/fonts/cmunrb.otf');
	}
	@font-face {
		font-family: 'Computer Modern';
		font-weight: bold;
		font-style: italic;
		src: url('/fonts/cmunbi.otf');
	}
	@font-face {
		font-family: 'Computer Modern';
		font-style: italic;
		src: url('/fonts/cmunti.otf');
	}

	@font-face {
		font-family: 'Linux Libertine';
		src: url('/fonts/linuxlibertine/LinLibertine_Rah.ttf');
	}
	@font-face {
		font-family: 'Linux Libertine';
		font-weight: bold;
		src: url('/fonts/linuxlibertine/LinLibertine_RBah.ttf');
	}
	@font-face {
		font-family: 'Linux Libertine';
		font-weight: bold;
		font-style: italic;
		src: url('/fonts/linuxlibertine/LinLibertine_RBIah.ttf');
	}
	@font-face {
		font-family: 'Linux Libertine';
		font-style: italic;
		src: url('/fonts/linuxlibertine/LinLibertine_RIah.ttf');
	}

	$primary: rgb(250, 230, 243);
	$primary-o50: transparentize($primary, 0.5);
	$primary-o60: transparentize($primary, 0.6);
	$primary-o70: transparentize($primary, 0.7);
	$primary-o80: transparentize($primary, 0.8);
	$primary-o90: transparentize($primary, 0.9);

	.root {
		overflow-y: scroll;

		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2em;

		flex-grow: 1;

		padding: 2em 2em;

		font-family: 'Linux Libertine', 'Computer Modern', Times, serif;

		font-size: 16pt;
		// font-size: 18pt;

		// line-height: 1.4em;

		.top {
			height: calc(50% - 2 * 63pt);
		}

		.placeholder {
			opacity: 70%;
		}

		.footnote {
			text-align: center;
			opacity: 70%;
			font-style: italic;

			a {
				text-decoration-color: $primary-o70;
				text-decoration-style: dotted;
			}
		}

		h1 {
			// font-family: 'Cormorant Garamond', Times, Serif;
			font-size: 1.75em;
			font-style: oblique;
			opacity: 70%;
			font-weight: bold;
		}

		h2 {
			// font-family: 'Cormorant Garamond', Times, Serif;
			font-weight: bold;
			// font-size: 20pt;
			padding-bottom: 0.5em;
		}

		header {
			text-align: center;
		}

		footer {
			text-align: center;
		}

		.content {
			flex-grow: 1;
			display: flex;
			flex-direction: row;

			gap: 1ch;

			.title {
				text-align: right;
			}

			max-width: 50ch;
		}

		.icon {
		}

		a {
			text-decoration: underline 2px $primary-o80;
		}

		a:hover {
			text-decoration-color: $primary-o50;
			background-color: $primary-o90;
		}

		ul {
			ul {
				// padding-left: 2em;
				list-style-type: circle;
				padding-bottom: 1.5em;

				li {
					// font-size: 18pt;
					font-weight: normal;
					padding-bottom: 0em;
				}
			}
		}

		p {
			padding-bottom: 0.5em;
		}

		code {
			font-size: 0.8em;
			padding: 0.25ch 0.5ch;
			background-color: $primary-o80;
			border-radius: 2pt;
		}

		@media screen and (min-width: 50em) {
			.content {
				font-size: 16pt;
				max-width: 65ch;
			}
		}

		@media screen and (min-width: 75em) {
		}
	}
</style>
