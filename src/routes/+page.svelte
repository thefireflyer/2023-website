<script lang="ts">
	///////////////////////////////////////////////////////////////////////////
	//-----------------------------------------------------------------------//
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
				{
					title: 'Graph Editor',
					url: ''
				}
				// {
				// 	title: 'Functional Markup',
				// 	url: ''
				// }
			]
		},
		// {
		// 	section: 'Writing',
		// 	contents: [
		// 		{
		// 			title: 'Watercolor Math',
		// 			url: '',
		// 			desc: 
		// 			['How do we reproduce the visual affect of watercolor, mathematically?']
		// 		},
		// 		// {
		// 		// 	title: 'Review of Housing Market Interventions',
		// 		// 	url: ''
		// 		// },
		// 		{
		// 			title: 'A Simple SAT Solver',
		// 			url: '',
		// 			desc: 
		// 			["What are SAT problems?"
		// 			,"What is DPLL?"
		// 			,"What is CDCL?"
		// 			,"Where can I learn more?"
		// 			]
		// 		},
		// 		{
		// 			title: 'Rendering Graphs',
		// 			url: '',
		// 			desc:
		// 			["How do we formalize graph rendering?"
		// 			,"What is Stress Majorization?"
		// 			,"What is Stochastic Gradient Descent?"
		// 			,"What are some other options?"
		// 			]
		// 		},
		// 		{
		// 			title: 'Factorio & the Simplex Algorithm',
		// 			url: '',
		// 			desc:
		// 			["What is the Simplex algorithm?"
		// 			,"How do we formalize supply chain problems?"
		// 			]
		// 		},
		// 		{
		// 			title: 'The Knuth-Bendix Completion Algorithm in Context',
		// 			url: '',
		// 			desc:
		// 			["What is the Knuth-Bendix Completion algorithm?"
		// 			,"How can it be used in an actual CAS?"
		// 			]
		// 		},
		// 		{
		// 			title: 'Abstract Algebra in HoTT',
		// 			url: ''
		// 		},
		// 		{
		// 			title: 'CSCI 301 in HoTT',
		// 			url: ''
		// 		},
		// 		{
		// 			title: 'Transit Problems',
		// 			url: ''
		// 		},
		// 		{
		// 			title: 'A Gentle Dip into SMT Problems',
		// 			url: ''
		// 		},
		// 		{
		// 			title: 'Constructing Ideology',
		// 			url: ''
		// 		}
		// 	]
		// },
		{
			section: 'Resources',
			contents: [
				{
					title: 'Web-rings',
					url: ''
				},
				{
					title: 'Bookmarks',
					url: '2024/bookmarks'
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
	<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inclusive+Sans:ital@0;1&display=swap" rel="stylesheet">
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
							<!-- {#if link.desc != null}
							 <ul>
								{#each link.desc as q}
								<li>{q}</li>
								{/each}
							 </ul>
							{/if} -->
						</li>
					{/each}
				</ul>
			{/each}
		</ul>
		<div>
			<h2>About Me</h2>
			<p>
				I'm an undergrad studying computer science and sociology. Though, I adore just about
				everything computers, math, and social science.
			</p>
			<p>I mostly write software, but I do occasionally post other forms of writing.</p>
			<p>I also do <a href="/2024/photography">photography</a> from time to time.</p>
			<br />
			<!-- <br />
			<br /> -->
			<div class="footnote">thefireflyer.dev[at]protonmail.com</div>
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
		</div>
	</div>
</div>

<style lang="scss">
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

		font-family: 'Linux Libertine', Times, serif;

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

					ul {
						padding-left: 2em;
						list-style-type: circle;
						padding-bottom: 0em;

						li {
							padding-bottom: 0em;
						}
					}
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
