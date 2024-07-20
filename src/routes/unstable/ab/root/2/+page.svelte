<script lang="ts">
	///////////////////////////////////////////////////////////////////////////
	//-----------------------------------------------------------------------//
	///////////////////////////////////////////////////////////////////////////

	let profile = {
		pfp: '',
		banner: ''
	};

	///////////////////////////////////////////////////////////////////////////

	let posts = [{}];

	///////////////////////////////////////////////////////////////////////////

	let links = [
		{
			section: 'Software',
			contents: [
				{
					title: 'Homeportal',
					url: '/homeportal'
				},
				{
					title: 'CAS',
					url: ''
				},
				{
					title: 'Package Manager',
					url: ''
				},
				// {
				// 	title: 'Typst ⟹ Web',
				// 	url: ''
				// },
				{
					title: 'Graph Editor',
					url: '/2024/graph-editor'
				},
				{
					title: 'Functional Markup',
					url: ''
				}
			]
		},
		{
			section: 'Writing',
			contents: [
				{
					title: 'Playing with Graphs',
					url: ''
				},
				// {
				// 	title: 'Review of Housing Market Interventions',
				// 	url: ''
				// },
				{
					title: 'Factorio Automation',
					url: ''
				}
			]
		},
		{
			section: 'Resources',
			contents: [
				{
					title: 'Web-rings',
					url: '/2024/web-rings'
				},
				{
					title: 'Bookmarks',
					url: '/2024/bookmarks'
				}
			]
		}
		// {
		// 	section: 'Misc',
		// 	contents: [
		// 		{
		// 			title: 'Photography',
		// 			url: ''
		// 		},
		// 		{
		// 			title: 'Senior Project',
		// 			url: ''
		// 		},
		// 		{
		// 			title: 'Archives',
		// 			url: ''
		// 		}
		// 	]
		// }
	];

	///////////////////////////////////////////////////////////////////////////
</script>

<svelte:head>
	<title>thefireflyer</title>
</svelte:head>

<div class="root dark:bg-ctp-crust">
	<header>
		<!-- <img class="icon" src="/icon.svg" alt="Icon" /> -->
		<h1>TheFireFlyer</h1>
	</header>

	<div class="content">
		<ul>
			{#each links as section}
				<li><h2>{section.section}</h2></li>
				<ul>
					{#each section.contents as link}
						<li>
							{#if link.url == ''}
								<div class="placeholder">{link.title}</div>
							{:else}
								<a href={link.url}>
									{link.title}
								</a>
							{/if}
						</li>
					{/each}
				</ul>
			{/each}
		</ul>
		<div>
			<h2>About Me</h2>
			<p>I'm an undergrad studying Computer Science and Sociology.</p>
			<p>I mostly work in Rust and F#. Though, I'm familiar with a laundry list of others.</p>
			<p>I also do <a href="/2024/photography">photography</a> from time to time.</p>
			<br />
			<!-- <br />
			<br /> -->
			<div class="footnote">thefireflyer[at]email.com</div>
			<!-- <br />
			<div class="footnote">⟣ glitchy catgirl ⟢</div> -->
			<!-- <br />
			<div class="footnote">
				<a href="https://github.com/thefireflyer">GitHub</a>
				•
				<a href="">Fedi</a>
				•
				<a href="">Twitter</a>
			</div> -->
			<!-- <p class="placeholder">Email: ...</p> -->
		</div>
	</div>
</div>

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

		// padding: 2em 2em;
		padding-top: 2em;

		font-family: 'Linux Libertine', 'Computer Modern', Times, serif;

		font-size: 16pt;
		// font-size: 18pt;

		// line-height: 1.4em;

		.placeholder {
			// opacity: 70%;
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
			font-family: 'Cormorant Garamond', Times, Serif;
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
			background: #000;
			width: 100%;
		}

		.content {
			flex-grow: 1;
			// display: flex;
			// flex-direction: column;
			// align-items: center;

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
					opacity: 80%;
				}
			}
		}

		p {
			padding-top: 0.3em;
			padding-bottom: 0.3em;
		}

		.logo {
			width: 30ch;
			height: 30ch;
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
